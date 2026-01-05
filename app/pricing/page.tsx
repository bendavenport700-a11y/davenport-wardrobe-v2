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
        padding: "90px 0",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", marginBottom: 12 }}>
          Pricing
        </h1>
        <p style={{ opacity: 0.78, maxWidth: 760, lineHeight: 1.7 }}>
          Simple model: your monthly access fee covers styling, cleaning, and swaps. If you want to keep a piece, you pay its live buyout price, which drops as it ages or shows wear.
        </p>

        <div
          style={{
            marginTop: 22,
            padding: 18,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            display: "grid",
            gap: 6,
            maxWidth: 860,
          }}
        >
          <div style={{ fontWeight: 600 }}>The fast version:</div>
          <div style={{ opacity: 0.8, lineHeight: 1.6 }}>
            1) Pay monthly access → 2) Get stylist-built rotations (cleaning + shipping included) → 3) Swap on schedule → 4) Keep anything by paying its current buyout, which decreases with age/condition.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
            marginTop: 36,
          }}
        >
          <Tier title="Core Access" price="$79–$99 / mo" bullets={[
            "Styling, cleaning, and shipping included",
            "1 swap per month; see dynamic buyout prices per piece",
            "Buyout drops as items age or show wear",
          ]} />
          <Tier title="Flex Access" price="$129–$149 / mo" bullets={[
            "More pieces in rotation + 2 swaps per month",
            "Mix new and gently used inventory",
            "Buyout adjusts by age, condition, and demand",
          ]} />
          <Tier title="Premium Access" price="$199–$249 / mo" bullets={[
            "Priority access to new drops and technical pieces",
            "More frequent swaps (launch perk)",
            "New pieces start at higher buyout; drop as you rent",
          ]} />
        </div>

        <div
          style={{
            marginTop: 32,
            padding: 22,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.04)",
            maxWidth: 920,
          }}
        >
          <h3 style={{ margin: "0 0 10px" }}>How we value each piece</h3>
          <ul style={{ paddingLeft: 18, opacity: 0.82, lineHeight: 1.75 }}>
            <li>Original cost and category (technical outerwear vs basics)</li>
            <li>Age in rotation and how many wears a piece has logged</li>
            <li>Condition notes: like-new, light wear, repairs, or visible defects</li>
            <li>Demand for the brand/style and seasonality</li>
          </ul>
          <p style={{ marginTop: 10, opacity: 0.72 }}>
            You see the current buyout price in your suitcase before you approve a rotation,
            and it decreases as pieces age or show wear. New-only requests start at full value.
          </p>
        </div>

        <div style={{ marginTop: 28, opacity: 0.75 }}>
          <Link href="/#waitlist" style={{ textDecoration: "underline" }}>
            Join the waitlist
          </Link>
        </div>
      </div>
    </main>
  );
}

function Tier({ title, price, bullets }: { title: string; price: string; bullets: string[] }) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 18,
        padding: 28,
      }}
    >
      <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{title}</h3>
      <div style={{ marginTop: 10, opacity: 0.9 }}>{price}</div>
      <ul style={{ marginTop: 14, paddingLeft: 18, opacity: 0.78, lineHeight: 1.8 }}>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
