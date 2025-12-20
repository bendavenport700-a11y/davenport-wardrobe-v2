export default function WardrobesPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "120px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 600,
          marginBottom: "24px",
        }}
      >
        Example Wardrobes
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          opacity: 0.8,
          maxWidth: "700px",
          marginBottom: "64px",
        }}
      >
        Curated wardrobes designed for different lifestyles. These are rotating
        collections — powered by AI — that adapt as your needs change.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "32px",
        }}
      >
        {[
          {
            title: "Campus Essentials",
            desc: "Clean, versatile pieces for daily classes, social events, and weekends.",
          },
          {
            title: "Young Professional",
            desc: "Smart casual outfits built for internships, networking, and city life.",
          },
          {
            title: "Active & Off-Duty",
            desc: "Athleisure and comfort-first fits that still look intentional.",
          },
          {
            title: "Minimal Luxury",
            desc: "Timeless, elevated staples designed to age beautifully.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              padding: "28px",
              borderRadius: "16px",
              background: "rgba(0,0,0,0.04)",
            }}
          >
            <h3 style={{ marginBottom: "12px" }}>{item.title}</h3>
            <p style={{ opacity: 0.75 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
