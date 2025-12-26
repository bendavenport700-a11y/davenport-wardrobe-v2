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

          {/* Desktop nav */}
          <div style={navLinksStyle} className="dw-links dw-desktop">
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

          {/* Mobile dropdown */}
          <details className="dw-mobile">
            <summary className="dw-mobile-toggle">Menu</summary>
            <div className="dw-mobile-menu">
              <Link href="/" className="dw-mobile-link">
                Home
              </Link>
              <div className="dw-mobile-sub">
                <div className="dw-mobile-label">Wardrobes</div>
                <Link href="/wardrobes/new-arrivals" className="dw-mobile-link">
                  New Arrivals
                </Link>
                <Link href="/wardrobes" className="dw-mobile-link">
                  Explore Wardrobes
                </Link>
              </div>
              <Link href="/suitcase" className="dw-mobile-link">
                Suitcase
              </Link>
              <Link href="/how-it-works" className="dw-mobile-link">
                How It Works
              </Link>
              <Link href="/sustainability" className="dw-mobile-link">
                Sustainability
              </Link>
              <Link href="/faq" className="dw-mobile-link">
                FAQ
              </Link>
              <Link href="/account" className="dw-mobile-link">
                Account
              </Link>
            </div>
          </details>
        </nav>

        <div style={contentStyle} className="dw-content">
          {children}
        </div>

        {/* Close mobile menu after selecting a link */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== "undefined") {
                window.addEventListener("click", function (e) {
                  var target = e.target;
                  if (!(target && target.classList && target.classList.contains("dw-mobile-link"))) return;
                  var menu = target.closest("details.dw-mobile");
                  if (menu && menu.hasAttribute("open")) {
                    menu.removeAttribute("open");
                  }
                });
              }
            `,
          }}
        />

        {/* Small responsive tweaks without changing your aesthetic */}
        <style>{`
          @media (max-width: 720px) {
            .dw-nav {
              padding: 16px 18px !important;
            }
            .dw-content {
              padding-top: 132px !important;
            }
            .dw-desktop {
              display: none !important;
            }
            .dw-mobile {
              display: block !important;
            }
          }
          .dw-desktop {
            display: flex;
          }
          .dw-mobile {
            display: none;
            margin-left: auto;
            color: #fff;
            cursor: pointer;
          }
          .dw-mobile[open] .dw-mobile-toggle {
            opacity: 1;
          }
          .dw-mobile-toggle {
            list-style: none;
            padding: 10px 12px;
            border: 1px solid rgba(255,255,255,0.22);
            border-radius: 10px;
            background: rgba(0,0,0,0.4);
            font-weight: 600;
            opacity: 0.9;
          }
          .dw-mobile-toggle::-webkit-details-marker {
            display: none;
          }
          .dw-mobile-menu {
            position: absolute;
            right: 18px;
            top: 58px;
            min-width: 220px;
            background: rgba(0,0,0,0.78);
            border: 1px solid rgba(255,255,255,0.16);
            border-radius: 14px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 6px;
            box-shadow: 0 18px 40px rgba(0,0,0,0.35);
          }
          .dw-mobile-link {
            padding: 10px 12px;
            border-radius: 10px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            opacity: 0.9;
          }
          .dw-mobile-link:active {
            opacity: 1;
          }
          .dw-mobile-sub {
            padding: 8px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(255,255,255,0.03);
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
          .dw-mobile-label {
            letter-spacing: 0.08em;
            font-size: 0.8rem;
            opacity: 0.7;
            text-transform: uppercase;
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
