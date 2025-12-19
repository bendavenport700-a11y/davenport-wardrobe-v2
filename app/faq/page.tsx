export default function FAQPage() {
  return (
    <main
      style={{
        backgroundColor: "#0b0b0b",
        color: "#e5e5e5",
        minHeight: "100vh",
        padding: "120px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 500,
            textAlign: "center",
            marginBottom: "16px",
            letterSpacing: "-0.02em",
          }}
        >
          Frequently Asked Questions
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#a1a1a1",
            marginBottom: "80px",
            fontSize: "16px",
          }}
        >
          Everything you need to know about Davenport Wardrobe.
        </p>

        {/* FAQ ITEM */}
        <div style={faqItem}>
          <h3 style={faqQuestion}>What is Davenport Wardrobe?</h3>
          <p style={faqAnswer}>
            Davenport Wardrobe is a modern clothing platform that gives you
            access to premium wardrobes without traditional ownership. You wear
            what you need, when you need it — without excess.
          </p>
        </div>

        <div style={faqItem}>
          <h3 style={faqQuestion}>How does it work?</h3>
          <ul style={faqList}>
            <li>
              Select clothing from a rotating wardrobe curated by AI, with full
              control to make edits and swaps.
            </li>
            <li>
              Receive your pieces directly at your doorstep.
            </li>
            <li>
              Wear them on your terms — daily, weekly, or occasionally.
            </li>
            <li>
              Return items or keep them as pricing adjusts naturally with wear.
            </li>
          </ul>
        </div>

        <div style={faqItem}>
          <h3 style={faqQuestion}>Is it sustainable?</h3>
          <p style={faqAnswer}>
            Yes. Every garment has a lifecycle. By extending how long clothing is
            worn and reducing the demand for constant new production, Davenport
            Wardrobe helps lower overproduction, textile waste, and environmental
            impact.
          </p>
        </div>

        <div style={faqItem}>
          <h3 style={faqQuestion}>How does this reduce overproduction?</h3>
          <p style={faqAnswer}>
            Instead of manufacturing for one-time ownership, each piece is
            designed to be worn by multiple members over time. This dramatically
            reduces excess inventory, unsold stock, and waste.
          </p>
        </div>

        <div style={faqItem}>
          <h3 style={faqQuestion}>Who is this for?</h3>
          <p style={faqAnswer}>
            Davenport Wardrobe is built for college students, young
            professionals, and anyone who values flexibility, efficiency, and
            well-designed clothing without unnecessary ownership.
          </p>
        </div>

        <div style={faqItem}>
          <h3 style={faqQuestion}>What happens when seasons change?</h3>
          <p style={faqAnswer}>
            No packing, storing, or hauling clothes between seasons. Your
            wardrobe adapts as your needs change — automatically.
          </p>
        </div>

        <div style={faqItem}>
          <h3 style={faqQuestion}>When are you launching?</h3>
          <p style={faqAnswer}>
            We’re currently building and refining the platform. You can join the
            waitlist on the homepage for early access and updates.
          </p>
        </div>
      </div>
    </main>
  );
}

const faqItem = {
  marginBottom: "48px",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  paddingBottom: "32px",
};

const faqQuestion = {
  fontSize: "20px",
  fontWeight: 500,
  marginBottom: "12px",
  color: "#ffffff",
};

const faqAnswer = {
  fontSize: "16px",
  lineHeight: "1.7",
  color: "#b5b5b5",
};

const faqList = {
  paddingLeft: "20px",
  color: "#b5b5b5",
  lineHeight: "1.8",
};
