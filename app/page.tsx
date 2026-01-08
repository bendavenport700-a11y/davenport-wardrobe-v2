"use client";

import Link from "next/link";

export default function Home() {
  const brandHighlights = [
    "Alo Yoga",
    "Lululemon",
    "Vuori",
    "Rhone",
    "Patagonia",
    "Arc'teryx",
    "The North Face",
    "L.L.Bean",
    "Filson",
    "Peter Millar",
    "Vineyard Vines",
    "Sperry",
  ];
  const brandLoop = [...brandHighlights, ...brandHighlights];

  return (
    <main
      style={{
        fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #121214 0%, #060607 55%)",
        color: "#f1f1f1",
        minHeight: "100vh",
      }}
    >
      {/* GLOBAL STYLES */}
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; overflow-x: hidden; }
        main { overflow-x: hidden; }
        a { color: inherit; text-decoration: none; }
        html { scroll-behavior: smooth; }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .fade {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeIn 0.9s ease forwards;
        }

        .fade.d1 { animation-delay: .15s; }
        .fade.d2 { animation-delay: .3s; }
        .fade.d3 { animation-delay: .45s; }
        .fade.d4 { animation-delay: .6s; }
        .fade.d5 { animation-delay: .75s; }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ✅ Subtle luxury animation (very light, matches your style) */
        .softGlow {
          position: absolute;
          inset: -220px -120px auto -120px;
          height: 520px;
          pointer-events: none;
          background: radial-gradient(closest-side at 50% 50%,
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.00) 65%);
          filter: blur(10px);
          opacity: 0.85;
          animation: glowFloat 10s ease-in-out infinite;
        }

        @keyframes glowFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.80; }
          50% { transform: translateY(14px); opacity: 0.95; }
        }

        .card {
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.06),
            rgba(255,255,255,0.02)
          );
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 28px;
          transition: transform .3s ease, border-color .3s ease;
          position: relative;
          overflow: hidden;
        }

        /* ✅ little light sweep on hover (still subtle) */
        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(700px 220px at 50% 0%,
            rgba(255,255,255,0.07),
            rgba(255,255,255,0.00) 60%);
          opacity: 0;
          transition: opacity .35s ease;
          pointer-events: none;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
        }

        .card:hover::after {
          opacity: 1;
        }

        .btnPrimary {
          background: #ffffff;
          color: #0b0b0c;
          padding: 14px 22px;
          border-radius: 12px;
          font-weight: 600;
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
          font-weight: 600;
          transition: background .2s ease, transform .2s ease, opacity .2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btnGhost:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-1px);
        }

        .brandTicker {
          position: relative;
          overflow: hidden;
          border-radius: 14px;
        }

        .brandTicker::before,
        .brandTicker::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          pointer-events: none;
          z-index: 1;
        }

        .brandTicker::before {
          left: 0;
          background: linear-gradient(90deg, rgba(7,7,8,0.9), rgba(7,7,8,0));
        }

        .brandTicker::after {
          right: 0;
          background: linear-gradient(270deg, rgba(7,7,8,0.9), rgba(7,7,8,0));
        }

        .brandTrack {
          display: flex;
          gap: 10px;
          animation: brandScroll 26s linear infinite;
          will-change: transform;
          flex-wrap: nowrap;
          width: max-content;
          padding: 6px 6px;
        }

        .brandPill {
          padding: 12px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          text-align: center;
          font-weight: 600;
          letter-spacing: -0.01em;
          white-space: nowrap;
          box-shadow: 0 6px 16px rgba(0,0,0,0.12);
        }

        @keyframes brandScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (prefers-reduced-motion: reduce) {
          .brandTrack { animation: none; }
        }

        .stepGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 18px;
        }

        .stepCard {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 22px;
          display: grid;
          gap: 10px;
        }

        .stepNumber {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(140deg, #ffffff, #d1d1d1);
          color: #0b0b0c;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
        }

        @media (max-width: 560px) {
          .container { padding: 0 18px; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ padding: "140px 0 100px", position: "relative" }}>
        <div className="softGlow" />
        <div className="container">
          <div className="fade">
            <span
              style={{
                letterSpacing: "0.18em",
                fontSize: "0.8rem",
                opacity: 0.7,
              }}
            >
              {/* ✅ Change to Davenport */}
              DAVENPORT
            </span>
          </div>

          <h1
            className="fade d1 heroTitle"
            style={{
              fontSize: "clamp(3rem, 6vw, 4.8rem)",
              lineHeight: 1.05,
              margin: "18px 0",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            A wardrobe access and rotation platform
          </h1>

          <p
            className="fade d2"
            style={{
              maxWidth: 760,
              fontSize: "1.25rem",
              lineHeight: 1.65,
              opacity: 0.78,
            }}
          >
            Davenport Wardrobe lets you choose curated wardrobes or individual
            pieces, then rotate, keep, or buy what you love. It is not a rental
            service.
          </p>

          <div
            className="fade d3"
            style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}
          >
            <a href="#waitlist" className="btnPrimary">
              Join the waitlist
            </a>
            <Link href="/pricing" className="btnGhost">
              Pricing <span style={{ opacity: 0.7 }}>→</span>
            </Link>
            <Link href="/faq" className="btnGhost">
              Learn more <span style={{ opacity: 0.7 }}>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "90px 0 40px" }}>
        <div className="container">
          <h2 style={sectionTitle}>How it works</h2>
          <div className="stepGrid">
            <StepCard
              number="1"
              title="Choose your rotation"
              text="Pick curated wardrobes or individual pieces."
            />
            <StepCard
              number="2"
              title="Wear, rotate, or buy"
              text="Keep what you love and rotate what you do not."
            />
            <StepCard
              number="3"
              title="Refresh with your life"
              text="Update as seasons, travel, or routines change."
            />
          </div>
        </div>
      </section>

      {/* NOT RENTAL + CONDITION */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>What this is not</h2>
          <p style={sectionLead}>
            This is not a traditional rental service and you are not borrowing
            random clothes. You see every item before it ships, with clear
            condition notes and flexible choices.
          </p>
          <h3 style={{ fontSize: "1.5rem", marginBottom: 12 }}>
            Condition, made simple
          </h3>
          <p style={sectionLead}>
            Pieces can be brand new or lightly worn. Light wear is normal and
            often invisible, and most quality garments look the same after a
            few washes. Every item includes an honest condition description.
          </p>
        </div>
      </section>

      {/* WHY BETTER */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>Why it is better than buying everything</h2>
          <p style={sectionLead}>
            You get more variety with less risk. Access gives you better
            choices, while ownership stays optional and intentional.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            <InfoCard
              title="Curated, not chaotic"
              text="Pieces are selected to work together, not compete for space."
            />
            <InfoCard
              title="Buy only what you love"
              text="Try styles in real life before making a long term decision."
            />
            <InfoCard
              title="Less shopping, less waste"
              text="Rotate instead of rebuying for every new season or trip."
            />
          </div>
        </div>
      </section>

      {/* BRAND SIGNAL */}
      <section style={{ padding: "20px 0 80px" }}>
        <div className="container">
          <div
            className="card"
            style={{
              display: "grid",
              gap: 16,
              alignItems: "center",
              background:
                "linear-gradient(120deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
              borderColor: "rgba(255,255,255,0.18)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, alignItems: "center" }}>
              <h2 style={{ margin: 0, fontSize: "1.35rem", letterSpacing: "-0.01em" }}>
                Brands you already trust
              </h2>
              <span style={{ opacity: 0.7, fontSize: "0.95rem" }}>
                Premium labels and trusted partners.
              </span>
            </div>
            <div className="brandTicker">
              <div className="brandTrack">
                {brandLoop.map((brand, i) => (
                  <div key={`${brand}-${i}`} className="brandPill">
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONVENIENCE */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <h2 style={sectionTitle}>Convenience that fits real life</h2>
          <p style={sectionLead}>
            Fewer shopping trips, fewer mistakes, and fewer items sitting
            unworn. Rotate as your life changes without rebuilding your closet.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            <InfoCard
              title="Less shopping"
              text="Your rotation arrives ready, so you spend less time searching."
            />
            <InfoCard
              title="Fewer mistakes"
              text="Try pieces in real life before you decide to buy."
            />
            <InfoCard
              title="Less clutter"
              text="Rotate for seasons, travel, and new routines without pile ups."
            />
            <InfoCard
              title="Easier transitions"
              text="School, work, and travel shifts stay simple and on track."
            />
          </div>
        </div>
      </section>

      {/* PRICING LOGIC */}
      <section style={{ padding: "70px 0 60px" }}>
        <div className="container">
          <h2 style={sectionTitle}>How pricing works</h2>
          <p style={sectionLead}>
            Your monthly access covers styling, cleaning, and shipping. Each
            piece has a clear buyout price based on age, condition, and demand.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            <InfoCard
              title="Access, not a rental plan"
              text="Membership covers curation, fittings, cleaning, and swaps, with buy options when you want them."
            />
            <InfoCard
              title="Buyout is always visible"
              text="See buyout pricing before shipping and decide at your pace."
            />
            <InfoCard
              title="New or lightly worn"
              text="New only starts at full value, while lightly worn costs less."
            />
          </div>
        </div>
      </section>


      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: "120px 0" }}>
        <div className="container">
          <div
            className="card"
            style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}
          >
            <h2 style={{ fontSize: "2.4rem", marginBottom: 12 }}>
              Join the waitlist
            </h2>
            <p style={{ opacity: 0.75, marginBottom: 28 }}>
              Early access, priority wardrobe drops, and student pricing for
              verified .edu emails.
            </p>

            <form action="https://formspree.io/f/xqezkpza" method="POST">
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  style={{
                    padding: "14px",
                    width: 280,
                    borderRadius: 10,
                    background: "#0c0c0d",
                    border: "1px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                  }}
                />
                <button className="btnPrimary">Join</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "48px",
          textAlign: "center",
          opacity: 0.6,
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Davenport
      </footer>
    </main>
  );
}

/* COMPONENTS */

type InfoCardProps = {
  title: string;
  text: string;
};

function InfoCard({ title, text }: InfoCardProps) {
  return (
    <div className="card">
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </div>
  );
}

type StepCardProps = {
  number: string;
  title: string;
  text: string;
};

function StepCard({ number, title, text }: StepCardProps) {
  return (
    <div className="stepCard">
      <div className="stepNumber">{number}</div>
      <div style={{ display: "grid", gap: 6 }}>
        <h3 style={cardTitle}>{title}</h3>
        <p style={cardText}>{text}</p>
      </div>
    </div>
  );
}

/* STYLES */

const sectionTitle = {
  fontSize: "2.4rem",
  marginBottom: 14,
};

const sectionLead = {
  maxWidth: 820,
  opacity: 0.75,
  fontSize: "1.1rem",
  lineHeight: 1.7,
  marginBottom: 42,
};

const cardTitle = {
  fontSize: "1.15rem",
  marginBottom: 8,
};

const cardText = {
  opacity: 0.75,
  lineHeight: 1.6,
};
