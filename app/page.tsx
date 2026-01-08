"use client";

import Link from "next/link";
import React from "react";
import inventoryData from "../data/inventory.json";
import Image from "next/image";

export default function Home() {
  const phrases = [
    "A wardrobe you access and rotate",
    "Premium looks without owning everything",
    "Concierge styling, made simple",
    "Rotation that keeps up with you",
    "Access first, ownership by choice",
  ];
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

  const [index, setIndex] = React.useState(0);
  const inventory = inventoryData as InventoryItem[];

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

        .pillRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.14);
          font-size: 0.92rem;
        }

        .brandGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 10px;
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

        .stat {
          display: grid;
          gap: 6px;
          padding: 18px;
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
        }

        .statLabel { opacity: 0.65; font-size: 0.9rem; }
        .statValue { font-size: 1.2rem; font-weight: 600; }

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
            A concierge wardrobe built for your schedule, trips, and campus
            life. Davenport Wardrobe is a wardrobe access and rotation platform,
            not a rental service. Choose curated wardrobes or individual pieces,
            see exact condition, then rotate, keep, or buy with confidence.
          </p>

          <div className="fade d3 pillRow">
            <div className="pill">
              <span style={{ opacity: 0.7 }}>✓</span>
              Curated wardrobes or single pieces
            </div>
            <div className="pill">
              <span style={{ opacity: 0.7 }}>✓</span>
              Condition always stated
            </div>
            <div className="pill">
              <span style={{ opacity: 0.7 }}>✓</span>
              Rotate, keep, or buy
            </div>
          </div>

          <div
            className="fade d4"
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
          <div className="fade d5" style={{ marginTop: 18, opacity: 0.62, lineHeight: 1.7 }}>
            Built for campus, internships, travel, and everything that changes.
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
                Trusted brands we build rotations from
              </h2>
              <span style={{ opacity: 0.7, fontSize: "0.95rem" }}>
                Sourced from premium labels and trusted partners.
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

      {/* VALUE SECTION */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>Why Davenport feels easier</h2>
          <p style={sectionLead}>
            We design and rotate wardrobes that match your week, without the
            endless shopping loop. Each piece lists its condition and wear,
            because most premium garments still look and feel exceptional after
            a few wears. Light wear is normal in daily wardrobes, and we make it
            visible and intentional.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            <InfoCard
              title="Everything works together"
              text="Cohesive rotations that layer and mix, so every piece earns its place."
            />
            <InfoCard
              title="Built for your calendar"
              text="Campus, travel, recruiting, weekends. We plan the rotation so you stay ready."
            />
            <InfoCard
              title="Less clutter, better looks"
              text="Rotate more, buy only what you love. Keep your closet calm and easy to pack."
            />
          </div>
        </div>
      </section>

      {/* PRICING LOGIC */}
      <section style={{ padding: "70px 0 60px" }}>
        <div className="container">
          <h2 style={sectionTitle}>How pricing works here</h2>
          <p style={sectionLead}>
            Your monthly access covers styling, cleaning, and shipping. Each
            piece has a live buyout price that moves with age, condition, and
            demand, so the longer it stays in rotation, the lower the buyout.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
            }}
          >
            <InfoCard
              title="Access, not random fees"
              text="Membership covers curation, fittings, cleaning, and swaps. It is access and rotation with buy options, not a rental plan."
            />
            <InfoCard
              title="Live buyout per piece"
              text="We value items by original cost, age, wear, repairs, and brand demand. Prices decrease as items age."
            />
            <InfoCard
              title="Transparent before you approve"
              text="See each item buyout in your suitcase before shipping. New only requests start at full value, while lightly worn costs less."
            />
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section style={{ padding: "40px 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 16,
            }}
          >
            <div className="stat">
              <div className="statLabel">Made for changing routines</div>
              <div className="statValue">School, work, travel, transitions</div>
            </div>
            <div className="stat">
              <div className="statLabel">Time saved weekly</div>
              <div className="statValue">No constant shopping or guesswork</div>
            </div>
            <div className="stat">
              <div className="statLabel">Regret purchases avoided</div>
              <div className="statValue">Rotate first, buy only what you love</div>
            </div>
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

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>How it works</h2>
          <div className="stepGrid">
            <StepCard
              number="1"
              title="Tell us your week"
              text="Share your schedule, size, and style. Choose from curated wardrobes or individual pieces."
            />
            <StepCard
              number="2"
              title="We assemble the rotation"
              text="Stylists curate pieces that fit, layer, and pack easily. Each item lists exact condition, and you can choose new only or lightly worn."
            />
            <StepCard
              number="3"
              title="Wear, rotate, stay ready"
              text="Keep what works, rotate what does not. Buy what you love, and never overbuy."
            />
          </div>
        </div>
      </section>

      {/* MOMENTS */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="container">
          <h2 style={sectionTitle}>Built for the moments that matter</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            <InfoCard
              title="Campus & internships"
              text="Smart casual that moves between class, labs, and recruiting events without extra shopping trips."
            />
            <InfoCard
              title="Weekend trips"
              text="Packable capsules that fit in a carry on. Swap pieces before you go."
            />
            <InfoCard
              title="Events & presentations"
              text="Polished options ready when you need to show up, with no last minute scramble."
            />
            <InfoCard
              title="Season shifts"
              text="Swap as weather changes. Keep your closet lean and in season."
            />
          </div>
        </div>
      </section>

      {/* INVENTORY (driven by data/inventory.json) */}
      <section id="inventory" style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 style={sectionTitle}>Inventory preview</h2>
          <p style={sectionLead}>
            A glimpse of the rotation. Every piece lists size and condition, so
            you know exactly what arrives.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {inventory.map((item) => (
              <div key={item.id} className="card" style={{ display: "grid", gap: 10 }}>
                <div
                  style={{
                    height: 180,
                    borderRadius: 12,
                    overflow: "hidden",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src={item.image || "/inventory/placeholder.jpg"}
                    alt={item.name}
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 8,
                  }}
                >
                  <div>
                    <h3 style={cardTitle}>{item.name}</h3>
                    <div style={{ opacity: 0.65, fontSize: "0.95rem" }}>
                      {item.collection ? `${item.collection} · ` : ""}
                      {item.category}
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      background:
                        item.status === "low-stock"
                          ? "rgba(255, 205, 86, 0.15)"
                          : item.status === "unavailable"
                            ? "rgba(255, 99, 132, 0.15)"
                            : "rgba(75, 181, 67, 0.18)",
                      color:
                        item.status === "low-stock"
                          ? "#e6b800"
                          : item.status === "unavailable"
                            ? "#ff6b81"
                            : "#6bd66b",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", opacity: 0.8 }}>
                  <div
                    style={{
                      padding: "8px 10px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.92rem",
                    }}
                  >
                    Sizes:{" "}
                    {(
                      Array.isArray(item.sizes)
                        ? item.sizes
                        : item.sizes
                          ? [String(item.sizes)]
                          : []
                    ).join(", ")}
                  </div>
                  <div
                    style={{
                      padding: "8px 10px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      fontSize: "0.92rem",
                    }}
                  >
                    ${item.price}
                  </div>
                </div>
                {item.tags?.length ? (
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "6px 10px",
                          borderRadius: 999,
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          fontSize: "0.88rem",
                          opacity: 0.85,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                {item.notes ? (
                  <div style={{ opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.5 }}>
                    {item.notes}
                  </div>
                ) : null}
              </div>
            ))}
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

type InventoryItem = {
  id: string;
  name: string;
  collection?: string;
  category: string;
  sizes?: (string | number)[];
  price?: number;
  status?: "available" | "low-stock" | "unavailable";
  image?: string;
  notes?: string;
  tags?: string[];
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
