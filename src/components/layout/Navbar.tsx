import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Store", href: "/store" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Contests", href: "/contests" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "How It Works", href: "/how-it-works" },
];

const tickerItems = [
  { text: "$CRD Token Launching Soon", link: "https://kickstart.easya.io/", linkText: "Join on Kickstart →" },
  { text: "Follow the Builder for updates", link: "https://twitter.com", linkText: "@cardsol_builder" },
  { text: "$CRD Token — Early Access Now Live", link: "https://kickstart.easya.io/", linkText: "kickstart.easya.io →" },
  { text: "Prediction Cards. Real Prizes.", link: null, linkText: null },
  { text: "$CRD Token Launching Soon", link: "https://kickstart.easya.io/", linkText: "Join on Kickstart →" },
  { text: "Follow the Builder for updates", link: "https://twitter.com", linkText: "@cardsol_builder" },
  { text: "$CRD Token — Early Access Now Live", link: "https://kickstart.easya.io/", linkText: "kickstart.easya.io →" },
  { text: "Prediction Cards. Real Prizes.", link: null, linkText: null },
];

function CardsolLogo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      {/* Clean geometric card mark */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <rect x="1" y="1" width="26" height="26" rx="6" stroke="white" strokeWidth="1.5" fill="none" />
        <rect x="6" y="9" width="16" height="2" rx="1" fill="white" />
        <rect x="6" y="13.5" width="10" height="2" rx="1" fill="white" fillOpacity="0.5" />
        <rect x="6" y="18" width="13" height="2" rx="1" fill="white" fillOpacity="0.3" />
      </svg>
      <span className="font-display font-semibold text-[17px] tracking-[-0.04em] text-white leading-none">
        cardsol
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return (
    <>
      {/* Announcement Ticker */}
      <div className="w-full bg-white overflow-hidden" style={{ height: "36px" }}>
        <div className="ticker-track h-full flex items-center">
          {tickerItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-8 shrink-0">
              <span
                className="w-1.5 h-1.5 rounded-full bg-black shrink-0"
                aria-hidden="true"
              />
              <span className="text-black text-xs font-medium tracking-wide whitespace-nowrap">
                {item.text}
              </span>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-xs font-semibold underline underline-offset-2 hover:opacity-70 transition-opacity whitespace-nowrap flex items-center gap-1"
                >
                  {item.linkText}
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 left-0 right-0 z-50 border-b border-white/8 bg-black/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[60px]">
            <CardsolLogo />

            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-md text-[13px] font-medium transition-all duration-150 ${
                    location === link.href
                      ? "text-white bg-white/10"
                      : "text-white/50 hover:text-white hover:bg-white/6"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/login"
                className="px-4 py-2 text-[13px] font-medium text-white/50 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="btn-primary px-5 py-2 text-[13px]"
                data-testid="button-register-nav"
              >
                Get Started
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-white/50 hover:text-white hover:bg-white/6 transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/8 bg-black px-5 py-4 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-all duration-150 ${
                  location === link.href
                    ? "text-white bg-white/10"
                    : "text-white/50 hover:text-white hover:bg-white/6"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/8 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-md text-sm font-medium text-white/50 hover:text-white hover:bg-white/6 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="btn-primary block px-4 py-3 text-sm text-center"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
