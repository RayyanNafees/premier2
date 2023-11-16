import { getColor } from "@/lib/colorthief";
import type { APIRoute } from "astro";
import type { RgbPixel } from "quantize";
export const GET: APIRoute = async ({ request }) => {
  const image = new URL(request.url).searchParams.get("image");
  if (!image) {
    console.log("bgcolor", { image });
    return new Response("No image sent in query string", { status: 400 });
  }
  const color: RgbPixel = await getColor(image, 0.5)
  return new Response(JSON.stringify(color));
};
