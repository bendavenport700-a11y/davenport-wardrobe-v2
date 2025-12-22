"use client";

import Link from "next/link";

export default function PricingPage() {
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
      <style>{`
        * { box-sizing: border-box; }
        a { color: inherit; text-decoration: none; }
        html { scroll-behavior: smooth; }

        .container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .card {
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 28px;
          transition: transform .3s ease, border-color .3s ease, background .3s ease;
        }

        .card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.22);
          background: linear-gradient(180deg, rgba(255,255,255,0.075), rgba(255,255,255,0.02));
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
          display: inline-block;
        }

        .btnPrimary:hover { transform: translateY(-2px); opacity: 0.95; }

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

        .btnGhost:hover { background: rgba(255,255,255,0.08); transform: translateY(-1px); }

        .divider {
          height: 1px;
          background: linear-gradient(90deg,
            rgba(255,255,255,0.0),
            rgba(255,255,255,0.14),
            rgba(255,255,255,0.0));
          margin: 0 auto;
          max-width: 1120px;
        }
      `}</style>

      {/* TOP */}
      <section style={{ padding: "84px 0 36px" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ letterSpacing: "0.18em", opacity: 0.7, fontSize: "0.8rem" }}>
            DAVENPORT
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/" className="btnGhost">
              Home
            </Link>
            <Link href="/faq" className="btnGhost">
              FAQ
            </Link>
            <a href="#tiers" className="btnGhost">
              Tiers
            </a>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section style={{ padding: "48px 0 70px" }}>
        <div className="container">
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              margin: "0 0 14px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              maxWidth: 920,
            }}
          >
            Pricing built for real life
          </h1>
          <p style={{ maxWidth: 780, opacity: 0.78, fontSize: "1.15rem", lineHeight: 1.7 }}>
            Choose a tier based on how often your life changes and how much you want to rotate.
            Upgrade anytime. Keep favorites if you want.
          </p>

          <div style={{ marginTop: 26, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="/#waitlist" className="btnPrimary">
              Join the waitlist
            </a>
            <a href="#tiers" className="btnGhost">
              View tiers <span style={{ opacity: 0.7 }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TIERS */}
      <section id="tiers" style={{ padding: "90px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.2rem", marginBottom: 14 }}>Tiers</h2>
          <p style={{ maxWidth: 860, opacity: 0.75, fontSize: "1.05rem", lineHeight: 1.7, marginBottom: 36 }}>
            These ranges reflect expected launch pricing. Final details can adjust based on inventory and region —
            but the structure stays the same.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            <Tier
              title="Core"
              price="$79–$99 / month"
              sub="Best for college + everyday simplicity"
              bullets={[
                "Lifestyle-ready casual wardrobe",
                "1 swap per month",
                "Season-aware essentials",
                "Great for dorm + campus life",
              ]}
            />
            <Tier
              title="Flex"
              price="$129–$149 / month"
              sub="Best for social weeks + change"
              bullets={[
                "More pieces, more variety",
                "2 swaps per month",
                "Better for nights out / events",
                "Designed for fast-moving schedules",
              ]}
              featured
            />
            <Tier
              title="Premium"
              price="$199–$249 / month"
              sub="Best for brand-focused lifestyle"
              bullets={[
                "New-only wardrobe option",
                "Unlimited swaps (launch perk)",
                "Elevated pieces + premium basics",
                "For people who want zero compromise",
              ]}
            />
          </div>

          <div style={{ marginTop: 22, opacity: 0.7, lineHeight: 1.7 }}>
            <strong>Ways to use Davenport:</strong> college semesters, trips, seasonal transitions, style upgrades,
            and “I need to look good without thinking” months.
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ QUICK */}
      <section style={{ padding: "90px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "2.2rem", marginBottom: 14 }}>Common questions</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}>
            <div className="card">
              <h3 style={{ margin: "0 0 8px", fontSize: "1.1rem" }}>Do I keep the clothes?</h3>
              <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
                You can rotate items back, or keep favorites. Davenport is about flexibility — not forcing ownership.
              </p>
            </div>

            <div className="card">
              <h3 style={{ margin: "0 0 8px", fontSize: "1.1rem" }}>What if my size changes?</h3>
              <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
                That’s one of the main reasons Davenport exists. You swap instead of rebuying your whole wardrobe.
              </p>
            </div>

            <div className="card">
              <h3 style={{ margin: "0 0 8px", fontSize: "1.1rem" }}>Is it used clothing?</h3>
              <p style={{ opacity: 0.75, lineHeight: 1.6 }}>
                Depends on your tier. Some options include gently worn pieces. Premium can be new-only.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 22, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/faq" className="btnGhost">
              Read full FAQ <span style={{ opacity: 0.7 }}>→</span>
            </Link>
            <a href="/#waitlist" className="btnPrimary">
              Join waitlist
            </a>
          </div>
        </div>
      </section>

      <footer style={{ padding: "48px", textAlign: "center", opacity: 0.6, fontSize: "0.9rem" }}>
        © {new Date().getFullYear()} Davenport
      </footer>
    </main>
  );
}

function Tier({
  title,
  price,
  sub,
  bullets,
  featured,
}: {
  title: string;
  price: string;
  sub: string;
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
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{title}</h3>
        {featured ? (
          <span style={{ fontSize: "0.78rem", letterSpacing: "0.14em", opacity: 0.75, alignSelf: "center" }}>
            MOST POPULAR
          </span>
        ) : null}
      </div>
      <div style={{ marginTop: 10, fontSize: "1.05rem", opacity: 0.9 }}>{price}</div>
      <div style={{ marginTop: 8, opacity: 0.68 }}>{sub}</div>
      <ul style={{ marginTop: 14, paddingLeft: 18, opacity: 0.78, lineHeight: 1.8 }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
