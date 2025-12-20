import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Davenport Wardrobe",
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
        {/* NAV BAR */}
        <nav style={navStyle}>
          <Link href="/" style={brandStyle}>
            Davenport Wardrobe
          </Link>

          <div style={navLinksStyle}>
            <Link href="/" style={linkStyle}>
              Home
            </Link>
            <Link href="/wardrobes" style={linkStyle}>
              Wardrobes
            </Link>
            <Link href="/faq" style={linkStyle}>
              FAQ
            </Link>
          </div>
        </nav>

        {/* PAGE CONTENT */}
        <div style={{ paddingTop: "96px" }}>{children}</div>
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
};

const brandStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: "1.25rem",
  textDecoration: "none",
  fontWeight: 600,
};

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "24px",
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  opacity: 0.85,
};
