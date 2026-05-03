import { Link } from "wouter";
import { Package, TrendingUp, Trophy, ArrowRight, CheckCircle, Zap, Shield, RefreshCw } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose Your Pack",
    color: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/20",
    description: "Start by choosing from our selection of mystery packs. Each pack contains prediction cards covering real-world events — from sports championships to financial milestones, tech breakthroughs, and more.",
    bullets: ["Starter Pack (3 cards) from just $4.99", "Pro Pack (5 cards) with guaranteed Epic+", "Elite Pack (8 cards) with guaranteed Legendary", "Or claim your first card completely free"],
  },
  {
    number: "02",
    icon: Zap,
    title: "Reveal Your Cards",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    description: "Experience the thrill of opening your pack with immersive card reveal animations. Each card reveals a specific prediction about a future event with a set deadline and prize pool.",
    bullets: ["4 rarity tiers: Common, Rare, Epic, Legendary", "Each card has a verifiable prediction statement", "Prize pools range from $50 to $25,000+", "Animated reveal for every card"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Trade in the Marketplace",
    color: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/20",
    description: "Cards have real market value that fluctuates based on prediction probability and time remaining. Trade strategically — buy cards you believe in, sell when the market peaks.",
    bullets: ["Real-time market pricing", "Set your own asking price", "Buy cards from other players", "Portfolio tracking and analytics"],
  },
  {
    number: "04",
    icon: Trophy,
    title: "Win Cash Prizes",
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    description: "When a prediction's deadline arrives, our system automatically verifies the outcome against trusted data sources. Correct predictions pay out in cash — directly to your account.",
    bullets: ["Automatic payout verification", "Cash paid within 24 hours", "Enter cards in multiplier contests", "No fees on prize withdrawals"],
  },
];

const faqs = [
  { q: "How are prediction outcomes verified?", a: "We use multiple trusted third-party data sources including Reuters, Associated Press, and official league/exchange APIs. All verifications are logged and auditable." },
  { q: "Is Cardsol legal in my country?", a: "Cardsol operates as a skill-based prediction platform. We are licensed in most major jurisdictions. Check our Terms of Service for country-specific information." },
  { q: "What happens if a prediction is cancelled?", a: "If a real-world event is cancelled or the prediction becomes unresolvable, all cards for that prediction are refunded at face value." },
  { q: "Can I withdraw my winnings?", a: "Yes! Withdraw via bank transfer, PayPal, or crypto. Minimum withdrawal is $10 and funds arrive within 1-3 business days." },
  { q: "Are the pack odds disclosed?", a: "Absolutely. We publish full odds for every pack type. Common: 60%, Rare: 28%, Epic: 10%, Legendary: 2%." },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-foreground mb-4">
              How Cardsol Works
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
              From your first pack to your first payout — here's everything you need to know to start winning.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-20">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-3xl bg-card border ${step.border} overflow-hidden`}
                data-testid={`step-${i + 1}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-20`} />
                <div className="relative flex flex-col lg:flex-row gap-8">
                  <div className="shrink-0 flex flex-col items-start gap-4">
                    <span className="font-display font-800 text-6xl text-white/5 leading-none">{step.number}</span>
                    <div className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center`}>
                      <step.icon className={`w-7 h-7 ${step.color}`} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className={`font-display text-2xl font-700 ${step.color} mb-3`}>{step.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-5">{step.description}</p>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {step.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-4 h-4 ${step.color} shrink-0 mt-0.5`} />
                          <span className="text-sm text-muted-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-card border border-card-border flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-800 text-foreground text-center mb-10">Platform Guarantees</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Shield, title: "Provably Fair", desc: "All outcomes verified through multiple independent sources with full audit trails.", color: "text-green-400", bg: "bg-green-400/10" },
                { icon: RefreshCw, title: "Instant Payouts", desc: "Prize payouts processed within 24 hours of event verification.", color: "text-primary", bg: "bg-primary/10" },
                { icon: Zap, title: "No Hidden Fees", desc: "We charge 5% on marketplace sales only. All prizes paid out in full.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-card-border text-center card-glow">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="font-display font-700 text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-800 text-foreground text-center mb-10">Common Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-card-border" data-testid={`faq-item-${i}`}>
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-10 rounded-3xl bg-card border border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 hero-glow opacity-30" />
            <div className="relative">
              <h2 className="font-display text-3xl font-800 text-foreground mb-3">Ready to Start?</h2>
              <p className="text-muted-foreground mb-6">Your first card is completely free. No credit card needed.</p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-primary"
              >
                Claim Free Card <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
