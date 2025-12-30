"use client";

import React from "react";
import inventoryData from "../../data/inventory.json";
import Image from "next/image";

const slugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-");

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

export default function WardrobesPage() {
  const inventory = inventoryData as InventoryItem[];
  const collections = Array.from(
    new Set(
      inventory
        .map((item) => item.collection?.trim())
        .filter((c): c is string => Boolean(c)),
    ),
  );

  const grouped = inventory.reduce<Record<string, InventoryItem[]>>((acc, item) => {
    const key = item.collection || "Other";
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #121214 0%, #060607 55%)",
        color: "#f1f1f1",
        padding: "140px 24px 100px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        img { display: block; max-width: 100%; }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .collection {
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 20px;
          margin-bottom: 26px;
          background: rgba(255,255,255,0.03);
        }

        .collectionHeader {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: baseline;
          margin-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.14);
          padding-bottom: 12px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 18px;
          display: grid;
          gap: 12px;
          transition: transform .2s ease, border-color .2s ease;
        }

        .card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.22);
        }

        .imageWrap {
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .tag {
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          font-size: 0.88rem;
          opacity: 0.85;
        }
      `}</style>

      <div className="container">
        <div style={{ opacity: 0.7, letterSpacing: "0.16em", fontSize: "0.8rem" }}>
          EXPLORE WARDROBES
        </div>
        <h1 style={{ fontSize: "clamp(2.8rem, 5vw, 3.8rem)", margin: "12px 0" }}>
          Wardrobe lineup
        </h1>
        <p style={{ opacity: 0.78, maxWidth: 760, lineHeight: 1.65, marginBottom: 28 }}>
          Each section below is a wardrobe collection. The cards are pulled straight from
          <code> data/inventory.json</code>, so what you see here is the live wardrobe
          inventory.
        </p>

        {collections.map((collection) => {
          const items = grouped[collection] || [];
          return (
            <div
              key={collection}
              id={slugify(collection)}
              className="collection"
            >
              <div className="collectionHeader">
                <div>
                  <div style={{ opacity: 0.65, letterSpacing: "0.08em", fontSize: "0.8rem" }}>
                    Wardrobe Collection
                  </div>
                  <h2
                    style={{
                      margin: "4px 0 2px",
                      fontSize: "1.8rem",
                      letterSpacing: "0.04em",
                      background:
                        "linear-gradient(120deg, rgba(255,255,255,0.96), rgba(120,200,255,0.75))",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      textShadow: "0 6px 24px rgba(120,200,255,0.25)",
                    }}
                  >
                    {collection}
                  </h2>
                  <div style={{ opacity: 0.7, fontSize: "0.95rem" }}>
                    {items.length} item{items.length === 1 ? "" : "s"}
                  </div>
                </div>
                <a
                  href="#top"
                  style={{
                    padding: "8px 12px",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.16)",
                    background: "rgba(255,255,255,0.05)",
                    color: "inherit",
                    textDecoration: "none",
                    fontWeight: 600,
                    opacity: 0.85,
                  }}
                >
                  Back to top
                </a>
              </div>
              {items.length === 0 ? (
                <div style={{ opacity: 0.65 }}>Coming soon</div>
              ) : (
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
                            width={800}
                            height={600}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            sizes="(max-width: 640px) 100vw, 400px"
                          />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                          <div>
                            <div style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                              {collection}
                            </div>
                            <h3 style={{ margin: "2px 0 4px", fontSize: "1.1rem" }}>{item.name}</h3>
                            <div style={{ opacity: 0.7 }}>{item.category}</div>
                          </div>
                          <span
                            className="tag"
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
                              border: "1px solid rgba(255,255,255,0.12)",
                              fontWeight: 700,
                            }}
                          >
                            {status}
                          </span>
                        </div>
                        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                          <span className="tag">Sizes: {sizes.join(", ") || "TBD"}</span>
                          <span className="tag">
                            {price !== undefined ? `$${price}` : "Price on request"}
                          </span>
                        </div>
                        {item.tags?.length ? (
                          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {item.tags.map((tag) => (
                              <span key={tag} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                        ) : null}
                        {item.notes ? (
                          <div style={{ opacity: 0.75, lineHeight: 1.5 }}>{item.notes}</div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
