import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MovingSoftware.io - Compare Moving Company Software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1E40AF 0%, #1d4ed8 50%, #F97316 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Truck icon area */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
          <div style={{
            background: "rgba(255,255,255,0.2)",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
          }}>
            <span style={{ fontSize: "48px" }}>🚛</span>
          </div>
        </div>
        <h1 style={{
          color: "white",
          fontSize: "64px",
          fontWeight: "900",
          textAlign: "center",
          margin: "0 0 16px 0",
          lineHeight: 1.1,
        }}>
          MovingSoftware.io
        </h1>
        <p style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "28px",
          textAlign: "center",
          margin: "0 40px",
          lineHeight: 1.4,
        }}>
          Independent comparisons of moving company software
        </p>
        <div style={{
          display: "flex",
          gap: "16px",
          marginTop: "32px",
        }}>
          {["Supermove", "SmartMoving", "Elromco", "MoveitPro"].map((name) => (
            <div key={name} style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: "8px",
              padding: "8px 16px",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
            }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
