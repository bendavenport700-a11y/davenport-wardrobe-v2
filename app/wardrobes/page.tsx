"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { WARDROBES, Wardrobe } from "./data";

type Filters = {
  size: string;
  season: string;
  occasion: string;
  style: string;
  price: string;
};

const SIZE_OPTIONS = [
  { label: "All sizes", value: "" },
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
];

const SEASON_OPTIONS = [
  { label: "All seasons", value: "" },
  { label: "Spring", value: "Spring" },
  { label: "Summer", value: "Summer" },
  { label: "Fall", value: "Fall" },
  { label: "Winter", value: "Winter" },
];

const OCCASION_OPTIONS = [
  { label: "Any occasion", value: "" },
  { label: "School", value: "School" },
  { label: "Work", value: "Work" },
  { label: "Active", value: "Active" },
  { label: "Travel", value: "Travel" },
  { label: "Weekend", value: "Weekend" },
  { label: "Events", value: "Events" },
];

const STYLE_OPTIONS = [
  { label: "All styles", value: "" },
  { label: "Minimal", value: "Minimal" },
  { label: "Tailored", value: "Tailored" },
  { label: "Casual", value: "Casual" },
  { label: "Athletic", value: "Athletic" },
  { label: "Statement", value: "Statement" },
  { label: "Modern", value: "Modern" },
];

const PRICE_OPTIONS = [
  { label: "Any price", value: "" },
  { label: "Under $130", value: "under130" },
  { label: "$130 - $170", value: "130-170" },
  { label: "$170+", value: "170plus" },
];

export default function WardrobesPage() {
  const [lightbox, setLightbox] = React.useState<{
    open: boolean;
    images: string[];
    index: number;
    title: string;
  }>({ open: false, images: [], index: 0, title: "" });

  const [filters, setFilters] = React.useState<Filters>({
    size: "",
    season: "",
    occasion: "",
    style: "",
    price: "",
  });

  const [aiPrompt, setAiPrompt] = React.useState("");

  React.useEffect(() => {
    if (!lightbox.open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox((p) => ({ ...p, open: false }));
      if (e.key === "ArrowRight")
        setLightbox((p) => ({
          ...p,
          index: (p.index + 1) % p.images.length,
        }));
      if (e.key === "ArrowLeft")
        setLightbox((p) => ({
          ...p,
          index: (p.index - 1 + p.images.length) % p.images.length,
        }));
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox.open, lightbox.images.length]);

  const filteredWardrobes = React.useMemo(() => {
    return WARDROBES.filter((w) => {
      if (filters.size && !w.sizes.includes(filters.size)) return false;
      if (filters.season && !w.seasons.includes(filters.season)) return false;
      if (filters.occasion && !w.occasions.includes(filters.occasion)) return false;
      if (filters.style && !w.styles.includes(filters.style)) return false;

      if (filters.price) {
        if (filters.price === "under130" && w.monthlyFee >= 130) return false;
        if (filters.price === "130-170" && (w.monthlyFee < 130 || w.monthlyFee > 170))
          return false;
        if (filters.price === "170plus" && w.monthlyFee < 170) return false;
      }

      return true;
    });
  }, [filters]);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightbox({ open: true, images, index, title });
  };

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
      {/* STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        img { display: block; max-width: 100%; }
        
        .container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .fade {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeIn .9s ease forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .filtersPanel {
          margin: 28px 0 12px;
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        }

        .filterGroup {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 14px 16px;
        }

        .filterLabel {
          opacity: 0.72;
          font-size: 0.9rem;
          margin-bottom: 8px;
          letter-spacing: 0.02em;
        }

        .chipRow {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .chip {
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.06);
          color: #f8f8f8;
          padding: 8px 12px;
          border-radius: 12px;
          cursor: pointer;
          transition: border-color .2s ease, transform .2s ease, opacity .2s ease, background .2s ease;
          font-weight: 600;
        }

        .chip:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,0.28);
        }

        .chip.active {
          background: rgba(255,255,255,0.16);
          border-color: rgba(255,255,255,0.32);
          box-shadow: 0 8px 28px rgba(0,0,0,0.35);
        }

        .aiBox {
          margin: 16px 0 30px;
          padding: 18px 20px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .aiLabel {
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          opacity: 0.78;
          text-transform: uppercase;
        }

        .aiInput {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 12px 14px;
          color: #f1f1f1;
        }

        .aiHint {
          font-size: 0.95rem;
          opacity: 0.68;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 32px;
        }

        .wardrobeCard {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          min-height: 460px;
          transition: transform .35s ease, border-color .35s ease, box-shadow .35s ease;
          will-change: transform;
        }

        .wardrobeCard:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.26);
          box-shadow: 0 18px 60px rgba(0,0,0,0.55);
        }

        .wardrobeBg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.82);
          transition: transform .6s ease, filter .6s ease;
        }

        .wardrobeCard:hover .wardrobeBg {
          transform: scale(1.06);
          filter: brightness(0.9);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.12),
            rgba(0,0,0,0.92)
          );
        }

        .content {
          position: relative;
          height: 100%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 16px;
        }

        .tag {
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          opacity: 0.65;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .title {
          font-size: 1.7rem;
          font-weight: 600;
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .desc {
          opacity: 0.76;
          line-height: 1.6;
          max-width: 92%;
        }

        .items {
          margin-top: 20px;
        }

        .item {
          font-size: 0.95rem;
          opacity: 0;
          transform: translateY(12px);
          margin-bottom: 6px;
          transition: opacity .35s ease, transform .35s ease;
        }

        .wardrobeCard:hover .item {
          opacity: 0.88;
          transform: translateY(0);
        }

        .item:nth-child(1) { transition-delay: .05s; }
        .item:nth-child(2) { transition-delay: .10s; }
        .item:nth-child(3) { transition-delay: .15s; }
        .item:nth-child(4) { transition-delay: .20s; }
        .item:nth-child(5) { transition-delay: .25s; }

        .tickerRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
        }

        .tickerThumb {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0,0,0,0.3);
          padding: 8px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          width: fit-content;
        }

        .tickerThumb img {
          width: 54px;
          height: 54px;
          border-radius: 12px;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,0.16);
        }

        .tickerLabel {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .mixTag {
          padding: 8px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.07);
          font-weight: 600;
          opacity: 0.9;
        }

        .galleryWrap {
          margin-top: 14px;
        }

        .galleryRow {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .thumb {
          width: 68px;
          height: 68px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.04);
          overflow: hidden;
          cursor: pointer;
          flex: 0 0 auto;
          transition: transform .25s ease, border-color .25s ease, opacity .25s ease;
          opacity: 0.9;
        }

        .thumb:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.28);
          opacity: 1;
        }

        .thumb.active {
          border-color: rgba(255,255,255,0.36);
          opacity: 1;
        }

        .thumbImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.95) contrast(1.05);
        }

        .hoverMeta {
          position: absolute;
          inset: auto 20px 18px 20px;
          padding: 16px;
          border-radius: 16px;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.16);
          opacity: 0;
          transform: translateY(10px);
          transition: opacity .25s ease, transform .25s ease;
          pointer-events: none;
        }

        .wardrobeCard:hover .hoverMeta {
          opacity: 1;
          transform: translateY(0);
        }

        .hoverTitle {
          font-size: 1.2rem;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .hoverBrands {
          opacity: 0.82;
          margin-bottom: 6px;
        }

        .hoverDetails {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 0.95rem;
          opacity: 0.9;
        }

        /* Lightbox */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.78);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 24px;
        }

        .lightboxPanel {
          width: min(980px, 100%);
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(10,10,11,0.72);
          overflow: hidden;
          box-shadow: 0 24px 90px rgba(0,0,0,0.75);
        }

        .lightboxTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.10);
        }

        .lightboxTitle {
          font-size: 0.95rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.75;
        }

        .iconBtn {
          cursor: pointer;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.9);
          border-radius: 12px;
          padding: 10px 12px;
          transition: transform .2s ease, background .2s ease, border-color .2s ease;
          font-weight: 600;
        }

        .iconBtn:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.22);
        }

        .lightboxImgWrap {
          position: relative;
          background: #060607;
        }

        .lightboxImg {
          width: 100%;
          height: min(70vh, 620px);
          object-fit: cover;
          display: block;
          filter: saturate(0.95) contrast(1.06);
        }

        .navBtns {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: none;
          padding: 0 12px;
        }

        .navBtns button {
          pointer-events: auto;
        }

        .lightboxBottom {
          padding: 12px 16px 16px;
          display: flex;
          gap: 10px;
          overflow-x: auto;
          border-top: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.02);
        }

        .miniThumb {
          width: 70px;
          height: 52px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.12);
          cursor: pointer;
          opacity: 0.7;
          transition: opacity .2s ease, transform .2s ease, border-color .2s ease;
          flex: 0 0 auto;
        }

        .miniThumb.active {
          opacity: 1;
          border-color: rgba(255,255,255,0.26);
        }

        .miniThumb:hover {
          opacity: 1;
          transform: translateY(-2px);
        }

        .miniThumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      <div className="container fade">
        <span className="tag">Wardrobe Library</span>
        <h1
          style={{
            fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
            margin: "14px 0 14px",
            letterSpacing: "-0.03em",
          }}
        >
          Explore wardrobe templates
        </h1>
        <p style={{ maxWidth: 860, opacity: 0.75, lineHeight: 1.7 }}>
          Mixed inventory built around how you live: new releases, refreshed staples,
          and circulating looks that stay in premium condition.
        </p>

        <div className="filtersPanel">
          <FilterGroup
            label="Size"
            options={SIZE_OPTIONS}
            value={filters.size}
            onChange={(value) => setFilters((p) => ({ ...p, size: value }))}
          />
          <FilterGroup
            label="Season"
            options={SEASON_OPTIONS}
            value={filters.season}
            onChange={(value) => setFilters((p) => ({ ...p, season: value }))}
          />
          <FilterGroup
            label="Occasion"
            options={OCCASION_OPTIONS}
            value={filters.occasion}
            onChange={(value) => setFilters((p) => ({ ...p, occasion: value }))}
          />
          <FilterGroup
            label="Style"
            options={STYLE_OPTIONS}
            value={filters.style}
            onChange={(value) => setFilters((p) => ({ ...p, style: value }))}
          />
          <FilterGroup
            label="Monthly fee"
            options={PRICE_OPTIONS}
            value={filters.price}
            onChange={(value) => setFilters((p) => ({ ...p, price: value }))}
          />
        </div>

        <div className="aiBox">
          <div className="aiLabel">AI filter (UI only)</div>
          <input
            className="aiInput"
            placeholder="Describe what you need: cold weather, school, weekends"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
          />
          <div className="aiHint">
            We’ll use this to pre-fill filters and suggestions—no backend logic yet.
          </div>
        </div>

        <div className="grid">
          {filteredWardrobes.map((wardrobe) => (
            <WardrobeCard
              key={wardrobe.name}
              wardrobe={wardrobe}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          className="lightbox"
          onClick={() => setLightbox((p) => ({ ...p, open: false }))}
        >
          <div className="lightboxPanel" onClick={(e) => e.stopPropagation()}>
            <div className="lightboxTop">
              <div className="lightboxTitle">{lightbox.title}</div>
              <button
                className="iconBtn"
                onClick={() => setLightbox((p) => ({ ...p, open: false }))}
              >
                Close
              </button>
            </div>

            <div className="lightboxImgWrap">
              <img
                className="lightboxImg"
                src={lightbox.images[lightbox.index]}
                alt="Wardrobe preview"
              />

              <div className="navBtns">
                <button
                  className="iconBtn"
                  onClick={() =>
                    setLightbox((p) => ({
                      ...p,
                      index:
                        (p.index - 1 + p.images.length) % p.images.length,
                    }))
                  }
                >
                  ←
                </button>
                <button
                  className="iconBtn"
                  onClick={() =>
                    setLightbox((p) => ({
                      ...p,
                      index: (p.index + 1) % p.images.length,
                    }))
                  }
                >
                  →
                </button>
              </div>
            </div>

            <div className="lightboxBottom">
              {lightbox.images.map((src, i) => (
                <div
                  key={src}
                  className={`miniThumb ${i === lightbox.index ? "active" : ""}`}
                  onClick={() => setLightbox((p) => ({ ...p, index: i }))}
                  title="Jump to image"
                >
                  <img src={src} alt={`Thumb ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function FilterGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="filterGroup">
      <div className="filterLabel">{label}</div>
      <div className="chipRow">
        {options.map((opt) => (
          <button
            key={opt.value || opt.label}
            className={`chip ${value === opt.value ? "active" : ""}`}
            onClick={() => onChange(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function WardrobeCard({
  wardrobe,
  openLightbox,
}: {
  wardrobe: Wardrobe;
  openLightbox: (images: string[], index: number, title: string) => void;
}) {
  const [activeThumb, setActiveThumb] = React.useState(0);
  const [hovered, setHovered] = React.useState(false);

  React.useEffect(() => {
    if (hovered) return;
    const id = setInterval(() => {
      setActiveThumb((prev) => (prev + 1) % wardrobe.gallery.length);
    }, 2600);
    return () => clearInterval(id);
  }, [hovered, wardrobe.gallery.length]);

  return (
    <div
      className="wardrobeCard"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="wardrobeBg"
        style={{ backgroundImage: `url(${wardrobe.cover})` }}
      />
      <div className="overlay" />

      <div className="content">
        <div>
          <div className="tag">{wardrobe.category}</div>
          <h3 className="title">{wardrobe.name}</h3>
          <p className="desc">{wardrobe.description}</p>

          <div className="items">
            {wardrobe.items.map((item) => (
              <div key={item} className="item">
                • {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="tickerRow">
            <div className="tickerThumb">
              <img
                src={wardrobe.gallery[activeThumb]}
                alt={`${wardrobe.name} detail`}
              />
              <span className="tickerLabel">Rotating looks</span>
            </div>
            <div className="mixTag">{wardrobe.inventoryMix}</div>
          </div>

          <div className="galleryWrap">
            <div className="galleryRow">
              {wardrobe.gallery.map((src, i) => (
                <div
                  key={src}
                  className={`thumb ${i === activeThumb ? "active" : ""}`}
                  onClick={() => {
                    setActiveThumb(i);
                    openLightbox(wardrobe.gallery, i, wardrobe.name);
                  }}
                  title="Open preview"
                >
                  <img className="thumbImg" src={src} alt={`${wardrobe.name} ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hoverMeta">
        <div className="hoverTitle">{wardrobe.name}</div>
        <div className="hoverBrands">{wardrobe.brands.join(" · ")}</div>
        <div className="hoverDetails">
          <span>{wardrobe.circulation}</span>
          <span>From ${wardrobe.monthlyFee}/mo</span>
        </div>
      </div>
    </div>
  );
}
