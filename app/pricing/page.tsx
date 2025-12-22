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
          Choose a tier based on how often you want to rotate your wardrobe and how
          premium you want it to feel. Upgrade anytime.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
            marginTop: 36,
          }}
        >
          <Tier title="Core" price="$79–$99 / mo" bullets={[
            "Everyday casual wardrobe",
            "1 swap per month",
            "Best for college + simple routines",
          ]} />
          <Tier title="Flex" price="$129–$149 / mo" bullets={[
            "More pieces, more variety",
            "2 swaps per month",
            "Best for changing weeks + social life",
          ]} />
          <Tier title="Premium" price="$199–$249 / mo" bullets={[
            "New-only option",
            "More frequent swaps (launch perk)",
            "Best for brand-focused wardrobe",
          ]} />
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
