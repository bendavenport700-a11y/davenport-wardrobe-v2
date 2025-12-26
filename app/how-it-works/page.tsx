export default function HowItWorksPage() {
  const steps = [
    {
      title: "Pick a wardrobe",
      text: "Choose a template that matches your lifestyle and season. New arrivals and circulating favorites are clearly labeled.",
    },
    {
      title: "Customize in Suitcase",
      text: "Swap pieces, change sizes, and add upgrades before anything ships. The suitcase stays calm—not like a shopping cart.",
    },
    {
      title: "Receive and wear",
      text: "Deliveries arrive ready to wear with cleaning handled. Rotate pieces as your week shifts.",
    },
    {
      title: "Swap when life changes",
      text: "Request swaps for new classes, travel, or events. Keep what’s working and refresh the rest.",
    },
    {
      title: "We clean, repair, and recirculate responsibly",
      text: "After each return, garments are cleaned, inspected, and repaired so they stay in circulation longer.",
    },
  ];

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

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 18px;
          margin-top: 26px;
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 18px;
          position: relative;
          overflow: hidden;
          transition: transform .25s ease, border-color .25s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
        }

        .step {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.16);
          display: grid;
          place-items: center;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .title {
          font-size: 1.1rem;
          margin-bottom: 6px;
          letter-spacing: -0.01em;
        }

        .text {
          opacity: 0.78;
          line-height: 1.6;
        }

        .ribbon {
          position: absolute;
          inset: auto 14px 14px auto;
          padding: 8px 12px;
          border-radius: 12px;
          background: rgba(0,0,0,0.55);
          border: 1px solid rgba(255,255,255,0.14);
          font-weight: 700;
          letter-spacing: 0.04em;
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
          PROCESS
        </span>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            margin: "12px 0 10px",
            fontWeight: 600,
          }}
        >
          How it works
        </h1>
        <p style={{ maxWidth: 820, opacity: 0.75, lineHeight: 1.7 }}>
          A concise flow: choose, customize, wear, and swap. We handle care so
          your wardrobe keeps its premium feel.
        </p>

        <div className="grid">
          {steps.map((step, index) => (
            <div key={step.title} className="card">
              <div className="step">{index + 1}</div>
              <div className="title">{step.title}</div>
              <div className="text">{step.text}</div>
              {index === steps.length - 1 && (
                <div className="ribbon">Care included</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
