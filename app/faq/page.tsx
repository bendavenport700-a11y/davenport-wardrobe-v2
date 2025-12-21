export default function FAQPage() {
  return (
    <main
      style={{
        maxWidth: 880,
        margin: "0 auto",
        padding: "120px 24px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "48px" }}>
        Frequently Asked Questions
      </h1>

      <FAQItem
        q="What is Davenport Wardrobe?"
        a="Davenport Wardrobe is a modern clothing platform that gives you access to premium wardrobes without traditional ownership. You wear what you need, when you need it — without excess."
      />

      <FAQItem
        q="How does it work?"
        a="You select clothing from a rotating wardrobe curated for your lifestyle. AI recommendations help refine your options, which you can edit at any time. Items are delivered to your door, worn on your terms, and returned or kept as pricing adjusts with wear."
      />

      <FAQItem
        q="Is this a subscription?"
        a="Not in the traditional sense. Davenport is built around access, flexibility, and usage — not fixed monthly boxes or forced ownership."
      />

      <FAQItem
        q="Do students get special pricing?"
        a="Yes. Students with a verified .edu email receive exclusive early pricing and access through our Student Access Program."
      />

      <FAQItem
        q="What does 'pricing adjusts with wear' mean?"
        a="Garments naturally decrease in value as they age. Our model reflects that reality — rewarding long-term use rather than encouraging constant replacement."
      />

      <FAQItem
        q="Is this sustainable?"
        a="Yes. By extending garment lifecycles and reducing unnecessary production, Davenport Wardrobe helps lower textile waste and overproduction while maintaining quality and style."
      />

      <FAQItem
        q="Who is this built for?"
        a="Davenport Wardrobe is designed for college students, young professionals, and anyone who values flexibility, efficiency, and elevated design without clutter."
      />

      <FAQItem
        q="When are you launching?"
        a="We are currently onboarding early members and refining the platform. You can join the waitlist for priority access and updates."
      />
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div
      style={{
        marginBottom: "36px",
        paddingBottom: "36px",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <h3 style={{ fontSize: "1.3rem", marginBottom: "10px" }}>{q}</h3>
      <p style={{ fontSize: "1rem", opacity: 0.85, lineHeight: 1.6 }}>{a}</p>
    </div>
  );
}
