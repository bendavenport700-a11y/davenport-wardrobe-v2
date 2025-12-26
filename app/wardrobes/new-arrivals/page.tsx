"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { NEW_ARRIVALS } from "../data";

export default function NewArrivalsPage() {
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
        img { display: block; max-width: 100%; }

        .container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .fade {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeIn .9s ease forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
          margin-top: 36px;
        }

        .arrivalCard {
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          transition: transform .3s ease, border-color .3s ease, box-shadow .3s ease;
          position: relative;
        }

        .arrivalCard:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.26);
          box-shadow: 0 18px 60px rgba(0,0,0,0.55);
        }

        .heroImg {
          height: 220px;
          position: relative;
          overflow: hidden;
        }

        .slideTrack {
          display: flex;
          height: 100%;
          transition: transform .8s ease;
        }

        .slidePanel {
          min-width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          filter: brightness(0.88);
        }

        .heroImg::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,0.0), rgba(0,0,0,0.55));
        }

        .pill {
          position: absolute;
          top: 14px;
          left: 14px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(0,0,0,0.65);
          border: 1px solid rgba(255,255,255,0.16);
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .arrivalBody {
          padding: 20px 18px 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .title {
          font-size: 1.35rem;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .desc {
          opacity: 0.78;
          line-height: 1.65;
        }

        .meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          opacity: 0.88;
        }

        .meta span {
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
        }

        .itemRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .itemChip {
          border-radius: 12px;
          padding: 8px 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          opacity: 0.9;
          font-weight: 600;
        }

        .galleryRow {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }

        .thumb {
          width: 70px;
          height: 70px;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.16);
          opacity: 0.8;
          transition: border-color .2s ease, opacity .2s ease, transform .2s ease;
          cursor: pointer;
        }

        .thumb.active {
          border-color: rgba(255,255,255,0.3);
          opacity: 1;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="container fade">
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
          Fresh releases and brand-new items that have never been worn. Built
          around the latest drops, fabric updates, and modern silhouettes.
        </p>

        <div className="grid">
          {NEW_ARRIVALS.map((w) => (
            <ArrivalCard key={w.name} wardrobe={w} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ArrivalCard({ wardrobe }: { wardrobe: (typeof NEW_ARRIVALS)[number] }) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % wardrobe.gallery.length);
    }, 2400);
    return () => clearInterval(id);
  }, [wardrobe.gallery.length]);

  return (
    <div className="arrivalCard">
      <div className="heroImg">
        <div
          className="slideTrack"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {wardrobe.gallery.map((src) => (
            <div
              key={src}
              className="slidePanel"
              style={{ backgroundImage: `url(${src})` }}
            />
          ))}
        </div>
        <div className="pill">Fresh Drop</div>
      </div>

      <div className="arrivalBody">
        <h3 className="title">{wardrobe.name}</h3>
        <div className="meta">
          <span>In circulation: new release</span>
          <span>{wardrobe.brands.slice(0, 2).join(" · ")}</span>
          <span>From ${wardrobe.monthlyFee}/mo</span>
        </div>
        <p className="desc">{wardrobe.description}</p>

        <div className="itemRow">
          {wardrobe.items.slice(0, 4).map((item) => (
            <div key={item} className="itemChip">
              {item}
            </div>
          ))}
        </div>

        <div className="galleryRow">
          {wardrobe.gallery.slice(0, 3).map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`${wardrobe.name} detail`}
              className={`thumb ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
