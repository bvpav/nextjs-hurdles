// Based on: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#generate-images-using-code-js-ts-tsx

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const runtime = "nodejs"; // Explicitly set

// Font loading, process.cwd() is Next.js project directory
const geistSemiBold = await readFile(
  join(process.cwd(), "src/assets/Geist-SemiBold.ttf")
);

// Image generation
export default async function Image() {
  const geistSemiBoldData = await geistSemiBold;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Static Things
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistSemiBoldData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
