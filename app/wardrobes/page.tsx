"use client";

import React from "react";

export default function WardrobesPage() {
  const [lightbox, setLightbox] = React.useState<{
    open: boolean;
    images: string[];
    index: number;
    title: string;
  }>({ open: false, images: [], index: 0, title: "" });

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

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 64px;
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

        /* Gallery strip appears on hover */
        .galleryWrap {
          margin-top: 18px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity .35s ease, transform .35s ease;
        }

        .wardrobeCard:hover .galleryWrap {
          opacity: 1;
          transform: translateY(0);
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

        .thumbImg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(0.95) contrast(1.05);
        }

        .cta {
          margin-top: 14px;
          font-size: 0.9rem;
          opacity: 0;
          transition: opacity .3s ease;
        }

        .wardrobeCard:hover .cta {
          opacity: 0.68;
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
        <p style={{ maxWidth: 820, opacity: 0.75, lineHeight: 1.7 }}>
          Start with a curated wardrobe built around a lifestyle or aesthetic.
          Use it as-is, or adjust individual pieces to fit your taste.
        </p>

        <div className="grid">
          {WARDROBES.map((w) => (
            <div key={w.name} className="wardrobeCard">
              <div
                className="wardrobeBg"
                style={{ backgroundImage: `url(${w.cover})` }}
              />
              <div className="overlay" />

              <div className="content">
                <div>
                  <div className="tag">{w.category}</div>
                  <h3 className="title">{w.name}</h3>
                  <p className="desc">{w.description}</p>

                  <div className="items">
                    {w.items.map((item) => (
                      <div key={item} className="item">
                        • {item}
                      </div>
                    ))}
                    <div className="cta">Hover to preview · Click to view</div>
                  </div>
                </div>

                {/* GALLERY STRIP (HOVER) */}
                <div className="galleryWrap">
                  <div className="galleryRow">
                    {w.gallery.map((src, i) => (
                      <div
                        key={src}
                        className="thumb"
                        onClick={() =>
                          setLightbox({
                            open: true,
                            images: w.gallery,
                            index: i,
                            title: w.name,
                          })
                        }
                        title="Click to view"
                      >
                        <img className="thumbImg" src={src} alt={`${w.name} ${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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

/* ======================================
   EDIT ONLY THIS DATA TO ADD WARDROBES
   ====================================== */

const WARDROBES = [
  {
    name: "Campus Core",
    category: "Everyday",
    description:
      "A balanced everyday wardrobe for class, studying, and casual nights out.",
    cover: "/wardrobes/campus/cover.jpg",
    gallery: [
      "/wardrobes/campus/1.jpg",
      "/wardrobes/campus/2.jpg",
      "/wardrobes/campus/3.jpg",
      "/wardrobes/campus/4.jpg",
      "/wardrobes/campus/5.jpg",
      "/wardrobes/campus/6.jpg",
    ],
    items: [
      "Relaxed hoodie",
      "Straight-leg denim",
      "Neutral sneakers",
      "Overshirt",
      "Everyday tee",
    ],
  },

  {
    name: "203 Collection",
    category: "Urban",
    description:
      "Clean silhouettes, sharp layers, and modern essentials with a future-forward edge.",
    cover: "/wardrobes/203/cover.jpg",
    gallery: [
      "/wardrobes/203/1.jpg",
      "/wardrobes/203/2.jpg",
      "/wardrobes/203/3.jpg",
      "/wardrobes/203/4.jpg",
      "/wardrobes/203/5.jpg",
      "/wardrobes/203/6.jpg",
    ],
    items: [
      "Tailored trousers",
      "Structured knit",
      "Minimal leather sneakers",
      "Lightweight coat",
      "Clean base tee",
    ],
  },

  {
    name: "Weekend Social",
    category: "Going Out",
    description:
      "Statement pieces for nights out, events, and elevated casual looks.",
    cover: "/wardrobes/weekend/cover.jpg",
    gallery: [
      "/wardrobes/weekend/1.jpg",
      "/wardrobes/weekend/2.jpg",
      "/wardrobes/weekend/3.jpg",
      "/wardrobes/weekend/4.jpg",
      "/wardrobes/weekend/5.jpg",
      "/wardrobes/weekend/6.jpg",
    ],
    items: ["Fitted jacket", "Premium tee", "Slim denim", "Dress sneakers"],
  },

  {
    name: "Athletic Everyday",
    category: "Active",
    description:
      "Performance-inspired pieces that move from workouts to daily wear.",
    cover: "/wardrobes/athletic/cover.jpg",
    gallery: [
      "/wardrobes/athletic/1.jpg",
      "/wardrobes/athletic/2.jpg",
      "/wardrobes/athletic/3.jpg",
      "/wardrobes/athletic/4.jpg",
      "/wardrobes/athletic/5.jpg",
      "/wardrobes/athletic/6.jpg",
    ],
    items: ["Technical joggers", "Breathable top", "Layering hoodie", "Training sneakers"],
  },
];
