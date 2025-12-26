import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

type StyleWithClass = React.CSSProperties & { className?: string };

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
        <nav style={navStyle} className="dw-nav">
          <Link href="/" style={brandStyle} className="dw-brand">
            Davenport
          </Link>

          <div style={navLinksStyle} className="dw-links">
            <Link href="/" style={linkStyle} className="dw-link">
              Home
            </Link>
            <div style={dropdownStyle} className="dw-dropdown">
              <Link href="/wardrobes" style={linkStyle} className="dw-link">
                Wardrobes
              </Link>
              <div className="dw-menu">
                <Link
                  href="/wardrobes/new-arrivals"
                  style={submenuLinkStyle}
                  className="dw-link"
                >
                  New Arrivals
                </Link>
                <Link
                  href="/wardrobes"
                  style={submenuLinkStyle}
                  className="dw-link"
                >
                  Explore Wardrobes
                </Link>
              </div>
            </div>
            <Link href="/suitcase" style={linkStyle} className="dw-link">
              Suitcase
            </Link>
            <Link href="/how-it-works" style={linkStyle} className="dw-link">
              How It Works
            </Link>
            <Link href="/sustainability" style={linkStyle} className="dw-link">
              Sustainability
            </Link>
            <Link href="/faq" style={linkStyle} className="dw-link">
              FAQ
            </Link>
            <Link href="/account" style={linkStyle} className="dw-link">
              Account
            </Link>
          </div>
        </nav>

        <div style={contentStyle} className="dw-content">
          {children}
        </div>

        {/* Small responsive tweaks without changing your aesthetic */}
        <style>{`
          @media (max-width: 720px) {
            .dw-nav {
              padding: 16px 18px !important;
            }
            .dw-links {
              gap: 10px !important;
              flex-wrap: nowrap !important;
              justify-content: flex-start !important;
              overflow-x: auto !important;
              padding-bottom: 6px !important;
              max-width: calc(100% - 90px);
            }
            .dw-link {
              font-size: 0.95rem !important;
              padding: 8px 10px !important;
            }
            .dw-menu {
              right: 0;
              left: auto;
              min-width: 180px;
            }
            .dw-content {
              padding-top: 132px !important;
            }
          }
          .dw-dropdown {
            position: relative;
          }
          .dw-dropdown .dw-menu {
            position: absolute;
            top: 38px;
            left: 0;
            min-width: 180px;
            background: rgba(0,0,0,0.72);
            border: 1px solid rgba(255,255,255,0.14);
            border-radius: 12px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            opacity: 0;
            visibility: hidden;
            transform: translateY(6px);
            transition: opacity .2s ease, transform .2s ease, visibility .2s ease;
            box-shadow: 0 18px 40px rgba(0,0,0,0.35);
          }
          .dw-dropdown:hover .dw-menu,
          .dw-dropdown:focus-within .dw-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        `}</style>
      </body>
    </html>
  );
}

const navStyle: StyleWithClass = {
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
  className: "dw-nav",
};

const brandStyle: React.CSSProperties = {
  color: "#fff",
  fontSize: "1.25rem",
  textDecoration: "none",
  fontWeight: 600,
  letterSpacing: "-0.01em",
};

const navLinksStyle: StyleWithClass = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
  flexWrap: "wrap", // ✅ allows Pricing to show
  justifyContent: "flex-end",
  className: "dw-links",
};

const linkStyle: StyleWithClass = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "1rem",
  opacity: 0.85,
  padding: "10px 12px",
  borderRadius: 10,
  transition: "opacity 0.2s ease, transform 0.2s ease, background 0.2s ease",
  className: "dw-link",
};

const dropdownStyle: StyleWithClass = {
  position: "relative",
};

const submenuLinkStyle: React.CSSProperties = {
  ...linkStyle,
  display: "block",
  borderRadius: 10,
  padding: "10px 12px",
  whiteSpace: "nowrap",
  background: "rgba(255,255,255,0.03)",
};

const contentStyle: StyleWithClass = {
  paddingTop: "96px",
  className: "dw-content",
};
