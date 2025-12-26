"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  const phrases = [
    "Intelligent access to modern style",
    "Dress smarter",
    "A simpler way to dress",
    "Luxury without ownership",
    "A wardrobe that adapts to you",
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4200); // ✅ slower (was 2800)
    return () => clearInterval(interval);
  }, [phrases.length]);

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

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .rotatingText {
          position: absolute;
          left: 0;
          top: 0;
          animation: rotateFade 650ms ease forwards;
          will-change: transform, opacity;
        }

        @keyframes rotateFade {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        /* ✅ MOBILE FIX: prevent headline clipping */
        @media (max-width: 560px) {
          .container { padding: 0 18px; }
          .heroTitle {
            height: auto !important;
            overflow: visible !important;
          }
          .rotatingText {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            display: inline-block;
          }
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
              position: "relative",
              height: "5rem",
              overflow: "hidden",
              letterSpacing: "-0.02em",
            }}
          >
            <span key={index} className="rotatingText">
              {phrases[index]}
            </span>
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
            {/* ✅ Blend the two statements you like */}
            Davenport Wardrobe delivers curated wardrobes built around your
  lifestyle, personal style, and the way you actually live. Less
  ownership. More clarity. No clutter.
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

          {/* ✅ small “proof” line, still minimal */}
          <div className="fade d4" style={{ marginTop: 18, opacity: 0.62, lineHeight: 1.7 }}>
            Built for college, travel, seasons, and change — without overthinking.
          </div>
        </div>
      </section>

      {/* VALUE SECTION */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>Designed around you</h2>
          <p style={sectionLead}>
            Wardrobes that adapt to your life, not the other way around. Clear,
            modern looks without overthinking or overbuying.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            <InfoCard
              title="No decision fatigue"
              text="A wardrobe that already works together. Swap when you want variety."
            />
            <InfoCard
              title="Built for timing changes"
              text="College, seasons, travel, weight changes — your wardrobe adjusts when life does. No re-buying cycle."
            />
            <InfoCard
              title="Less waste. More confidence."
              text="Wear what you actually like. Rotate what you don’t. Keep the closet calm."
            />
          </div>
        </div>
      </section>

      {/* QUICK PATHS */}
      <section style={{ padding: "80px 0 40px" }}>
        <div className="container">
          <h2 style={sectionTitle}>Get started fast</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            <Link href="/wardrobes/new-arrivals" className="card">
              <h3 style={cardTitle}>See new drops</h3>
              <p style={cardText}>Fresh arrivals, never worn, ready to ship.</p>
            </Link>
            <Link href="/wardrobes" className="card">
              <h3 style={cardTitle}>Explore wardrobes</h3>
              <p style={cardText}>Templates for campus, travel, work, and weekends.</p>
            </Link>
            <Link href="/suitcase" className="card">
              <h3 style={cardTitle}>Pack your suitcase</h3>
              <p style={cardText}>Preview a rotation and swap before it leaves.</p>
            </Link>
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
              Early access, priority wardrobe drops, and student benefits for
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
