import { useState } from "react";
import { Trophy, Crown, Medal, Star, TrendingUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const players = [
  { rank: 1, name: "CryptoOracle", avatar: "CO", wins: 47, accuracy: "89%", earnings: "$24,800", streak: 12, badge: "crown" },
  { rank: 2, name: "SportsProphet", avatar: "SP", wins: 42, accuracy: "85%", earnings: "$18,400", streak: 8, badge: "silver" },
  { rank: 3, name: "TechSeer", avatar: "TS", wins: 38, accuracy: "82%", earnings: "$14,200", streak: 5, badge: "bronze" },
  { rank: 4, name: "FinanceGuru", avatar: "FG", wins: 35, accuracy: "81%", earnings: "$11,600", streak: 3, badge: null },
  { rank: 5, name: "MarketMaven", avatar: "MM", wins: 33, accuracy: "79%", earnings: "$9,400", streak: 7, badge: null },
  { rank: 6, name: "PredictBot", avatar: "PB", wins: 30, accuracy: "78%", earnings: "$7,800", streak: 4, badge: null },
  { rank: 7, name: "AlphaTrader", avatar: "AT", wins: 28, accuracy: "76%", earnings: "$6,200", streak: 2, badge: null },
  { rank: 8, name: "QuantumCall", avatar: "QC", wins: 25, accuracy: "74%", earnings: "$5,100", streak: 6, badge: null },
  { rank: 9, name: "OddsBreaker", avatar: "OB", wins: 22, accuracy: "73%", earnings: "$4,200", streak: 1, badge: null },
  { rank: 10, name: "DataDriven", avatar: "DD", wins: 20, accuracy: "71%", earnings: "$3,600", streak: 3, badge: null },
];

const periods = ["All Time", "This Season", "This Month", "This Week"];
const categories = ["Overall", "Finance", "Sports", "Tech", "Science"];

const rankStyles = [
  { bg: "bg-yellow-500/20", border: "border-yellow-500/40", text: "text-yellow-400", icon: Crown },
  { bg: "bg-slate-400/20", border: "border-slate-400/40", text: "text-slate-300", icon: Medal },
  { bg: "bg-amber-600/20", border: "border-amber-600/40", text: "text-amber-500", icon: Medal },
];

export default function Leaderboard() {
  const [period, setPeriod] = useState("All Time");
  const [category, setCategory] = useState("Overall");

  const top3 = players.slice(0, 3);
  const rest = players.slice(3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl font-800 text-foreground mb-3">Leaderboard</h1>
            <p className="text-muted-foreground text-lg">The world's best prediction card players</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <div className="flex gap-2 flex-wrap">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    period === p ? "bg-primary text-primary-foreground" : "bg-card border border-card-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap sm:ml-auto">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    category === c ? "bg-accent/20 text-accent-foreground border border-accent/30" : "bg-card border border-card-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[top3[1], top3[0], top3[2]].map((p, podiumIndex) => {
              const actualRank = podiumIndex === 0 ? 2 : podiumIndex === 1 ? 1 : 3;
              const style = rankStyles[actualRank - 1];
              const heights = ["h-32", "h-40", "h-28"];
              return (
                <div key={p.rank} className={`flex flex-col items-center ${podiumIndex === 1 ? "order-first sm:order-none" : ""}`}>
                  <div className={`w-16 h-16 rounded-2xl ${style.bg} border ${style.border} flex items-center justify-center font-display font-bold text-foreground text-lg mb-3`}>
                    {p.avatar}
                  </div>
                  <p className="font-semibold text-foreground text-sm mb-1">{p.name}</p>
                  <p className={`text-xs font-bold ${style.text} mb-2`}>{p.earnings}</p>
                  <div className={`w-full ${heights[podiumIndex]} rounded-t-xl ${style.bg} border ${style.border} flex items-start justify-center pt-3`}>
                    <span className={`font-display font-800 text-3xl ${style.text}`}>#{actualRank}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full Leaderboard */}
          <div className="rounded-2xl bg-card border border-card-border overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 grid grid-cols-12 gap-4 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
              <div className="col-span-1">Rank</div>
              <div className="col-span-4">Player</div>
              <div className="col-span-2 text-center">Wins</div>
              <div className="col-span-2 text-center">Accuracy</div>
              <div className="col-span-2 text-center">Streak</div>
              <div className="col-span-1 text-right">Earned</div>
            </div>
            {players.map((player, i) => {
              const isTop3 = player.rank <= 3;
              const style = isTop3 ? rankStyles[player.rank - 1] : null;
              return (
                <div
                  key={player.rank}
                  className={`px-6 py-4 grid grid-cols-12 gap-4 items-center border-b border-white/5 last:border-0 hover:bg-white/2 transition-colors ${isTop3 ? style?.bg : ""}`}
                  data-testid={`leaderboard-row-${player.rank}`}
                >
                  <div className="col-span-1">
                    {isTop3 ? (
                      <div className={`w-8 h-8 rounded-lg ${style?.bg} flex items-center justify-center`}>
                        {player.rank === 1 ? <Crown className={`w-4 h-4 ${style?.text}`} /> : <Medal className={`w-4 h-4 ${style?.text}`} />}
                      </div>
                    ) : (
                      <span className="text-sm font-semibold text-muted-foreground">#{player.rank}</span>
                    )}
                  </div>
                  <div className="col-span-4 flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl ${isTop3 ? style?.bg : "bg-white/5"} border ${isTop3 ? style?.border : "border-white/5"} flex items-center justify-center text-xs font-bold text-foreground`}>
                      {player.avatar}
                    </div>
                    <span className="font-medium text-foreground text-sm">{player.name}</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="text-sm font-semibold text-foreground">{player.wins}</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="text-sm font-semibold text-primary">{player.accuracy}</span>
                  </div>
                  <div className="col-span-2 text-center flex items-center justify-center gap-1">
                    {player.streak > 5 ? (
                      <TrendingUp className="w-3.5 h-3.5 text-yellow-400" />
                    ) : (
                      <Star className="w-3.5 h-3.5 text-muted-foreground" />
                    )}
                    <span className={`text-sm font-semibold ${player.streak > 5 ? "text-yellow-400" : "text-foreground"}`}>
                      {player.streak}
                    </span>
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="text-sm font-bold text-foreground">{player.earnings}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <button className="px-6 py-3 rounded-xl bg-card border border-card-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200">
              Load More Players
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
