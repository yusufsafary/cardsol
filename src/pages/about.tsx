import { Link } from "wouter";
import { ArrowRight, Target, Heart, Globe, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", avatar: "AR", bio: "Former Polymarket engineer with a decade in prediction markets." },
  { name: "Mia Chen", role: "CTO & Co-Founder", avatar: "MC", bio: "Previously built trading infrastructure at Coinbase." },
  { name: "Jordan Kim", role: "Head of Product", avatar: "JK", bio: "Designed card mechanics for three successful gaming startups." },
  { name: "Sam Okafor", role: "Head of Operations", avatar: "SO", bio: "Licensed gaming compliance officer with global experience." },
];

const values = [
  { icon: Target, title: "Radical Transparency", desc: "Every outcome is verifiable. Every fee is disclosed. No surprises.", color: "text-primary", bg: "bg-primary/10" },
  { icon: Heart, title: "Player First", desc: "Our decisions are guided by what's best for the players, always.", color: "text-red-400", bg: "bg-red-400/10" },
  { icon: Globe, title: "Global & Inclusive", desc: "Prediction skill is universal. We're building for everyone, everywhere.", color: "text-blue-400", bg: "bg-blue-400/10" },
  { icon: Zap, title: "Move Fast", desc: "We ship weekly. The best prediction platform is always improving.", color: "text-yellow-400", bg: "bg-yellow-400/10" },
];

const milestones = [
  { year: "2022", event: "Cardsol founded in San Francisco with seed funding" },
  { year: "2023", event: "Launched beta with 10,000 early access players" },
  { year: "2024", event: "Hit $1M in prize payouts. Series A raised." },
  { year: "2025", event: "250,000+ active players. Season 3 launch." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="font-display text-5xl lg:text-6xl font-800 text-foreground mb-6">
              We Believe the Future<br />
              is <span className="text-gradient">Worth Predicting</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
              Cardsol started from a simple idea: knowledge about the world should be rewarded. We built the platform we always wanted to exist.
            </p>
          </div>

          {/* Mission */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20 items-center">
            <div>
              <h2 className="font-display text-3xl font-800 text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We're on a mission to create the world's most engaging prediction platform — one where knowledge, strategy, and a little bit of luck combine into something genuinely thrilling.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traditional prediction markets are boring. We believe the experience of making a prediction should be as exciting as watching it play out. That's why we built Cardsol — where every card tells a story, and every correct call is a moment worth celebrating.
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
              >
                Join Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2022", label: "Founded" },
                { value: "250K+", label: "Players" },
                { value: "$4.2M+", label: "Paid Out" },
                { value: "15K+", label: "Cards" },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-card-border text-center">
                  <div className="font-display font-800 text-3xl text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-800 text-foreground text-center mb-10">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={i} className="flex gap-5 p-6 rounded-2xl bg-card border border-card-border card-glow">
                  <div className={`w-12 h-12 rounded-xl ${v.bg} flex items-center justify-center shrink-0`}>
                    <v.icon className={`w-6 h-6 ${v.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-foreground mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-800 text-foreground text-center mb-10">Our Story</h2>
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary to-transparent" />
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-primary border-2 border-background" />
                  <div className="font-display font-700 text-primary text-sm mb-1">{m.year}</div>
                  <div className="text-foreground">{m.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h2 className="font-display text-3xl font-800 text-foreground text-center mb-10">The Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-card-border text-center card-glow">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center font-display font-bold text-xl text-primary mx-auto mb-4">
                    {member.avatar}
                  </div>
                  <h3 className="font-display font-700 text-foreground mb-0.5">{member.name}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Careers CTA */}
          <div className="text-center p-10 rounded-3xl bg-card border border-card-border">
            <h2 className="font-display text-2xl font-800 text-foreground mb-3">Join Our Team</h2>
            <p className="text-muted-foreground mb-6">We're hiring across engineering, design, and operations. Come build the future of prediction gaming.</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground font-semibold text-sm hover:bg-white/10 transition-all"
            >
              View Open Roles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
