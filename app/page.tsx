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
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2800);
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

        .fade {
          opacity: 0;
          transform: translateY(16px);
          animation: fadeIn 0.9s ease forwards;
        }

        .fade.d1 { animation-delay: .15s; }
        .fade.d2 { animation-delay: .3s; }
        .fade.d3 { animation-delay: .45s; }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .rotatingText {
          position: absolute;
          left: 0;
          top: 0;
          animation: rotateFade 600ms ease forwards;
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
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
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
          transition: background .2s ease;
        }

        .btnGhost:hover {
          background: rgba(255,255,255,0.08);
        }
      `}</style>

      {/* HERO */}
      <section style={{ padding: "140px 0 100px" }}>
        <div className="container">
          <div className="fade">
            <span
              style={{
                letterSpacing: "0.18em",
                fontSize: "0.8rem",
                opacity: 0.7,
              }}
            >
              DAVENPORT WARDROBE
            </span>
          </div>

          <h1
            className="fade d1"
            style={{
              fontSize: "clamp(3rem, 6vw, 4.8rem)",
              lineHeight: 1.05,
              margin: "18px 0",
              fontWeight: 600,
              position: "relative",
              height: "5rem",
              overflow: "hidden",
            }}
          >
            <span key={index} className="rotatingText">
              {phrases[index]}
            </span>
          </h1>

          <p
            className="fade d2"
            style={{
              maxWidth: 720,
              fontSize: "1.25rem",
              lineHeight: 1.65,
              opacity: 0.78,
            }}
          >
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
            <Link href="/faq" className="btnGhost">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>Designed around you</h2>
          <p style={sectionLead}>
            Your wardrobe should reflect how you move through the world. We use
            intelligent systems to understand lifestyle, style preferences,
            age, and cultural context to curate wardrobes that feel natural,
            not forced.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            <InfoCard
              title="Lifestyle-aware"
              text="From class to work to nights out, your wardrobe adjusts to real life, not a static trend."
            />
            <InfoCard
              title="Personal style & culture"
              text="Recommendations reflect taste, identity, and how you want to present yourself."
            />
            <InfoCard
              title="Fit & age intelligence"
              text="Bodies change. Style evolves. Your wardrobe keeps up without starting over."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>How it works</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 22,
            }}
          >
            <Step num="01" title="Curated wardrobe" text="We build a wardrobe around you. You refine it before anything ships." />
            <Step num="02" title="Delivered" text="Your wardrobe arrives when you need it. No seasonal packing." />
            <Step num="03" title="Live in it" text="Wear pieces naturally. Keep what works. Rotate what does not." />
            <Step num="04" title="Return or keep" text="Return items or purchase them as pricing adjusts with wear." />
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: "120px 0" }}>
        <div className="container">
          <div className="card" style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "2.4rem", marginBottom: 12 }}>
              Join the waitlist
            </h2>
            <p style={{ opacity: 0.75, marginBottom: 28 }}>
              Early access, priority wardrobe drops, and student benefits for
              verified .edu emails.
            </p>

            <form action="https://formspree.io/f/xqezkpza" method="POST">
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
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
        © {new Date().getFullYear()} Davenport Wardrobe
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
