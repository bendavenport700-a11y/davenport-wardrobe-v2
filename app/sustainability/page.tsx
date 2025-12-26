export default function SustainabilityPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #121214 0%, #060607 55%)",
        color: "#f1f1f1",
        padding: "120px 24px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <style>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .fade {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeIn .8s ease forwards;
        }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 20px;
          margin-top: 18px;
        }

        .card h2 {
          margin: 0 0 10px;
          font-size: 1.4rem;
          letter-spacing: -0.01em;
        }

        .card p {
          opacity: 0.78;
          line-height: 1.7;
        }

        .list {
          margin: 10px 0 0;
          padding-left: 18px;
          opacity: 0.82;
          line-height: 1.7;
        }

        .pillRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .pill {
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          padding: 8px 12px;
          font-weight: 600;
        }

        .impactPlaceholder {
          border: 1px dashed rgba(255,255,255,0.25);
          border-radius: 14px;
          padding: 16px;
          margin-top: 12px;
          opacity: 0.72;
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
          PILLAR
        </span>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.6rem)",
            margin: "12px 0 10px",
            fontWeight: 600,
          }}
        >
          Sustainability
        </h1>
        <p style={{ maxWidth: 840, opacity: 0.75, lineHeight: 1.7 }}>
          We build circulation-first wardrobes. Each piece is sourced,
          maintained, and retired with the same intent as the design itself.
        </p>

        <div className="card">
          <h2>The problem with fast fashion</h2>
          <p>
            Overproduction, short wear cycles, and low-cost materials push
            garments to landfill before they realize their potential. The
            result is waste, excess water use, and clothing that never feels
            meaningful.
          </p>
          <ul className="list">
            <li>Impulse buying leads to short lifespans</li>
            <li>Low-quality construction fails after a few wears</li>
            <li>Limited repair or recirculation infrastructure</li>
          </ul>
        </div>

        <div className="card">
          <h2>How Davenport operates differently</h2>
          <p>
            Each wardrobe is planned for longevity. We prioritize durable
            fabrics, timeless silhouettes, and care workflows that keep items in
            circulation instead of in closets.
          </p>
          <div className="pillRow">
            <div className="pill">Long-wear fabrics</div>
            <div className="pill">Tight inventory control</div>
            <div className="pill">Circulation-first design</div>
            <div className="pill">Transparent refresh cycles</div>
          </div>
        </div>

        <div className="card">
          <h2>Where your membership goes</h2>
          <p>Every month, a set percentage is allocated directly to care.</p>
          <ul className="list">
            <li>Cleaning with low-impact methods</li>
            <li>Repairs by specialty partners</li>
            <li>Responsible disposal when a piece retires</li>
          </ul>
        </div>

        <div className="card">
          <h2>Impact metrics (reserved)</h2>
          <p>
            This space will show verified reductions in waste, extended garment
            lifespans, and care stats once pilots complete.
          </p>
          <div className="impactPlaceholder">
            Impact dashboard reserved for upcoming reporting.
          </div>
        </div>
      </div>
    </main>
  );
}
