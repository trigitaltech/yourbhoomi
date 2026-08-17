import { ImageResponse } from "next/og";

export const alt = "Your Bhoomi — NRI property care in India for ancestral land";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#ffffff",
          color: "#1f2430",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 48, height: 48, borderRadius: 10, background: "#0e2a5c" }} />
          <span style={{ fontSize: 32, fontWeight: 600, color: "#0e2a5c" }}>Your Bhoomi</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span style={{ fontSize: 64, fontWeight: 600, color: "#0e2a5c", lineHeight: 1.1 }}>
            Your man in India for the ancestral land you left behind.
          </span>
          <span style={{ fontSize: 30, color: "#5f6673" }}>
            NRI property care — watch, manage, transfer, comply.
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 24, color: "#b3261e" }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: "#b3261e" }} />
          ID-verified local partners · Reported on WhatsApp
        </div>
      </div>
    ),
    size,
  );
}
