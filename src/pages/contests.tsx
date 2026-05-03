import { Link } from "wouter";
import { Trophy, Clock, Users, Zap, ArrowRight, Lock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contests = [
  {
    id: 1,
    name: "Grand Slam Finance",
    description: "Pick the top 3 financial events of Q4 2025. Highest accuracy wins the jackpot.",
    prize: "$15,000",
    entries: 2840,
    maxEntries: 5000,
    deadline: "Dec 31, 2025",
    status: "LIVE",
    statusColor: "bg-primary text-primary-foreground",
    minRarity: "RARE",
    gradient: "from-primary/20 to-cyan-500/10",
    border: "border-primary/30",
  },
  {
    id: 2,
    name: "Sports Oracle Cup",
    description: "Predict outcomes for 10 major sports events. Full card portfolio required.",
    prize: "$8,500",
    entries: 1240,
    maxEntries: 2000,
    deadline: "Jun 30, 2026",
    status: "LIVE",
    statusColor: "bg-primary text-primary-foreground",
    minRarity: "EPIC",
    gradient: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/30",
  },
  {
    id: 3,
    name: "Tech Visionary",
    description: "Who called the biggest tech breakthroughs? Win with verified prediction cards.",
    prize: "$5,000",
    entries: 870,
    maxEntries: 1500,
    deadline: "Mar 31, 2026",
    status: "LIVE",
    statusColor: "bg-primary text-primary-foreground",
    minRarity: "RARE",
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
  },
  {
    id: 4,
    name: "Legendary Only",
    description: "Exclusive contest for Legendary card holders. Winner takes all prize pool.",
    prize: "$25,000",
    entries: 180,
    maxEntries: 500,
    deadline: "Dec 31, 2025",
    status: "EXCLUSIVE",
    statusColor: "bg-yellow-500 text-black",
    minRarity: "LEGENDARY",
    gradient: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/30",
    locked: true,
  },
  {
    id: 5,
    name: "Weekly Flash",
    description: "Fast-paced 7-day contest. Quick predictions, quick prizes.",
    prize: "$500",
    entries: 420,
    maxEntries: 1000,
    deadline: "May 10, 2026",
    status: "ENDING SOON",
    statusColor: "bg-red-500 text-white",
    minRarity: "COMMON",
    gradient: "from-red-500/20 to-rose-500/10",
    border: "border-red-500/30",
  },
  {
    id: 6,
    name: "Climate Predictor",
    description: "Predict major climate milestones and environmental events. Long-term horizon.",
    prize: "$3,200",
    entries: 340,
    maxEntries: 2000,
    deadline: "Dec 31, 2026",
    status: "UPCOMING",
    statusColor: "bg-muted text-muted-foreground",
    minRarity: "RARE",
    gradient: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/30",
  },
];

const recentWinners = [
  { name: "Alex M.", prize: "$12,400", contest: "Q3 Finance Cup", avatar: "AM" },
  { name: "Priya S.", prize: "$5,800", contest: "Sports Oracle S2", avatar: "PS" },
  { name: "Ryan T.", prize: "$3,200", contest: "Tech Visionary Q2", avatar: "RT" },
];

export default function Contests() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="font-display text-5xl font-800 text-foreground mb-3">Contests</h1>
            <p className="text-muted-foreground text-lg">Enter your cards in competitive contests and win real cash prizes</p>
          </div>

          {/* Featured Contest Banner */}
          <div className="relative mb-12 p-8 rounded-3xl bg-card border border-primary/30 overflow-hidden">
            <div className="absolute inset-0 hero-glow opacity-40" />
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-4">
                  <Zap className="w-3 h-3" />
                  FEATURED CONTEST
                </div>
                <h2 className="font-display text-3xl font-800 text-foreground mb-2">Season 3 Grand Prix</h2>
                <p className="text-muted-foreground mb-4 max-w-xl">
                  The biggest contest of the year. 10,000 players, $50,000 prize pool. The ultimate test of your prediction skills across all categories.
                </p>
                <div className="flex items-center gap-6 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Prize Pool</p>
                    <p className="font-display font-800 text-2xl text-primary">$50,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Players</p>
                    <p className="font-display font-700 text-xl text-foreground">8,240 / 10,000</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Ends</p>
                    <p className="font-display font-700 text-xl text-foreground">Dec 31, 2025</p>
                  </div>
                </div>
              </div>
              <Link
                href="/register"
                className="shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow-primary"
              >
                Enter Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* All Contests */}
          <div className="mb-16">
            <h2 className="font-display text-2xl font-700 text-foreground mb-6">All Contests</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contests.map((contest) => (
                <div
                  key={contest.id}
                  className={`relative p-6 rounded-2xl bg-card border ${contest.border} transition-all duration-300 card-glow ${contest.locked ? "opacity-75" : "cursor-pointer"}`}
                  data-testid={`contest-${contest.id}`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contest.gradient} opacity-30`} />
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full ${contest.statusColor}`}>
                        {contest.status}
                      </span>
                      {contest.locked && <Lock className="w-4 h-4 text-yellow-500" />}
                    </div>

                    <h3 className="font-display font-700 text-foreground text-lg mb-2">{contest.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-5">{contest.description}</p>

                    <div className="space-y-3 mb-5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Entries</span>
                        <span className="text-foreground font-medium">{contest.entries.toLocaleString()} / {contest.maxEntries.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/5">
                        <div
                          className="h-full rounded-full bg-primary"
                          style={{ width: `${Math.min((contest.entries / contest.maxEntries) * 100, 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Deadline</span>
                        <span className="text-foreground font-medium">{contest.deadline}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Min. Rarity</span>
                        <span className="text-foreground font-medium">{contest.minRarity}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <div>
                        <p className="text-xs text-muted-foreground">Prize Pool</p>
                        <p className="font-display font-800 text-2xl text-primary">{contest.prize}</p>
                      </div>
                      <button
                        disabled={contest.locked}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          contest.locked
                            ? "bg-muted text-muted-foreground cursor-not-allowed"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                        data-testid={`button-enter-contest-${contest.id}`}
                      >
                        {contest.locked ? "Locked" : "Enter"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Winners */}
          <div>
            <h2 className="font-display text-2xl font-700 text-foreground mb-6">Recent Winners</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {recentWinners.map((w, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-card-border">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
                    {w.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{w.name}</p>
                    <p className="text-xs text-muted-foreground">{w.contest}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="font-display font-800 text-primary">{w.prize}</p>
                    <div className="flex items-center justify-end gap-1">
                      <Trophy className="w-3 h-3 text-yellow-400" />
                      <p className="text-xs text-yellow-400">Winner</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
