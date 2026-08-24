import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0c1f33 0%, #152d4a 100%)",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            color: "#c9a962",
            fontSize: 96,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
          }}
        >
          A
        </div>
      </div>
    ),
    { ...size },
  );
}
