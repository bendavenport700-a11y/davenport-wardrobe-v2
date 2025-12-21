import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif",
        color: "#eaeaea",
        background: "radial-gradient(circle at top, #0f0f10 0%, #070708 60%)",
        minHeight: "100vh",
      }}
    >
      {/* GLOBAL STYLES + MOTION */}
      <style>{`
        :root { color-scheme: dark; }
        * { box-sizing: border-box; }
        a { color: inherit; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
        }
        .container {
          max-width: 1080px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .fadeUp {
          opacity: 0;
          transform: translateY(10px);
          animation: fadeUp 700ms ease forwards;
        }
        .fadeUp.delay1 { animation-delay: 120ms; }
        .fadeUp.delay2 { animation-delay: 220ms; }
        .fadeUp.delay3 { animation-delay: 320ms; }
        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }
        .glow {
          position: absolute;
          inset: -200px -200px auto -200px;
          height: 520px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.10), rgba(255,255,255,0) 55%);
          pointer-events: none;
          filter: blur(10px);
        }
        .heroGrid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 28px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .heroGrid { grid-template-columns: 1fr; }
        }
        .card {
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
          padding: 22px;
          transition: transform 220ms ease, border-color 220ms ease, background 220ms ease;
        }
        .card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.045);
        }
        .chip {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.25);
          color: rgba(255,255,255,0.82);
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .btnPrimary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.16);
          background: #ffffff;
          color: #0a0a0a;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: transform 200ms ease, opacity 200ms ease;
        }
        .btnPrimary:hover { transform: translateY(-1px); opacity: 0.95; }
        .btnGhost {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.92);
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: transform 200ms ease, background 200ms ease, border-color 200ms ease;
        }
        .btnGhost:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.18);
        }
        .muted { color: rgba(255,255,255,0.78); }
        .muted2 { color: rgba(255,255,255,0.62); }

        .sectionTitle {
          font-size: 2.2rem;
          letter-spacing: -0.02em;
          margin: 0 0 18px 0;
          color: rgba(255,255,255,0.96);
        }
        .sectionLead {
          max-width: 860px;
          margin: 0 0 32px 0;
          color: rgba(255,255,255,0.78);
          font-size: 1.1rem;
          line-height: 1.75;
        }
        .grid2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 900px) { .grid2 { grid-template-columns: 1fr; } }
        .stepsGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        @media (max-width: 1100px) { .stepsGrid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 680px) { .stepsGrid { grid-template-columns: 1fr; } }
        .stepNum {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.88);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .heroImage {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.02);
          min-height: 520px;
        }
        @media (max-width: 900px) { .heroImage { min-height: 360px; } }
        .heroImage::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.80)),
            url("/hero.jpg");
          background-size: cover;
          background-position: center;
          filter: saturate(0.95) contrast(1.05);
          transform: scale(1.02);
        }
        .heroImage::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.10), rgba(255,255,255,0) 55%);
          pointer-events: none;
        }
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", padding: "110px 0 70px" }}>
        <div className="glow" />
        <div className="container heroGrid">
          <div>
            <div className="fadeUp">
              <span className="chip">Davenport Wardrobe</span>
            </div>

            <h1
              className="fadeUp delay1"
              style={{
                fontSize: "4.5rem",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                fontWeight: 600,
                margin: "18px 0 16px",
                color: "#ffffff",
              }}
            >
              A smarter way to dress
            </h1>

            <p
              className="fadeUp delay2"
              style={{
                fontSize: "1.25rem",
                maxWidth: "720px",
                margin: "0 0 26px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.78)",
              }}
            >
              Premium wardrobes delivered to your door. Simple, flexible, and
              designed for real life. Keep what you love. Send back what you do
              not.
            </p>

            <div
              className="fadeUp delay3"
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a className="btnPrimary" href="#waitlist">
                Join waitlist
              </a>
              <Link className="btnGhost" href="/faq">
                Read FAQ
              </Link>
            </div>

            <p style={{ marginTop: 18 }} className="muted2">
              Built for young men. New, worn-in, and vintage pieces. Pricing
              becomes more accessible as garments age.
            </p>
          </div>

          <div className="heroImage fadeUp delay2" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="sectionTitle">How it works</h2>
          <p className="sectionLead">
            Four steps. No clutter. No seasonal packing stress. Your wardrobe
            adapts when your life changes.
          </p>

          <div className="stepsGrid">
            <div className="card">
              <div className="stepNum">1</div>
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Get curated options
              </h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
                We suggest pieces based on your fit, preferences, and lifestyle.
                You can swap items and fine-tune your wardrobe before it ships.
              </p>
            </div>

            <div className="card">
              <div className="stepNum">2</div>
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Delivered to your door
              </h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
                A wardrobe arrives when you need it. No hauling bags between
                dorms, apartments, or seasons.
              </p>
            </div>

            <div className="card">
              <div className="stepNum">3</div>
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Wear it on your terms
              </h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
                Daily staples, elevated fits, and special occasion options. Your
                closet stays light while your style stays sharp.
              </p>
            </div>

            <div className="card">
              <div className="stepNum">4</div>
              <h3
                style={{
                  margin: "0 0 10px",
                  color: "rgba(255,255,255,0.92)",
                }}
              >
                Keep or send back
              </h3>
              <p className="muted" style={{ margin: 0, lineHeight: 1.7 }}>
                Return it, keep using it, or purchase it. Pricing adjusts over
                time as garments move through their lifecycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BUILT DIFFERENTLY */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="sectionTitle">Built differently</h2>
          <p className="sectionLead">
            Luxury does not have to mean waste. This is a modern access model
            built for quality, longevity, and convenience.
          </p>

          <div className="grid2">
            <div className="card">
              <h3 style={{ marginTop: 0, color: "rgba(255,255,255,0.92)" }}>
                Pricing evolves with wear
              </h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                Every piece has an “age.” As it is worn more, it becomes more
                accessible while maintaining quality standards.
              </p>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0, color: "rgba(255,255,255,0.92)" }}>
                Less closet clutter
              </h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                Get style without the buildup. Swap with the season instead of
                packing, storing, and rebuying.
              </p>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0, color: "rgba(255,255,255,0.92)" }}>
                Variety, intentionally curated
              </h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                New pieces, lightly worn staples, broken-in favorites, and
                vintage finds. Designed to work together.
              </p>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0, color: "rgba(255,255,255,0.92)" }}>
                Smarter recommendations
              </h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                Better suggestions and fewer misses. Spend less time searching
                and more time wearing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <h2 className="sectionTitle">Sustainability, built in</h2>
          <p className="sectionLead">
            The goal is fewer, better pieces worn for longer. That reduces
            overproduction, lowers textile waste, and helps the planet.
          </p>

          <div className="grid2">
            <div className="card">
              <h3 style={{ marginTop: 0, color: "rgba(255,255,255,0.92)" }}>
                Less overproduction
              </h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                When garments circulate longer, demand shifts from constant new
                inventory to smarter reuse.
              </p>
            </div>

            <div className="card">
              <h3 style={{ marginTop: 0, color: "rgba(255,255,255,0.92)" }}>
                Longer garment life
              </h3>
              <p className="muted" style={{ marginBottom: 0 }}>
                A lifecycle model keeps high-quality clothing in rotation
                instead of sitting unused.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" style={{ padding: "90px 0 80px" }}>
        <div className="container">
          <div
            className="card"
            style={{
              maxWidth: 760,
              margin: "0 auto",
              padding: "56px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                margin: "0 0 12px",
                fontSize: "2.4rem",
                color: "#fff",
              }}
            >
              Join the waitlist
            </h2>
            <p style={{ margin: "0 0 28px" }} className="muted">
              Early access when Davenport Wardrobe launches. Be first in line
              for wardrobe drops and new releases.
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
                  placeholder="Email address"
                  required
                  style={{
                    padding: "14px",
                    width: 280,
                    fontSize: "1rem",
                    borderRadius: 10,
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(0,0,0,0.35)",
                    color: "#fff",
                    outline: "none",
                  }}
                />
                <button type="submit" className="btnPrimary">
                  Join
                </button>
              </div>
            </form>

            <p style={{ marginTop: 16 }} className="muted2">
              No spam. Just product updates.
            </p>
          </div>
        </div>
      </section>

      {/* STUDENT ACCESS (BONUS) */}
      <section style={{ padding: "0 0 130px" }}>
        <div className="container">
          <div
            className="card"
            style={{
              padding: "48px",
              borderRadius: 18,
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
            }}
          >
            <h2 style={{ margin: "0 0 10px", fontSize: "2rem", color: "#fff" }}>
              Student Access Program
            </h2>
            <p className="muted" style={{ margin: "0 0 28px", maxWidth: 820 }}>
              Davenport Wardrobe is for any young man who wants a cleaner way to
              dress. If you are a student, we are also offering early perks for
              verified .edu emails during launch.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 18,
                marginBottom: 26,
              }}
            >
              <div style={miniCardStyle}>
                <div style={miniTitle}>First 100 access</div>
                <div style={miniText}>
                  The first 100 students to join get priority access at launch.
                </div>
              </div>

              <div style={miniCardStyle}>
                <div style={miniTitle}>Student pricing</div>
                <div style={miniText}>
                  Verified .edu emails unlock early student pricing and perks.
                </div>
              </div>

              <div style={miniCardStyle}>
                <div style={miniTitle}>Style priority</div>
                <div style={miniText}>
                  Early members get priority access to smarter wardrobe
                  recommendations as we roll them out.
                </div>
              </div>

              <div style={miniCardStyle}>
                <div style={miniTitle}>Sustainability impact</div>
                <div style={miniText}>
                  Help reduce waste by keeping great garments in circulation.
                </div>
              </div>
            </div>

            <p className="muted2" style={{ margin: 0 }}>
              Optional. Your waitlist spot is still valid with any email.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "48px 24px",
          fontSize: "0.9rem",
          color: "rgba(255,255,255,0.55)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        © {new Date().getFullYear()} Davenport Wardrobe
      </footer>
    </main>
  );
}

const miniCardStyle: React.CSSProperties = {
  padding: "20px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(0,0,0,0.25)",
};

const miniTitle: React.CSSProperties = {
  fontSize: "1rem",
  fontWeight: 600,
  color: "rgba(255,255,255,0.92)",
  marginBottom: 8,
};

const miniText: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.55,
  color: "rgba(255,255,255,0.72)",
};
