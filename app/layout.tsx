import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Davenport",
  description: "A smarter way to dress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <nav style={navStyle}>
          <Link href="/" style={brandStyle}>
            Davenport
          </Link>

          <div style={navLinksStyle}>
            <Link href="/" style={linkStyle}>
              Home
            </Link>
            <Link href="/wardrobes" style={linkStyle}>
              Wardrobes
            </Link>
            <Link href="/pricing" style={linkStyle}>
              Pricing
            </Link>
            <Link href="/faq" style={linkStyle}>
              FAQ
            </Link>
          </div>
        </nav>

        <div style={{ paddingTop: "96px" }}>{children}</div>

        {/* Small responsive tweaks without changing your aesthetic */}
        <style>{`
          @media (max-width: 720px) {
            .dw-nav {
              padding: 16px 18px !important;
            }
            .dw-links {
              gap: 14px !important;
              flex-wrap: wrap !important;
              justify-content: flex-end !important;
            }
            .dw-link {
              font-size: 0.95rem !important;
              padding: 8px 10px !important;
            }
          }
        `}</style>
      </body>
    </html>
  );
}

const navStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "20px 32px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  zIndex: 1000,
} as any;

(navStyle as any).className = "dw-nav"; // harmless if unused

const brandStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: "1.25rem",
  textDecoration: "none",
  fontWeight: 600,
  letterSpacing: "-0.01em",
};

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
  flexWrap: "wrap", // ✅ allows Pricing to show
  justifyContent: "flex-end",
} as any;

(navLinksStyle as any).className = "dw-links";

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  opacity: 0.85,
  padding: "10px 12px",
  borderRadius: 10,
  transition: "opacity 0.2s ease, transform 0.2s ease, background 0.2s ease",
} as any;

(linkStyle as any).className = "dw-link";
