import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lumina Nails — Luxury Nail Care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #fbf7f3 0%, #f0d9d3 55%, #e8c4bc 100%)",
          color: "#44403c",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>
          Lumina Nails
        </div>
        <div style={{ marginTop: 24, fontSize: 64, lineHeight: 1.1, maxWidth: 900 }}>
          Luxury Nail Care Designed Just For You
        </div>
        <div style={{ marginTop: 28, fontSize: 28, opacity: 0.8 }}>
          Private studio · Appointment only
        </div>
      </div>
    ),
    { ...size },
  );
}
