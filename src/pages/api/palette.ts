import { getPalette } from "@/lib/colorthief";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const image = new URL(request.url).searchParams.get("image");
  if (!image) {
    console.log("palette", { image });
    return new Response("No image query string found", { status: 400 });
  }

  const resp = await getPalette(image);

  return new Response(JSON.stringify(resp));
};
