import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export default async function OpengraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public", "brand", "logo.png")
  );
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "radial-gradient(900px 500px at 85% 20%, #F5C51855 0%, #111111 42%, #0a0a0a 100%)",
          color: "white",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            maxWidth: "640px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div
              style={{
                fontSize: "26px",
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

          <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <div
              style={{
                fontSize: "42px",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              One partner for every job, business, and space.
            </div>
            <div
              style={{
                fontSize: "22px",
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.35,
              }}
            >
              Recruitment · Registration · Cleaning · Surveying · Real estate ·
              Travel · Design
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#F5C518",
                fontStyle: "italic",
                marginTop: "8px",
              }}
            >
              {siteConfig.motto}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "360px",
            height: "360px",
            borderRadius: "9999px",
            background: "white",
            boxShadow: "0 0 0 10px rgba(245, 197, 24, 0.35)",
            overflow: "hidden",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt=""
            width={360}
            height={360}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
