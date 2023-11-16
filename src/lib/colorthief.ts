import getPixels from "get-pixels";
import quantize, { type RgbPixel } from "quantize";
import type { NdArray } from "ndarray";

function createPixelArray(
  imgData: Uint8Array,
  pixelCount: number,
  quality: number
): RgbPixel[] {
  const pixels = imgData;
  const pixelArray: RgbPixel[] = [];

  for (let i = 0, offset, r, g, b, a; i < pixelCount; i += quality) {
    offset = i * 4;
    r = pixels[offset + 0];
    g = pixels[offset + 1];
    b = pixels[offset + 2];
    a = pixels[offset + 3];

    // If pixel is mostly opaque and not white
    if (typeof a === "undefined" || a >= 125) {
      if (!(r > 250 && g > 250 && b > 250)) {
        pixelArray.push([r, g, b]);
      }
    }
  }
  return pixelArray;
}

function validateOptions(options: { colorCount: number; quality: number }) {
  let { colorCount, quality } = options;

  if (typeof colorCount === "undefined" || !Number.isInteger(colorCount)) {
    colorCount = 10;
  } else if (colorCount === 1) {
    throw new Error(
      "colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()"
    );
  } else {
    colorCount = Math.max(colorCount, 2);
    colorCount = Math.min(colorCount, 20);
  }

  if (
    typeof quality === "undefined" ||
    !Number.isInteger(quality) ||
    quality < 1
  ) {
    quality = 10;
  }

  return {
    colorCount,
    quality,
  };
}

function loadImg(img: string) {
  return new Promise<NdArray<Uint8Array>>((resolve, reject) => {
    getPixels(img, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function getPalette(img: string, colorCount = 10, quality = 10) {
  const options = validateOptions({
    colorCount,
    quality,
  });

  return new Promise<RgbPixel[] | null>((resolve, reject) => {
    loadImg(img)
      .then((imgData: NdArray<Uint8Array>) => {
        const pixelCount = imgData.shape[0] * imgData.shape[1];
        const pixelArray = createPixelArray(
          imgData.data,
          pixelCount,
          options.quality
        );

        const cmap = quantize(pixelArray, options.colorCount);
        const palette = cmap ? cmap.palette() : null;

        resolve(palette);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function getColor(img: string, quality: number) {
  return new Promise<RgbPixel>((resolve, reject) => {
    getPalette(img, 5, quality)
      .then((palette: RgbPixel[] | null) => {
        // @ts-ignore
        resolve(palette[0]);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export { getColor, getPalette };
