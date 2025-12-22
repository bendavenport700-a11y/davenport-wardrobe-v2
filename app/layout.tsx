import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Davenport",
  description: "A smarter way to dress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = React.useState<string | null>(null);

  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {/* NAV BAR */}
        <nav style={navStyle}>
          <Link href="/" style={brandStyle}>
            Davenport
          </Link>

          <div style={navLinksStyle}>
            <Link
              href="/"
              style={hovered === "home" ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => setHovered("home")}
              onMouseLeave={() => setHovered(null)}
            >
              Home
            </Link>

            <Link
              href="/wardrobes"
              style={hovered === "wardrobes" ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => setHovered("wardrobes")}
              onMouseLeave={() => setHovered(null)}
            >
              Wardrobes
            </Link>

            <Link
              href="/pricing"
              style={hovered === "pricing" ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => setHovered("pricing")}
              onMouseLeave={() => setHovered(null)}
            >
              Pricing
            </Link>

            <Link
              href="/faq"
              style={hovered === "faq" ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
              onMouseEnter={() => setHovered("faq")}
              onMouseLeave={() => setHovered(null)}
            >
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

/* STYLES */

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
  letterSpacing: "-0.01em",
};

const navLinksStyle: React.CSSProperties = {
  display: "flex",
  gap: "24px",
};

/* ✅ REPLACED LINK STYLES */

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  opacity: 0.8,
  transition: "opacity 0.2s ease, transform 0.2s ease",
};

const linkHoverStyle: React.CSSProperties = {
  opacity: 1,
  transform: "translateY(-1px)",
};
