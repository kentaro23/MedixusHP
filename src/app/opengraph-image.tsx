import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Medixus Inc. OGP";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #0D4F6B 100%)",
          color: "#fff",
          padding: "72px"
        }}
      >
        <div style={{ fontSize: 46, fontWeight: 700 }}>Medixus Inc.</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: 72, fontWeight: 700 }}>声で、命を守る。</div>
          <div style={{ fontSize: 30, color: "#D8FDF5" }}>App-less 医療AIプラットフォーム</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
