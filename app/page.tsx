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
    // Respect reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 4200); // slower rotation (you asked)
    return () => clearInterval(interval);
  }, []);

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

        /* entrance */
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

        /* rotating headline animation */
        .rotatingText {
          display: inline-block;
          animation: rotateFade 650ms ease forwards;
          will-change: transform, opacity;
        }

        @keyframes rotateFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* subtle luxury shimmer/glow behind hero */
        .heroGlow {
          position: absolute;
          inset: -200px -80px auto -80px;
          height: 520px;
          pointer-events: none;
          background: radial-gradient(closest-side at 50% 50%,
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.00) 65%);
          filter: blur(10px);
          opacity: 0.9;
          animation: glowFloat 9s ease-in-out infinite;
        }

        @keyframes glowFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.85; }
          50% { transform: translateY(14px); opacity: 1; }
        }

        /* cards */
        .card {
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.06),
            rgba(255,255,255,0.02)
          );
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 28px;
          transition: transform .3s ease, border-color .3s ease, background .3s ease;
          position: relative;
          overflow: hidden;
        }

        .card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(800px 220px at 50% 0%,
            rgba(255,255,255,0.06),
            rgba(255,255,255,0.00) 60%);
          opacity: 0;
          transition: opacity .35s ease;
          pointer-events: none;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
          background: linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.02));
        }

        .card:hover::after { opacity: 1; }

        /* buttons */
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
          transition: background .2s ease, transform .2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btnGhost:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-1px);
        }

        /* section divider line */
        .divider {
          height: 1px;
          background: linear-gradient(90deg,
            rgba(255,255,255,0.0),
            rgba(255,255,255,0.14),
            rgba(255,255,255,0.0));
          margin: 0 auto;
          max-width: 1120px;
        }

        /* mobile tweaks */
        @media (max-width: 520px) {
          .container { padding: 0 18px; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ padding: "140px 0 90px", position: "relative" }}>
        <div className="heroGlow" />
        <div className="container">
          <div className="fade">
            <span
              style={{
                letterSpacing: "0.18em",
                fontSize: "0.8rem",
                opacity: 0.7,
              }}
            >
              DAVENPORT
            </span>
          </div>

          {/* IMPORTANT FIX: no fixed height, no overflow hidden, so mobile never clips */}
          <h1
            className="fade d1"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
              lineHeight: 1.05,
              margin: "18px 0",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              maxWidth: 980,
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
              fontSize: "1.18rem",
              lineHeight: 1.7,
              opacity: 0.8,
            }}
          >
            Davenport Wardrobe lets you subscribe to a lifestyle-ready wardrobe —
            curated around your personal style and the way you actually live —
            so you stop buying clothes that don’t fit, go out of style, or get
            worn once. Less ownership. More clarity. No clutter.
          </p>

          <div
            className="fade d3"
            style={{
              display: "flex",
              gap: 14,
              marginTop: 32,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a href="#waitlist" className="btnPrimary">
              Join the waitlist
            </a>
            <Link href="/pricing" className="btnGhost">
              View pricing <span style={{ opacity: 0.7 }}>→</span>
            </Link>
            <Link href="/faq" className="btnGhost">
              Learn more <span style={{ opacity: 0.7 }}>→</span>
            </Link>
          </div>

          {/* microproof */}
          <div
            className="fade d4"
            style={{
              marginTop: 22,
              opacity: 0.62,
              fontSize: "0.95rem",
              display: "flex",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <span>Built for college + real life</span>
            <span>•</span>
            <span>Swaps when life changes</span>
            <span>•</span>
            <span>Less waste, more wear</span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* DESIGNED AROUND YOU (REWRITTEN CONTENT) */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={sectionTitle} className="fade">
            Designed around real life
          </h2>
          <p style={sectionLead} className="fade d1">
            Buying clothes sounds simple — until it isn’t. Davenport exists for
            the moments when ownership becomes inefficient: new seasons, travel,
            college, weight changes, style changes, and the constant pressure to
            look put-together. We take away the stress and make it effortless.
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
              text="Stop guessing what to buy. You get a wardrobe that makes sense together — built to match your vibe."
            />
            <InfoCard
              title="Always right for the moment"
              text="College, seasons, trips, growth — your wardrobe adjusts when life does. No packing stress. No re-buying."
            />
            <InfoCard
              title="Less waste. More confidence."
              text="Wear what you actually like. Rotate what you don’t. Reduce fast-fashion waste without sacrificing style."
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS (YOUR EXACT STEP NAMING + ADDITION) */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>How Davenport Works</h2>
          <p style={{ ...sectionLead, marginBottom: 28 }}>
            1. Choose a style you like <br />
            2. Get a full wardrobe delivered <br />
            3. Wear it, live in it <br />
            4. Swap when life changes
          </p>
          <p style={{ opacity: 0.72, marginTop: -8, marginBottom: 42 }}>
            No overthinking. No waste.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 22,
            }}
          >
            <Step
              num="01"
              title="Choose your style"
              text="Pick a direction you actually like. We build a wardrobe that matches, not random pieces."
            />
            <Step
              num="02"
              title="Delivered to you"
              text="Ship to campus, home, or wherever you are. No seasonal packing stress."
            />
            <Step
              num="03"
              title="Wear it naturally"
              text="Live in the pieces. You’ll know what works fast when it’s your real life."
            />
            <Step
              num="04"
              title="Swap when life changes"
              text="Rotate what doesn’t fit your life anymore. Keep favorites if you want."
            />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PRICING PREVIEW */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>Flexible tiers</h2>
          <p style={sectionLead}>
            Start simple. Upgrade anytime. Built to match how often you want to
            rotate and how premium you want the wardrobe to be.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            <TierCard
              title="Core"
              price="$79–$99 / mo"
              bullets={[
                "Everyday casual wardrobe",
                "1 swap per month",
                "Best for college + simple routines",
              ]}
            />
            <TierCard
              title="Flex"
              price="$129–$149 / mo"
              bullets={[
                "More pieces, more rotation",
                "2 swaps per month",
                "Best for social + changing weeks",
              ]}
              featured
            />
            <TierCard
              title="Premium"
              price="$199–$249 / mo"
              bullets={[
                "New-only wardrobe option",
                "Unlimited swaps (launch perk)",
                "Best for brand-focused lifestyle",
              ]}
            />
          </div>

          <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/pricing" className="btnPrimary" style={{ display: "inline-block" } as any}>
              View pricing details
            </Link>
            <a href="#waitlist" className="btnGhost">
              Join waitlist <span style={{ opacity: 0.7 }}>→</span>
            </a>
          </div>

          <p style={{ opacity: 0.6, marginTop: 14, lineHeight: 1.6 }}>
            *Pricing shown as expected launch ranges. Final tiers may adjust
            based on inventory and region.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: "120px 0" }}>
        <div className="container">
          <div
            className="card"
            style={{
              maxWidth: 760,
              margin: "0 auto",
              textAlign: "center",
            }}
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
                    outline: "none",
                  }}
                />
                <button className="btnPrimary">Join</button>
              </div>
            </form>

            <p style={{ marginTop: 18, opacity: 0.6, fontSize: "0.92rem" }}>
              We’ll never spam you. One-click unsubscribe anytime.
            </p>
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

function Step({ num, title, text }: any) {
  return (
    <div className="card">
      <div style={{ opacity: 0.5, marginBottom: 8 }}>{num}</div>
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </div>
  );
}

function InfoCard({ title, text }: any) {
  return (
    <div className="card">
      <h3 style={cardTitle}>{title}</h3>
      <p style={cardText}>{text}</p>
    </div>
  );
}

function TierCard({
  title,
  price,
  bullets,
  featured,
}: {
  title: string;
  price: string;
  bullets: string[];
  featured?: boolean;
}) {
  return (
    <div
      className="card"
      style={{
        borderColor: featured ? "rgba(255,255,255,0.26)" : "rgba(255,255,255,0.12)",
        transform: featured ? "translateY(-2px)" : undefined,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <h3 style={{ ...cardTitle, fontSize: "1.25rem" }}>{title}</h3>
        {featured ? (
          <span
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.14em",
              opacity: 0.75,
              alignSelf: "center",
            }}
          >
            MOST POPULAR
          </span>
        ) : null}
      </div>

      <div style={{ marginTop: 10, fontSize: "1.05rem", opacity: 0.9 }}>
        {price}
      </div>

      <ul style={{ marginTop: 14, paddingLeft: 18, opacity: 0.78, lineHeight: 1.8 }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

/* STYLES */

const sectionTitle = {
  fontSize: "2.4rem",
  marginBottom: 14,
};

const sectionLead = {
  maxWidth: 860,
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
