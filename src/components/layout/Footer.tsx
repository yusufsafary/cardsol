import { Link } from "wouter";
import { Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

const footerLinks = {
  Platform: [
    { label: "Store", href: "/store" },
    { label: "Marketplace", href: "/marketplace" },
    { label: "Contests", href: "/contests" },
    { label: "Leaderboard", href: "/leaderboard" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socials = [
  { icon: Twitter, label: "Twitter / X", href: "https://x.com/samurai16sol" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: MessageCircle, label: "Discord", href: "https://discord.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect x="1" y="1" width="26" height="26" rx="6" stroke="white" strokeWidth="1.5" fill="none" strokeOpacity="0.7" />
                <rect x="6" y="9" width="16" height="2" rx="1" fill="white" fillOpacity="0.7" />
                <rect x="6" y="13.5" width="10" height="2" rx="1" fill="white" fillOpacity="0.4" />
                <rect x="6" y="18" width="13" height="2" rx="1" fill="white" fillOpacity="0.25" />
              </svg>
              <span className="font-display font-semibold text-base tracking-[-0.04em] text-white">
                cardsol
              </span>
            </Link>

            <p className="text-sm text-white/35 leading-relaxed max-w-xs mb-6">
              The premier platform for prediction cards. Open mystery packs, trade rare cards, and win cash prizes on real-world events.
            </p>

            <div className="flex items-center gap-2 mb-6">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-white/6 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>

            <a
              href="https://orynth.dev/projects/cardsol"
              target="_blank"
              rel="noopener"
            >
              <img
                src="https://orynth.dev/api/badge/cardsol?theme=light&style=default"
                alt="Featured on Orynth"
                width="160"
                height="50"
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-white tracking-[0.12em] uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/35 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Cardsol. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Play responsibly. Must be 18+ to participate in cash contests.
          </p>
        </div>
      </div>
    </footer>
  );
}
