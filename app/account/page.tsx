export default function AccountPage() {
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
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <span
          style={{
            letterSpacing: "0.18em",
            fontSize: "0.75rem",
            opacity: 0.6,
          }}
        >
          ACCOUNT
        </span>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
            margin: "12px 0 10px",
            fontWeight: 600,
          }}
        >
          Sign in
        </h1>
        <p style={{ opacity: 0.75, lineHeight: 1.7 }}>
          Account access is coming with the next release. For now, continue
          exploring wardrobes and suitcase planning while we finalize account
          onboarding.
        </p>
      </div>
    </main>
  );
}
