"use client";
/* eslint-disable @next/next/no-img-element */

type SuitcaseItem = {
  title: string;
  brand: string;
  fit: string;
  note: string;
  image: string;
};

const SUITCASE_ITEMS: SuitcaseItem[] = [
  {
    title: "Structured knit",
    brand: "A.P.C.",
    fit: "Size M · Tailored",
    note: "For meetings and studio days",
    image: "/wardrobes/203/2.jpg",
  },
  {
    title: "Hybrid commuter sneaker",
    brand: "Norse Projects",
    fit: "Size 42 · Sleek profile",
    note: "Pairs with trousers or denim",
    image: "/wardrobes/203/5.jpg",
  },
  {
    title: "Technical jogger",
    brand: "District Vision",
    fit: "Size M · Tapered",
    note: "Gym to travel stretch",
    image: "/wardrobes/203/3.jpg",
  },
  {
    title: "Lightweight topcoat",
    brand: "Everlane",
    fit: "Size L · Modern",
    note: "Rain-ready layer for campus runs",
    image: "/wardrobes/203/4.jpg",
  },
];

const SUGGESTED = [
  {
    title: "Merino crew",
    why: "Balances the technical pieces with softness",
    image: "/wardrobes/203/1.jpg",
  },
  {
    title: "Weekender duffle",
    why: "Completes the travel set for quick swaps",
    image: "/wardrobes/203/6.jpg",
  },
  {
    title: "Overshirt",
    why: "Layer for cooler lecture halls and coffee runs",
    image: "/wardrobes/203/2.jpg",
  },
];

const PRICING = [
  { label: "Base access", value: "$149" },
  { label: "Upgrades", value: "+$18" },
  { label: "Care & cleaning", value: "Included" },
  { label: "Swap flexibility", value: "Included" },
  { label: "Estimated total", value: "$167 / month" },
];

export default function SuitcasePage() {
  return (
    <main
      style={{
        fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #121214 0%, #060607 55%)",
        color: "#f1f1f1",
        minHeight: "100vh",
        padding: "120px 0 90px",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        img { display: block; max-width: 100%; }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fade {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeIn .8s ease forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
          margin-top: 20px;
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: center;
          transition: transform .25s ease, border-color .25s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
        }

        .thumb {
          width: 80px;
          height: 80px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          overflow: hidden;
          flex-shrink: 0;
        }

        .thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .titleRow {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .actions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .actionBtn {
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.06);
          color: #f1f1f1;
          padding: 8px 10px;
          border-radius: 10px;
          font-weight: 600;
          transition: transform .2s ease, border-color .2s ease, background .2s ease;
        }

        .actionBtn:hover {
          transform: translateY(-2px);
          border-color: rgba(255,255,255,0.28);
          background: rgba(255,255,255,0.1);
        }

        .pill {
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.16);
          padding: 6px 10px;
          background: rgba(255,255,255,0.04);
          font-size: 0.9rem;
        }

        .section {
          margin-top: 48px;
        }

        .section h2 {
          margin: 0 0 8px;
          font-size: 1.6rem;
          letter-spacing: -0.01em;
        }

        .section p {
          opacity: 0.74;
          max-width: 820px;
          line-height: 1.7;
        }

        .pricingCard {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 18px;
          margin-top: 16px;
        }

        .pricingRow {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .pricingRow:last-child {
          border-bottom: none;
          font-weight: 700;
          font-size: 1.05rem;
        }

        .ctaRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .btnPrimary {
          background: #ffffff;
          color: #0b0b0c;
          padding: 14px 22px;
          border-radius: 12px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: transform .2s ease, opacity .2s ease;
        }

        .btnPrimary:hover {
          transform: translateY(-2px);
          opacity: 0.95;
        }

        .btnGhost {
          padding: 14px 22px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.22);
          background: rgba(255,255,255,0.04);
          font-weight: 700;
          transition: background .2s ease, transform .2s ease, opacity .2s ease;
        }

        .btnGhost:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-1px);
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
          SUITCASE
        </span>
        <h1
          style={{
            fontSize: "clamp(2.6rem, 5vw, 3.6rem)",
            margin: "10px 0 10px",
            fontWeight: 600,
          }}
        >
          Pack your next rotation
        </h1>
        <p style={{ maxWidth: 820, opacity: 0.75, lineHeight: 1.7 }}>
          Finalize what ships, swap pieces, and see how each choice affects your
          monthly access. This is about building a suitcase, not a cart.
        </p>

        <div className="section">
          <div className="titleRow">
            <h2>Your Suitcase</h2>
            <span className="pill">4 pieces selected</span>
          </div>
          <p>Curated for your current plans. Adjust anything before it ships.</p>

          <div className="grid">
            {SUITCASE_ITEMS.map((item) => (
              <div key={item.title} className="card">
                <div className="thumb">
                  <img src={item.image} alt={item.title} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="titleRow">
                    <div>
                      <div style={{ fontWeight: 700 }}>{item.title}</div>
                      <div style={{ opacity: 0.75 }}>{item.brand}</div>
                    </div>
                    <span className="pill">{item.fit}</span>
                  </div>
                  <div style={{ margin: "8px 0", opacity: 0.78 }}>{item.note}</div>
                  <div className="actions">
                    <button className="actionBtn" type="button">
                      Swap
                    </button>
                    <button className="actionBtn" type="button">
                      Upgrade
                    </button>
                    <button className="actionBtn" type="button">
                      Change size
                    </button>
                    <button className="actionBtn" type="button">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Suggested for you</h2>
          <p>Fill in any gaps so the suitcase feels complete.</p>

          <div className="grid">
            {SUGGESTED.map((item) => (
              <div key={item.title} className="card">
                <div className="thumb">
                  <img src={item.image} alt={item.title} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700 }}>{item.title}</div>
                  <div style={{ opacity: 0.72, margin: "6px 0" }}>{item.why}</div>
                  <div className="actions">
                    <button className="actionBtn" type="button">
                      Add
                    </button>
                    <button className="actionBtn" type="button">
                      See similar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Pricing breakdown</h2>
          <p>Calm, transparent pricing before you send the suitcase.</p>
          <div className="pricingCard">
            {PRICING.map((row) => (
              <div key={row.label} className="pricingRow">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Ready to ship?</h2>
          <p>Lock in this suitcase or keep refining the mix.</p>
          <div className="ctaRow">
            <button className="btnPrimary" type="button">
              Send Suitcase
            </button>
            <button className="btnGhost" type="button">
              Save for later
            </button>
            <button className="btnGhost" type="button">
              Continue editing
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
