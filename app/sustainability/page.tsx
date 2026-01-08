export default function SustainabilityPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(900px 500px at 20% -10%, rgba(229, 220, 205, 0.75), transparent 60%), radial-gradient(900px 500px at 90% 10%, rgba(186, 200, 206, 0.45), transparent 55%), #f6f3ee",
        color: "#1f1f1f",
        padding: "120px 24px 140px",
        fontFamily:
          "'Soehne', 'Suisse Intl', 'Canela', 'Times New Roman', serif",
      }}
    >
      <style>{`
        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .stage {
          position: relative;
          isolation: isolate;
        }

        .glow {
          position: absolute;
          inset: auto;
          z-index: -1;
          filter: blur(60px);
          opacity: 0.65;
        }

        .glow.one {
          width: 320px;
          height: 320px;
          background: #ded3c2;
          top: -140px;
          right: 12%;
          border-radius: 50%;
        }

        .glow.two {
          width: 420px;
          height: 420px;
          background: #c6d6d8;
          top: 140px;
          left: -120px;
          border-radius: 50%;
        }

        .fade {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeIn .9s ease forwards;
        }

        .fade.delay-1 { animation-delay: 0.1s; }
        .fade.delay-2 { animation-delay: 0.2s; }
        .fade.delay-3 { animation-delay: 0.3s; }
        .fade.delay-4 { animation-delay: 0.4s; }
        .fade.delay-5 { animation-delay: 0.5s; }
        .fade.delay-6 { animation-delay: 0.6s; }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .eyebrow {
          letter-spacing: 0.3em;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          opacity: 0.55;
        }

        h1 {
          font-size: clamp(2.8rem, 5vw, 3.8rem);
          margin: 14px 0 14px;
          font-weight: 520;
          letter-spacing: -0.02em;
        }

        .lede {
          max-width: 680px;
          opacity: 0.8;
          line-height: 1.7;
          font-size: 1.05rem;
        }

        .definition {
          margin-top: 42px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(26, 26, 26, 0.08);
          padding: 28px 30px;
          box-shadow: 0 30px 60px rgba(32, 32, 32, 0.08);
          max-width: 860px;
          backdrop-filter: blur(10px);
        }

        .definition h2 {
          margin: 0 0 10px;
          font-size: 1.15rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.6;
        }

        .definition p {
          margin: 0;
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.85;
        }

        .section {
          margin-top: 46px;
          max-width: 720px;
        }

        .section h3 {
          margin: 0 0 12px;
          font-size: 1.6rem;
          font-weight: 560;
          letter-spacing: -0.01em;
        }

        .section p {
          margin: 0;
          line-height: 1.8;
          opacity: 0.8;
          font-size: 1.05rem;
        }

        .closing {
          margin-top: 56px;
          max-width: 720px;
          border-top: 1px solid rgba(18, 18, 18, 0.12);
          padding-top: 26px;
        }

        .closing p {
          font-size: 1.1rem;
          line-height: 1.8;
          opacity: 0.85;
        }
      `}</style>

      <div className="container stage">
        <div className="glow one" />
        <div className="glow two" />

        <span className="eyebrow fade">PILLAR</span>
        <h1 className="fade delay-1">Sustainability</h1>
        <p className="lede fade delay-2">
          Davenport Wardrobe is built for circulation. We design access that
          preserves resources, elevates craftsmanship, and treats clothing as a
          long-term asset.
        </p>

        <section className="definition fade delay-3">
          <h2>Definition</h2>
          <p>
            Fast fashion is a production system optimized for speed, volume,
            and low cost, often sidelining environmental stewardship and labor
            conditions. It delivers constant newness, but rarely durability,
            leaving garments with a short and disposable life.
          </p>
        </section>

        <section className="section fade delay-4">
          <h3>The Problem</h3>
          <p>
            The modern clothing system produces far more than people can wear.
            Pieces are made quickly, purchased quickly, and retired quickly,
            drawing heavily on water, energy, and raw materials while leaving
            unused inventory behind. What remains is a cycle of waste built on
            constant consumption.
          </p>
        </section>

        <section className="section fade delay-5">
          <h3>The Real Issue</h3>
          <p>
            The deeper challenge is ownership-driven consumption. We buy for
            every imagined moment, value drops the moment a piece is purchased,
            and most clothing sits unworn. Access has evolved everywhere else,
            yet wardrobes still depend on accumulation.
          </p>
        </section>

        <section className="section fade delay-6">
          <h3>The Davenport Wardrobe Solution</h3>
          <p>
            Davenport Wardrobe rethinks fashion as a system, not a trend. By
            rotating existing garments, we reduce overproduction, extend the
            usable life of each piece, and give members access without
            unnecessary ownership. You can try, rotate, and purchase
            intentionally - with style that feels effortless and responsible.
          </p>
        </section>

        <section className="closing fade delay-6">
          <h3>Impact Without Compromise</h3>
          <p>
            Sustainability should feel expansive, not restrictive. Luxury does
            not require excess. The future of fashion is smarter access, and it
            starts by changing how we participate in it.
          </p>
        </section>
      </div>
    </main>
  );
}
