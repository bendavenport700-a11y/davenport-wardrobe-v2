export default function FAQPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 50% -10%, #121214 0%, #060607 55%)",
        color: "#f1f1f1",
        padding: "140px 24px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* GLOBAL STYLES */}
      <style>{`
        .container {
          max-width: 920px;
          margin: 0 auto;
        }

        .fade {
          opacity: 0;
          transform: translateY(14px);
          animation: fadeIn 0.8s ease forwards;
        }

        .fade.d1 { animation-delay: .1s; }
        .fade.d2 { animation-delay: .2s; }
        .fade.d3 { animation-delay: .3s; }

        @keyframes fadeIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .faqCard {
          padding: 28px;
          border-radius: 18px;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.06),
            rgba(255,255,255,0.02)
          );
          border: 1px solid rgba(255,255,255,0.12);
          margin-bottom: 22px;
          transition: border-color .25s ease, transform .25s ease;
        }

        .faqCard:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.22);
        }

        .question {
          font-size: 1.25rem;
          margin-bottom: 10px;
        }

        .answer {
          font-size: 1rem;
          line-height: 1.65;
          opacity: 0.78;
        }

        .brandGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
          margin-top: 28px;
        }

        .brandCard {
          padding: 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.04);
          text-align: center;
          font-weight: 500;
          opacity: 0.9;
        }
      `}</style>

      <div className="container">
        {/* HEADER */}
        <div className="fade">
          <span
            style={{
              letterSpacing: "0.18em",
              fontSize: "0.75rem",
              opacity: 0.6,
            }}
          >
            SUPPORT
          </span>
        </div>

        <h1
          className="fade d1"
          style={{
            fontSize: "clamp(2.6rem, 5vw, 3.6rem)",
            margin: "16px 0 48px",
            fontWeight: 600,
          }}
        >
          Frequently asked questions
        </h1>

        {/* FAQ ITEMS */}
        <FAQItem
          q="What is Davenport Wardrobe?"
          a="Davenport Wardrobe provides intelligent access to high-quality clothing without traditional ownership. You receive curated wardrobes, wear what fits your life, and return or keep pieces as your needs evolve."
        />

        <FAQItem
          q="How does the wardrobe selection work?"
          a="Wardrobes are curated using insights from your lifestyle, personal style, age, and cultural preferences. You can refine selections before anything ships to ensure it feels right."
        />

        <FAQItem
          q="Is this a subscription service?"
          a="Davenport is not a fixed-box subscription. It’s a flexible access model built around usage, rotation, and longevity rather than forced monthly cycles."
        />

        <FAQItem
          q="What does pricing adjusting with wear mean?"
          a="Each garment has a lifecycle. As pieces are worn and move through the system, pricing reflects their age and use, making long-worn items more accessible."
        />

        <FAQItem
          q="Who is this designed for?"
          a="Davenport Wardrobe is built for college students, young professionals, and anyone who values efficiency, flexibility, and elevated design without clutter."
        />

        <FAQItem
          q="Do students receive special access?"
          a="Yes. Members with verified .edu emails receive early access, student-specific pricing, and priority wardrobe availability during launch."
        />

        <FAQItem
          q="Is Davenport Wardrobe sustainable?"
          a="Yes. By extending garment lifecycles and reducing overproduction, Davenport Wardrobe lowers textile waste while maintaining premium standards."
        />

        {/* BRANDS */}
        <div className="fade d2" style={{ marginTop: 80 }}>
          <h2 style={{ fontSize: "2.2rem", marginBottom: 12 }}>
            Brands you’ll recognize
          </h2>
          <p style={{ opacity: 0.7, maxWidth: 640 }}>
            Our wardrobes include a mix of well-known modern brands, elevated
            essentials, and carefully selected vintage pieces.
          </p>

          <div className="brandGrid">
            <div className="brandCard">Lululemon</div>
            <div className="brandCard">ZARA</div>
            <div className="brandCard">Uniqlo</div>
            <div className="brandCard">COS</div>
            <div className="brandCard">Nike</div>
            <div className="brandCard">Levi’s</div>
            <div className="brandCard">Vintage & Archive</div>
          </div>
        </div>

        {/* FOOTER NOTE */}
        <p
          className="fade d3"
          style={{
            marginTop: 96,
            fontSize: "0.9rem",
            opacity: 0.5,
            textAlign: "center",
          }}
        >
          Still have questions? Join the waitlist and we’ll keep you updated.
        </p>
      </div>
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="faqCard fade">
      <h3 className="question">{q}</h3>
      <p className="answer">{a}</p>
    </div>
  );
}
