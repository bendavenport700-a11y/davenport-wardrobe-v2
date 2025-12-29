"use client";

import Image from "next/image";
import React from "react";
import inventoryData from "../../../data/inventory.json";

type InventoryItem = {
  id: string;
  name: string;
  collection?: string;
  category: string;
  sizes?: (string | number)[];
  price?: number;
  status?: "available" | "low-stock" | "unavailable";
  image?: string;
  notes?: string;
  tags?: string[];
};

export default function NewArrivalsPage() {
  const items = inventoryData as InventoryItem[];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #121214 0%, #060607 55%)",
        color: "#f1f1f1",
        padding: "140px 24px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }

        .container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
          margin-top: 30px;
        }

        .card {
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 18px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
          display: grid;
          gap: 10px;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.26);
          box-shadow: 0 18px 60px rgba(0,0,0,0.45);
        }

        .imageWrap {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .pill {
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          font-weight: 700;
          letter-spacing: 0.04em;
        }
      `}</style>

      <div className="container">
        <span
          style={{
            letterSpacing: "0.18em",
            fontSize: "0.75rem",
            opacity: 0.6,
          }}
        >
          WARDROBES
        </span>
        <h1
          style={{
            fontSize: "clamp(2.6rem, 5vw, 3.6rem)",
            margin: "14px 0 12px",
            letterSpacing: "-0.02em",
          }}
        >
          New Arrivals
        </h1>
        <p style={{ opacity: 0.75, maxWidth: 760, lineHeight: 1.7 }}>
          This page now reads directly from <code>data/inventory.json</code>.
          Add or edit rows (from your Google Sheets export), drop photos into{" "}
          <code>public/inventory/</code>, and redeploy to update these cards.
        </p>

        <div className="grid">
          {items.map((item) => {
            const status = item.status ?? "available";
            const price =
              typeof item.price === "number" && !Number.isNaN(item.price)
                ? item.price
                : undefined;
            const sizes = Array.isArray(item.sizes)
              ? item.sizes
              : item.sizes
                ? [String(item.sizes)]
                : [];

            return (
              <div key={item.id} className="card">
                <div className="imageWrap">
                  <Image
                    src={item.image || "/inventory/placeholder.jpg"}
                    alt={item.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, 400px"
                    priority
                  />
                </div>
                <div style={{ display: "grid", gap: 6, padding: "0 14px 14px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                    <div>
                      <div style={{ opacity: 0.7, fontSize: "0.9rem" }}>
                        {item.collection || "Wardrobe"}
                      </div>
                      <h3 style={{ margin: "2px 0 4px", fontSize: "1.15rem" }}>{item.name}</h3>
                      <div style={{ opacity: 0.7 }}>{item.category}</div>
                    </div>
                    <span
                      className="pill"
                      style={{
                        background:
                          status === "low-stock"
                            ? "rgba(255, 205, 86, 0.15)"
                            : status === "unavailable"
                              ? "rgba(255, 99, 132, 0.15)"
                              : "rgba(75, 181, 67, 0.18)",
                        color:
                          status === "low-stock"
                            ? "#e6b800"
                            : status === "unavailable"
                              ? "#ff6b81"
                              : "#6bd66b",
                        borderColor: "rgba(255,255,255,0.18)",
                      }}
                    >
                      {status}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <span className="pill">Sizes: {sizes.join(", ") || "TBD"}</span>
                    <span className="pill">
                      {price !== undefined ? `$${price}` : "Price on request"}
                    </span>
                  </div>
                  {item.tags?.length ? (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {item.tags.map((tag) => (
                        <span key={tag} className="pill">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {item.notes ? (
                    <div style={{ opacity: 0.72, lineHeight: 1.5 }}>{item.notes}</div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
