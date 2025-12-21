export default function WardrobesPage() {
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
          min-height: 440px;
          transition: transform .35s ease, border-color .35s ease;
        }

        .wardrobeCard:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.26);
        }

        .wardrobeBg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          filter: brightness(0.82);
          transition: transform .6s ease;
        }

        .wardrobeCard:hover .wardrobeBg {
          transform: scale(1.06);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.12),
            rgba(0,0,0,0.9)
          );
        }

        .content {
          position: relative;
          height: 100%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .tag {
          font-size: 0.75rem;
          letter-spacing: 0.16em;
          opacity: 0.6;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .title {
          font-size: 1.7rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .desc {
          opacity: 0.72;
          line-height: 1.6;
          max-width: 90%;
        }

        .items {
          margin-top: 28px;
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

        .cta {
          margin-top: 18px;
          font-size: 0.9rem;
          opacity: 0;
          transition: opacity .3s ease;
        }

        .wardrobeCard:hover .cta {
          opacity: 0.65;
        }
      `}</style>

      <div className="container fade">
        <span className="tag">Wardrobe Library</span>
        <h1
          style={{
            fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
            margin: "14px 0 14px",
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
                style={{ backgroundImage: `url(${w.image})` }}
              />
              <div className="overlay" />

              <div className="content">
                <div>
                  <div className="tag">{w.category}</div>
                  <h3 className="title">{w.name}</h3>
                  <p className="desc">{w.description}</p>
                </div>

                <div className="items">
                  {w.items.map((item) => (
                    <div key={item} className="item">
                      • {item}
                    </div>
                  ))}
                  <div className="cta">
                    View details · Customize pieces
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
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
    image: "/wardrobes/campus.jpg",
    items: [
      "Relaxed hoodie",
      "Straight-leg denim",
      "Neutral sneakers",
      "Overshirt",
      "Everyday tee",
    ],
  },
  {
    name: "City Minimal",
    category: "Urban",
    description:
      "Clean silhouettes and modern essentials designed for city life.",
    image: "/wardrobes/city.jpg",
    items: [
      "Tailored trousers",
      "Structured knit",
      "Minimal leather sneakers",
      "Lightweight coat",
    ],
  },
  {
    name: "Weekend Social",
    category: "Going Out",
    description:
      "Statement pieces for nights out, events, and elevated casual looks.",
    image: "/wardrobes/weekend.jpg",
    items: [
      "Fitted jacket",
      "Premium tee",
      "Slim denim",
      "Dress sneakers",
    ],
  },
  {
    name: "Athletic Everyday",
    category: "Active",
    description:
      "Performance-inspired pieces that move from workouts to daily wear.",
    image: "/wardrobes/athletic.jpg",
    items: [
      "Technical joggers",
      "Breathable top",
      "Layering hoodie",
      "Training sneakers",
    ],
  },
];
