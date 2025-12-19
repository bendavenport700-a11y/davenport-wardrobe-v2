export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#0f0f0f",
        background:
          "radial-gradient(circle at top, #111 0%, #000 60%)",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "3.75rem",
              fontWeight: 500,
              marginBottom: "20px",
              letterSpacing: "-0.03em",
              color: "#fff",
            }}
          >
            A smarter way to dress
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              maxWidth: "720px",
              margin: "0 auto 24px",
              lineHeight: "1.6",
              color: "#b5b5b5",
            }}
          >
            Premium wardrobes delivered to your door.
            Flexible, sustainable, and built for how young men actually live.
          </p>

          <p
            style={{
              fontSize: "0.95rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#777",
            }}
          >
            Access over ownership · Style without excess
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 24px",
        }}
      >
        <h2 style={{ fontSize: "2.25rem", marginBottom: "32px" }}>
          How it works
        </h2>

        <ol
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.9",
            color: "#444",
          }}
        >
          <li>Select clothing from a rotating wardrobe</li>
          <li>Receive it directly at your doorstep</li>
          <li>Wear it on your terms</li>
          <li>
            Return it or keep it as pricing adjusts with wear
          </li>
        </ol>
      </section>

      {/* WHY IT'S DIFFERENT */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 24px 120px",
        }}
      >
        <h2 style={{ fontSize: "2.25rem", marginBottom: "32px" }}>
          Built differently
        </h2>

        <ul
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.9",
            color: "#444",
          }}
        >
          <li>No unnecessary ownership</li>
          <li>Pricing decreases as garments age</li>
          <li>No storing or hauling clothes between seasons</li>
          <li>Every piece has a lifecycle</li>
          <li>Sustainability built into the system</li>
        </ul>
      </section>

      {/* WAITLIST */}
      <section
        style={{
          maxWidth: "720px",
          margin: "0 auto 160px",
          padding: "56px",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          textAlign: "center",
          background: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "2.4rem",
            marginBottom: "16px",
            color: "#fff",
          }}
        >
          Join the waitlist
        </h2>

        <p
          style={{
            marginBottom: "32px",
            color: "#aaa",
            fontSize: "1.05rem",
          }}
        >
          Early access when Davenport Wardrobe launches.
        </p>

        <form
          action="https://formspree.io/f/yourformid"
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
            style={{
              padding: "14px",
              width: "260px",
              fontSize: "1rem",
              marginRight: "12px",
              borderRadius: "6px",
              border: "1px solid #333",
              background: "#000",
              color: "#fff",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "14px 28px",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "6px",
              border: "none",
              background: "#fff",
              color: "#000",
            }}
          >
            Join
          </button>
        </form>
      </section>

      {/* EXTRA DETAIL */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto 120px",
          padding: "0 24px",
          color: "#555",
          fontSize: "1.05rem",
          lineHeight: "1.8",
        }}
      >
        <p>
          Davenport Wardrobe is designed around longevity, flexibility,
          and intelligent reuse. As garments age, they become more
          accessible—keeping quality clothing in circulation and
          reducing overproduction.
        </p>

        <p style={{ marginTop: "24px" }}>
          Over time, advanced styling technology will help curate
          wardrobes that align with your preferences, fit, and lifestyle.
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "48px 24px",
          fontSize: "0.9rem",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} Davenport Wardrobe
      </footer>
    </main>
  );
}
