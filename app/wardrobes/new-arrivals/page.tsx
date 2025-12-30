"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import inventoryData from "../../../data/inventory.json";

type InventoryItem = {
  id: string;
  name: string;
  collection?: string;
  category: string;
  image?: string;
};

const slugify = (str: string) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function NewArrivalsPage() {
  const items = inventoryData as InventoryItem[];

  const collectionMap = items.reduce<Record<string, InventoryItem>>((acc, item) => {
    if (!item.collection) return acc;
    const key = item.collection.trim().toLowerCase();
    if (!acc[key]) acc[key] = item; // first item per collection
    return acc;
  }, {});

  const slides = Object.values(collectionMap).map((item) => ({
    name: item.collection || "Wardrobe",
    category: item.category,
    image: item.image || "/inventory/placeholder.jpg",
    href: `/wardrobes#${slugify(item.collection || "wardrobe")}`,
  }));

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!slides.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3200);
    return () => clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

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

        .container { max-width: 1180px; margin: 0 auto; }

        .hero {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          min-height: 420px;
        }

        .controls {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          flex-wrap: wrap;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.24);
          border: 1px solid rgba(255,255,255,0.32);
          cursor: pointer;
          transition: all .2s ease;
        }
        .dot.active {
          width: 28px;
          background: #fff;
          border-color: #fff;
        }

        .thumbs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 12px;
          margin-top: 22px;
        }

        .thumb {
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.05);
          padding: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: border-color .2s ease, transform .2s ease;
        }
        .thumb:hover {
          border-color: rgba(255,255,255,0.26);
          transform: translateY(-2px);
        }
        .thumb.active {
          border-color: rgba(255,255,255,0.36);
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
          Tap any wardrobe to jump to Explore and see the full lineup. Every collection shown
          here is considered a current arrival.
        </p>

        <Link href={current.href} style={{ color: "inherit", textDecoration: "none" }}>
          <div className="hero">
            <Image
              src={current.image}
              alt={current.name}
              fill
              style={{ objectFit: "cover", filter: "brightness(0.85)" }}
              sizes="(max-width: 720px) 100vw, 1180px"
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(0,0,0,0.2), rgba(0,0,0,0.65))",
              }}
            />
            <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
              <div style={{ opacity: 0.75, marginBottom: 8 }}>{current.category}</div>
              <h2 style={{ margin: 0, fontSize: "2.2rem" }}>{current.name}</h2>
              <div style={{ marginTop: 10, display: "flex", gap: 10, alignItems: "center" }}>
                <span
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    fontWeight: 700,
                  }}
                >
                  View in Explore →
                </span>
              </div>
            </div>
          </div>
        </Link>

        <div className="controls" aria-label="New arrivals slider controls">
          {slides.map((slide, i) => (
            <button
              key={slide.name}
              className={`dot ${i === index ? "active" : ""}`}
              aria-label={`Go to ${slide.name}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="thumbs">
          {slides.map((slide, i) => (
            <Link key={slide.name} href={slide.href} style={{ color: "inherit" }}>
              <div className={`thumb ${i === index ? "active" : ""}`} onMouseEnter={() => setIndex(i)}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="96px"
                  />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>{slide.name}</div>
                  <div style={{ opacity: 0.7, fontSize: "0.95rem" }}>{slide.category}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
