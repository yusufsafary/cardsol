import { Link } from "wouter";
import { ArrowRight, Trophy, Zap, Shield, TrendingUp, Users, ChevronRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const featuredCards = [
  {
    id: 1,
    title: "CRYPTO HITS $200K",
    subtitle: "Bitcoin reaches $200,000 by end of 2025",
    prize: "$2,400",
    deadline: "31 DEC 2025",
    rarity: "LEGENDARY",
  },
  {
    id: 2,
    title: "WORLD CUP 2026",
    subtitle: "Brazil wins the 2026 FIFA World Cup",
    prize: "$5,600",
    deadline: "30 JUN 2026",
    rarity: "EPIC",
  },
  {
    id: 3,
    title: "AI BREAKTHROUGH",
    subtitle: "AGI milestone achieved before 2026",
    prize: "$1,800",
    deadline: "31 DEC 2025",
    rarity: "RARE",
  },
];

const stats = [
  { value: "250K+", label: "Active Players" },
  { value: "$4.2M", label: "Total Prizes Paid" },
  { value: "15K+", label: "Cards in Circulation" },
  { value: "98%", label: "Payout Rate" },
];

const features = [
  {
    icon: Zap,
    title: "Instant Pack Opening",
    description: "Open mystery packs and discover rare prediction cards with satisfying reveal animations.",
  },
  {
    icon: TrendingUp,
    title: "Live Prediction Markets",
    description: "Cards gain and lose value based on real-world event probabilities and market demand.",
  },
  {
    icon: Trophy,
    title: "Cash Prize Contests",
    description: "Enter your cards in weekly contests and win real cash prizes for correct predictions.",
  },
  {
    icon: Shield,
    title: "Secure & Verifiable",
    description: "All card outcomes are tied to publicly verifiable real-world data sources.",
  },
];

const howItWorksSteps = [
  { step: "01", title: "Get Your Cards", description: "Claim a free card or buy mystery packs to start your collection." },
  { step: "02", title: "Make Predictions", description: "Each card represents a bold prediction about a future event." },
  { step: "03", title: "Watch & Trade", description: "Track events live and trade cards in our marketplace as odds shift." },
  { step: "04", title: "Collect Prizes", description: "Win cash when your predictions come true at deadline." },
];

const testimonials = [
  {
    name: "Marcus K.",
    avatar: "MK",
    text: "I turned $20 into $1,400 in three months. The card reveal experience is unlike anything else.",
    prize: "$1,400",
  },
  {
    name: "Sarah T.",
    avatar: "ST",
    text: "The marketplace is incredible. I traded a rare card for 8x its original value before the deadline.",
    prize: "8x return",
  },
  {
    name: "Diego R.",
    avatar: "DR",
    text: "Best prediction platform out there. Fair, transparent, and the prizes are real.",
    prize: "$680",
  },
];

function CardPreview({ card, className }: { card: typeof featuredCards[0]; className?: string }) {
  return (
    <div className={`prediction-card w-60 p-5 cursor-pointer ${className}`}>
      <div className="flex justify-between items-start mb-5">
        <span className="text-[10px] font-semibold px-2.5 py-1 rounded-sm bg-white text-black tracking-widest uppercase">
          {card.rarity}
        </span>
        <span className="text-[10px] text-white/30 tracking-widest font-mono">CARDSOL</span>
      </div>
      <div className="h-28 rounded-md bg-white/4 border border-white/6 mb-4 flex items-center justify-center">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="1" y="1" width="34" height="34" rx="6" stroke="white" strokeWidth="1" strokeOpacity="0.15" fill="none" />
          <path d="M12 18h12M12 13h8M12 23h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.2" />
        </svg>
      </div>
      <p className="font-display font-semibold text-sm text-white tracking-tight mb-1">{card.title}</p>
      <p className="text-[11px] text-white/40 leading-snug mb-4">{card.subtitle}</p>
      <div className="flex justify-between items-end border-t border-white/6 pt-3">
        <div>
          <p className="text-[10px] text-white/30 mb-0.5">Prize Pool</p>
          <p className="text-white font-semibold font-display text-sm">{card.prize}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-white/30 mb-0.5">Deadline</p>
          <p className="text-[11px] font-medium text-white/60">{card.deadline}</p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* $CRD Token Banner */}
      <section className="border-b border-white/8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse shrink-0" />
              <p className="text-sm text-white/80">
                <span className="font-semibold text-white">$CRD Token</span> — Cardsol's native token is launching on{" "}
                <span className="font-semibold text-white">kickstart.easya.io</span>
              </p>
            </div>
            <a
              href="https://kickstart.easya.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md bg-white text-black text-xs font-semibold hover:bg-white/90 transition-colors"
            >
              Join Early Access
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-25" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-white/12 text-white/60 text-xs font-medium mb-10 tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                Season 3 Now Live — $50K Prize Pool
              </div>

              <h1 className="font-display font-semibold text-[56px] sm:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.04em] mb-8 text-white">
                Open Packs.<br />
                Make Calls.<br />
                Win Big.
              </h1>

              <p className="text-[17px] text-white/50 leading-relaxed mb-10 max-w-md font-normal">
                Cardsol is the world's most exciting prediction card platform. Collect cards tied to real events, trade them, and win cash prizes when your predictions hit.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/register"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px]"
                  data-testid="button-hero-cta"
                >
                  Claim Your Free Card
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/store"
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px]"
                  data-testid="button-hero-store"
                >
                  Browse Packs
                </Link>
              </div>

              <div className="flex items-center gap-4 mt-10">
                <div className="flex -space-x-2">
                  {["A","B","C","D","E"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-white/10 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/40">
                  <span className="text-white font-semibold">12,400+</span> players joined this week
                </p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hidden lg:flex items-center justify-center relative h-[500px]">
              <CardPreview card={featuredCards[0]} className="absolute animate-float z-30 left-8 top-12" />
              <CardPreview card={featuredCards[1]} className="absolute animate-float-delayed z-20 right-4 top-20 opacity-80" />
              <CardPreview card={featuredCards[2]} className="absolute z-10 left-20 bottom-12 opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 border-y border-white/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-semibold text-[40px] text-white tracking-[-0.04em] leading-none mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40 tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <h2 className="font-display font-semibold text-[42px] lg:text-[52px] text-white tracking-[-0.04em] leading-none mb-4">
              Why Players Love Cardsol
            </h2>
            <p className="text-white/40 text-lg max-w-xl">
              More than a prediction game — a living card ecosystem where knowledge and strategy pay off.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/16 hover:bg-white/[0.05] transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/6 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                  <feature.icon className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="font-display font-semibold text-[15px] text-white tracking-tight mb-2">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards */}
      <section className="py-28 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display font-semibold text-[42px] text-white tracking-[-0.04em] leading-none mb-3">
                Hot Predictions
              </h2>
              <p className="text-white/40">The most talked-about cards right now</p>
            </div>
            <Link
              href="/store"
              className="hidden sm:flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {featuredCards.map((card) => (
              <div
                key={card.id}
                className="prediction-card p-6 group"
                data-testid={`card-featured-${card.id}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-sm bg-white text-black tracking-widest uppercase">
                    {card.rarity}
                  </span>
                </div>
                <div className="h-40 rounded-lg bg-white/[0.03] border border-white/6 mb-5 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="1" y="1" width="38" height="38" rx="7" stroke="white" strokeWidth="1" strokeOpacity="0.1" fill="none" />
                    <path d="M13 20h14M13 14h9M13 26h11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.15" />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-white tracking-tight mb-2">{card.title}</h3>
                <p className="text-sm text-white/40 leading-snug mb-5">{card.subtitle}</p>
                <div className="flex justify-between items-end border-t border-white/6 pt-4">
                  <div>
                    <p className="text-[10px] text-white/30 mb-0.5">Prize Pool</p>
                    <p className="font-display font-semibold text-white text-xl tracking-tight">{card.prize}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-white/30 mb-0.5">Deadline</p>
                    <p className="text-sm font-medium text-white/50">{card.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-28 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <h2 className="font-display font-semibold text-[42px] lg:text-[52px] text-white tracking-[-0.04em] leading-none mb-4">
              Simple. Exciting. Rewarding.
            </h2>
            <p className="text-white/40 text-lg max-w-md">
              Four steps from zero to winning real cash prizes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-px bg-white/6 rounded-xl overflow-hidden">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="bg-black p-8 hover:bg-white/[0.03] transition-colors">
                <p className="font-mono text-white/20 text-sm mb-5 tracking-widest">{step.step}</p>
                <h3 className="font-display font-semibold text-white tracking-tight mb-3">{step.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-white/50 hover:text-white text-sm font-medium transition-colors"
            >
              Learn more <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16">
            <h2 className="font-display font-semibold text-[42px] text-white tracking-[-0.04em] leading-none mb-3">
              Real Players, Real Wins
            </h2>
            <p className="text-white/40">Join thousands of players winning with Cardsol</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/[0.03] border border-white/8 hover:border-white/14 transition-all">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-white/8 flex items-center justify-center font-semibold text-white text-xs tracking-wide">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm tracking-tight">{t.name}</p>
                    <p className="text-xs text-white/40">Won {t.prize}</p>
                  </div>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token CTA */}
      <section className="py-28 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-15" />
            <div className="relative max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-white/30 uppercase mb-5">
                Token Launch
              </p>
              <h2 className="font-display font-semibold text-[48px] lg:text-[60px] text-white tracking-[-0.04em] leading-none mb-5">
                $CRD Token is Going Live
              </h2>
              <p className="text-white/40 text-lg mb-8 leading-relaxed">
                The Cardsol native token launches on kickstart.easya.io. Get early access, earn rewards, and power the prediction economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://kickstart.easya.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px]"
                >
                  Join on Kickstart
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/register"
                  className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px]"
                  data-testid="button-cta-final"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 border-t border-white/6">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/30 uppercase mb-5">
            Get Started Free
          </p>
          <h2 className="font-display font-semibold text-[48px] lg:text-[68px] text-white tracking-[-0.04em] leading-[0.95] mb-6 max-w-2xl mx-auto">
            Your First Card is on Us
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Sign up today and claim a free prediction card. No credit card needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/register"
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              Claim Free Card
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/store"
              className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-base"
            >
              <Users className="w-4 h-4" />
              Browse Packs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
