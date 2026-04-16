import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #f8fbff 0%, #eef4ff 45%, #fff7f0 100%)",
          color: "#0f172a",
          fontFamily: "sans-serif",
          padding: "56px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            borderRadius: "36px",
            padding: "52px",
            background: "rgba(255,255,255,0.92)",
            border: "1px solid rgba(203,213,225,0.9)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: 28,
              color: "#1d4ed8",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "18px",
                height: "18px",
                borderRadius: "9999px",
                background: "#f97316",
              }}
            />
            Meta Ads Lead Engine
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 800 }}>
              Stop Guessing With Your Marketing.
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.3, color: "#475569" }}>
              Get 20-50 qualified leads in 30 days using a proven Meta Ads
              system.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 28,
              color: "#0f766e",
            }}
          >
            <div>Done-for-you lead generation</div>
            <div>Guarantee included</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
