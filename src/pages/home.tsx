import { Link } from "wouter";
import { ArrowRight, Star, Trophy, Zap, Shield, TrendingUp, Users, ChevronRight } from "lucide-react";
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
    rarityColor: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-900/20 to-orange-900/10",
    borderColor: "border-yellow-500/30",
  },
  {
    id: 2,
    title: "WORLD CUP 2026",
    subtitle: "Brazil wins the 2026 FIFA World Cup",
    prize: "$5,600",
    deadline: "30 JUN 2026",
    rarity: "EPIC",
    rarityColor: "from-purple-400 to-pink-500",
    bgColor: "from-purple-900/20 to-pink-900/10",
    borderColor: "border-purple-500/30",
  },
  {
    id: 3,
    title: "AI BREAKTHROUGH",
    subtitle: "AGI milestone achieved before 2026",
    prize: "$1,800",
    deadline: "31 DEC 2025",
    rarity: "RARE",
    rarityColor: "from-cyan-400 to-blue-500",
    bgColor: "from-cyan-900/20 to-blue-900/10",
    borderColor: "border-cyan-500/30",
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
    description: "Open mystery packs and discover rare prediction cards with stunning reveal animations.",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: TrendingUp,
    title: "Live Prediction Markets",
    description: "Cards gain and lose value based on real-world event probabilities and market demand.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Trophy,
    title: "Cash Prize Contests",
    description: "Enter your cards in weekly contests and win real cash prizes for correct predictions.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Shield,
    title: "Secure & Verifiable",
    description: "All card outcomes are tied to publicly verifiable real-world data sources.",
    color: "text-green-400",
    bg: "bg-green-400/10",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Zap className="w-3.5 h-3.5" />
                <span>Season 3 Now Live — $50K Prize Pool</span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-none tracking-tight mb-6">
                <span className="text-foreground">Open Packs.</span>
                <br />
                <span className="text-foreground">Make Calls.</span>
                <br />
                <span className="text-gradient">Win Big.</span>
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                Cardsol is the world's most exciting prediction card platform. Collect cards tied to real events, trade them in our marketplace, and win cash prizes when your predictions hit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all duration-200 glow-primary animate-pulse-glow"
                  data-testid="button-hero-cta"
                >
                  Claim Your Free Card
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/store"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-semibold text-base hover:bg-white/10 transition-all duration-200"
                  data-testid="button-hero-store"
                >
                  Browse Packs
                </Link>
              </div>

              <div className="flex items-center gap-6 mt-10">
                <div className="flex -space-x-2">
                  {["A", "B", "C", "D", "E"].map((l, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-accent/60 border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                    >
                      {l}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-semibold">12,400+</span> players joined this week
                </p>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="hidden lg:flex items-center justify-center relative h-[520px]">
              {featuredCards.map((card, i) => (
                <div
                  key={card.id}
                  className={`absolute prediction-card w-64 p-5 cursor-pointer ${
                    i === 0 ? "animate-float z-30 left-12 top-8" :
                    i === 1 ? "animate-float-delayed z-20 right-0 top-16 opacity-90" :
                    "z-10 left-24 bottom-8 opacity-80"
                  }`}
                  style={{ background: `linear-gradient(145deg, hsl(220 25% 14%), hsl(220 20% 9%))` }}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.bgColor} opacity-40`} />
                  <div className={`absolute inset-0 rounded-2xl border ${card.borderColor}`} />
                  <div className="relative">
                    <div className="flex justify-between items-start mb-6">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${card.rarityColor} text-black`}>
                        {card.rarity}
                      </span>
                      <span className="text-xs text-muted-foreground">CARDSOL</span>
                    </div>
                    <div className="h-28 rounded-xl bg-white/5 mb-4 flex items-center justify-center border border-white/5">
                      <Star className="w-12 h-12 text-white/10" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-snug mb-4">{card.subtitle}</p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-muted-foreground">Prize Pool</p>
                        <p className="text-primary font-bold font-display">{card.prize}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground">Deadline</p>
                        <p className="text-xs font-medium text-foreground">{card.deadline}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl font-800 text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-foreground mb-4">
              Why Players Love Cardsol
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              More than a prediction game — it's a living card ecosystem where knowledge and strategy pay off.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-card-border hover:border-primary/30 transition-all duration-300 group card-glow">
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="font-display text-lg font-700 text-foreground mb-3">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cards Section */}
      <section className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-800 text-foreground mb-3">Hot Predictions</h2>
              <p className="text-muted-foreground">The most talked-about cards right now</p>
            </div>
            <Link
              href="/store"
              className="hidden sm:flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              View All <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredCards.map((card) => (
              <div
                key={card.id}
                className={`prediction-card p-6 cursor-pointer group`}
                data-testid={`card-featured-${card.id}`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.bgColor} opacity-30`} />
                <div className={`absolute inset-0 rounded-2xl border ${card.borderColor}`} />
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${card.rarityColor} text-black`}>
                      {card.rarity}
                    </span>
                    <Star className="w-4 h-4 text-muted-foreground group-hover:text-yellow-400 transition-colors" />
                  </div>
                  <div className="h-40 rounded-xl bg-white/5 mb-4 flex items-center justify-center border border-white/5 overflow-hidden">
                    <div className={`w-full h-full bg-gradient-to-br ${card.bgColor} opacity-60`} />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-snug mb-5">{card.subtitle}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                    <div>
                      <p className="text-xs text-muted-foreground mb-0.5">Prize Pool</p>
                      <p className="text-primary font-bold font-display text-xl">{card.prize}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground mb-0.5">Deadline</p>
                      <p className="text-sm font-medium text-foreground">{card.deadline}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-800 text-foreground mb-4">
              Simple. Exciting. Rewarding.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Four steps from zero to winning real cash prizes.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorksSteps.map((step, i) => (
              <div key={i} className="relative">
                {i < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[-calc(50%-32px)] h-px bg-gradient-to-r from-primary/30 to-transparent z-10" />
                )}
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                    <span className="font-display font-800 text-xl text-primary">{step.step}</span>
                  </div>
                  <h3 className="font-display font-700 text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200"
            >
              Learn more about how it works <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-800 text-foreground mb-4">Real Players, Real Wins</h2>
            <p className="text-muted-foreground">Join thousands of players who are winning with Cardsol</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-card-border card-glow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center font-display font-bold text-primary text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-primary font-medium">Won {t.prize}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-12 rounded-3xl bg-card border border-card-border overflow-hidden">
            <div className="absolute inset-0 hero-glow opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Users className="w-3.5 h-3.5" />
                Limited Free Cards Available
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-800 text-foreground mb-4">
                Your First Card is on Us
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                Sign up today and claim a free prediction card. No credit card needed. Start winning immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all duration-200 glow-primary"
                  data-testid="button-cta-final"
                >
                  Claim Free Card Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/store"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground font-semibold text-lg hover:bg-white/10 transition-all duration-200"
                >
                  Buy a Pack — From $4.99
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
