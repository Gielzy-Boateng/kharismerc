import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(1000px 500px at 10% 0%, #F5C518 0%, #111111 45%, #0a0a0a 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: "#F5C518",
              textTransform: "uppercase",
            }}
          >
            Business Solutions
          </div>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Kharismerc
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: "900px",
            }}
          >
            One partner for every job, business, and space.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "780px",
              lineHeight: 1.35,
            }}
          >
            Recruitment · Registration · Cleaning · Surveying · Real estate ·
            Travel · Design
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "22px",
            color: "#F5C518",
            fontStyle: "italic",
          }}
        >
          {siteConfig.motto}
        </div>
      </div>
    ),
    { ...size }
  );
}
