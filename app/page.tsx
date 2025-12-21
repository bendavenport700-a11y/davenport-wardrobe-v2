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
      <style>{globalStyles}</style>

      {/* HERO */}
      <section style={{ position: "relative", padding: "120px 0 80px" }}>
        <div className="glow" />
        <div className="container heroGrid">
          <div>
            <span className="chip">Davenport Wardrobe</span>

            <h1 className="heroTitle">A smarter way to dress</h1>

            <p className="heroText">
              Premium wardrobes delivered to your door. Minimal effort, maximum
              style. Flexible access built around real life and sustainability.
            </p>

            <div className="heroActions">
              <a href="#waitlist" className="btnPrimary">
                Join waitlist
              </a>
              <Link href="/faq" className="btnGhost">
                Read FAQ
              </Link>
            </div>

            <p className="heroSub">
              Built for young men. New, worn-in, and vintage pieces. Pricing
              evolves as garments age.
            </p>
          </div>

          <div className="heroImage" />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">How it works</h2>
          <p className="sectionLead">
            Four steps. No clutter. No seasonal packing headaches. Your wardrobe
            adapts when your life changes.
          </p>

          <div className="stepsGrid">
            {steps.map((s, i) => (
              <div key={i} className="card">
                <div className="stepNum">{i + 1}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILT DIFFERENTLY */}
      <section className="section">
        <div className="container">
          <h2 className="sectionTitle">Built differently</h2>
          <p className="sectionLead">
            Luxury doesn’t have to mean waste. This is an access model designed
            for longevity and convenience.
          </p>

          <div className="grid2">
            {builtDifferent.map((b) => (
              <div key={b.title} className="card">
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT ACCESS */}
      <section className="section" id="waitlist">
        <div className="container">
          <div className="card centerCard">
            <h2 className="bigTitle">Student Access Program</h2>
            <p className="muted">
              Students with a <strong>.edu</strong> email receive early access,
              student pricing, and founding member benefits.
            </p>

            <div className="grid2">
              {incentives.map((i) => (
                <div key={i.title} className="miniCard">
                  <h3>{i.title}</h3>
                  <p>{i.text}</p>
                </div>
              ))}
            </div>

            <form
              action="https://formspree.io/f/xqezkpza"
              method="POST"
              className="waitlistForm"
            >
              <input
                type="email"
                name="email"
                placeholder="you@school.edu"
                required
              />
              <button type="submit" className="btnPrimary">
                Join waitlist
              </button>
            </form>

            <p className="tiny">No spam. Early access only.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © {new Date().getFullYear()} Davenport Wardrobe
      </footer>
    </main>
  );
}

/* ---------------- DATA ---------------- */

const steps = [
  {
    title: "Get curated options",
    text: "AI suggests pieces based on your fit and style. You stay in control and can edit before anything ships.",
  },
  {
    title: "Delivered to your door",
    text: "A wardrobe arrives when you need it. No hauling clothes between dorms, apartments, or seasons.",
  },
  {
    title: "Wear it on your terms",
    text: "Daily staples, statement pieces, and occasion fits designed around your real life.",
  },
  {
    title: "Keep or send back",
    text: "Return it, continue using it, or purchase it. Pricing adjusts as garments age.",
  },
];

const builtDifferent = [
  {
    title: "Pricing evolves with wear",
    text: "Each piece has an age. As it’s worn more, it becomes more accessible without sacrificing quality.",
  },
  {
    title: "No unnecessary ownership",
    text: "Swap wardrobes instead of packing, storing, and rebuying every season.",
  },
  {
    title: "Curated variety",
    text: "New pieces, worn-in staples, and vintage finds that work together intentionally.",
  },
  {
    title: "Advanced styling",
    text: "AI helps find what actually works for you. Less scrolling. Fewer misses.",
  },
];

const incentives = [
  {
    title: "First 100 members",
    text: "Founding access and priority onboarding at launch.",
  },
  {
    title: "Student pricing",
    text: "Exclusive rates unlocked with verified .edu emails.",
  },
  {
    title: "AI priority",
    text: "Early access to intelligent styling recommendations.",
  },
  {
    title: "Sustainability impact",
    text: "Help reduce overproduction and textile waste.",
  },
];

/* ---------------- STYLES ---------------- */

const globalStyles = `
.container { max-width:1080px; margin:0 auto; padding:0 24px; }
.section { padding:80px 0; }
.heroGrid { display:grid; grid-template-columns:1.1fr 0.9fr; gap:32px; }
@media(max-width:900px){ .heroGrid{grid-template-columns:1fr;} }
.heroTitle { font-size:4.5rem; margin:18px 0; }
.heroText { font-size:1.25rem; max-width:700px; opacity:.8; }
.heroSub { margin-top:18px; opacity:.6; }
.heroActions { display:flex; gap:12px; margin-top:28px; flex-wrap:wrap; }
.heroImage { min-height:520px; border-radius:18px; background:url('/hero.jpg') center/cover; }
.sectionTitle { font-size:2.3rem; margin-bottom:16px; }
.sectionLead { opacity:.7; max-width:800px; margin-bottom:36px; }
.stepsGrid { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }
@media(max-width:900px){ .stepsGrid{grid-template-columns:1fr 1fr;} }
@media(max-width:600px){ .stepsGrid{grid-template-columns:1fr;} }
.card { border:1px solid rgba(255,255,255,.12); border-radius:16px; padding:24px; background:rgba(255,255,255,.04); }
.grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
@media(max-width:800px){ .grid2{grid-template-columns:1fr;} }
.centerCard { text-align:center; padding:56px; }
.miniCard { padding:18px; border-radius:14px; background:rgba(255,255,255,.05); }
.waitlistForm { margin-top:28px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
.waitlistForm input { padding:14px; border-radius:10px; border:none; width:260px; }
.btnPrimary { background:#fff; color:#000; padding:14px 20px; border-radius:10px; font-weight:600; }
.btnGhost { border:1px solid rgba(255,255,255,.3); padding:14px 20px; border-radius:10px; }
.footer { text-align:center; padding:48px 24px; opacity:.6; }
.chip { display:inline-block; padding:10px 14px; border-radius:999px; border:1px solid rgba(255,255,255,.2); font-size:.85rem; }
.bigTitle { font-size:2.4rem; margin-bottom:12px; }
.muted { opacity:.75; margin-bottom:28px; }
.tiny { font-size:.85rem; opacity:.6; margin-top:16px; }
.stepNum { font-weight:700; margin-bottom:10px; }
.glow { position:absolute; inset:-200px; background:radial-gradient(circle at 30% 20%, rgba(255,255,255,.1), transparent 60%); }
`;
