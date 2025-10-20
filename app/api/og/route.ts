import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#0ea5e9",
          width: "100%",
          height: "100%",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Ryan — Portfolio
      </div>
    ),
    { ...size }
  );
}
