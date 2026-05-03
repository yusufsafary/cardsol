import { useState } from "react";
import { TrendingUp, TrendingDown, Search, Filter, ArrowUpRight, Clock } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const listings = [
  { id: 1, title: "BITCOIN $200K", seller: "CryptoWolf", rarity: "LEGENDARY", price: "$45.00", change: "+12.5%", trending: true, timeLeft: "48d", volume: "142 sales", gradient: "from-yellow-400 to-orange-500", bg: "from-yellow-900/20 to-orange-900/10", category: "Finance" },
  { id: 2, title: "WORLD CUP WINNER", seller: "SportsPro99", rarity: "EPIC", price: "$22.50", change: "+5.2%", trending: true, timeLeft: "180d", volume: "87 sales", gradient: "from-purple-400 to-pink-500", bg: "from-purple-900/20 to-pink-900/10", category: "Sports" },
  { id: 3, title: "FED RATE CUT", seller: "WallStreetKing", rarity: "RARE", price: "$8.20", change: "-2.1%", trending: false, timeLeft: "30d", volume: "210 sales", gradient: "from-blue-400 to-cyan-500", bg: "from-blue-900/20 to-cyan-900/10", category: "Finance" },
  { id: 4, title: "GPT-6 LAUNCH", seller: "TechOracle", rarity: "RARE", price: "$6.80", change: "+8.9%", trending: true, timeLeft: "120d", volume: "63 sales", gradient: "from-cyan-400 to-blue-500", bg: "from-cyan-900/20 to-blue-900/10", category: "Tech" },
  { id: 5, title: "TESLA $1000", seller: "Elon_Fan", rarity: "EPIC", price: "$18.60", change: "-4.3%", trending: false, timeLeft: "90d", volume: "45 sales", gradient: "from-red-400 to-rose-500", bg: "from-red-900/20 to-rose-900/10", category: "Finance" },
  { id: 6, title: "SUPER BOWL LX", seller: "NFLNerd", rarity: "EPIC", price: "$14.20", change: "+3.7%", trending: true, timeLeft: "60d", volume: "98 sales", gradient: "from-green-400 to-emerald-500", bg: "from-green-900/20 to-emerald-900/10", category: "Sports" },
  { id: 7, title: "MARS MISSION", seller: "SpaceGeek", rarity: "LEGENDARY", price: "$38.00", change: "+2.1%", trending: false, timeLeft: "365d", volume: "22 sales", gradient: "from-orange-400 to-amber-500", bg: "from-orange-900/20 to-amber-900/10", category: "Science" },
  { id: 8, title: "GOLD $4000", seller: "GoldBug", rarity: "RARE", price: "$5.50", change: "-1.8%", trending: false, timeLeft: "45d", volume: "175 sales", gradient: "from-yellow-300 to-yellow-500", bg: "from-yellow-900/20 to-yellow-800/10", category: "Finance" },
  { id: 9, title: "AGI ACHIEVED", seller: "AIBeliever", rarity: "LEGENDARY", price: "$52.00", change: "+18.2%", trending: true, timeLeft: "200d", volume: "18 sales", gradient: "from-violet-400 to-purple-500", bg: "from-violet-900/20 to-purple-900/10", category: "Tech" },
];

const rarityColors: Record<string, string> = {
  RARE: "from-blue-400 to-cyan-500",
  EPIC: "from-purple-400 to-pink-500",
  LEGENDARY: "from-yellow-400 to-orange-500",
};

const sorts = ["Newest", "Price: Low–High", "Price: High–Low", "Most Active", "Ending Soon"];
const categories = ["All", "Finance", "Sports", "Tech", "Science", "Politics"];

export default function Marketplace() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("Newest");
  const [category, setCategory] = useState("All");

  const filtered = listings.filter((l) => {
    const matchSearch = l.title.toLowerCase().includes(search.toLowerCase()) || l.seller.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || l.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="font-display text-5xl font-800 text-foreground mb-3">Marketplace</h1>
            <p className="text-muted-foreground text-lg">Buy and sell prediction cards with other players</p>
          </div>

          {/* Market Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {[
              { label: "24h Volume", value: "$84,200" },
              { label: "Active Listings", value: "3,840" },
              { label: "Avg Card Price", value: "$12.40" },
              { label: "Trending Up", value: "62%" },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-card border border-card-border">
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="font-display font-700 text-xl text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search cards or sellers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-card border border-card-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                data-testid="input-search-marketplace"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-card border border-card-border text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              data-testid="select-sort"
            >
              {sorts.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 flex-wrap mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  category === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-card-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Listings Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <div
                key={listing.id}
                className="prediction-card p-5 cursor-pointer group"
                data-testid={`listing-${listing.id}`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${listing.bg} opacity-25`} />
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${rarityColors[listing.rarity]} text-black`}>
                      {listing.rarity}
                    </span>
                    <div className={`flex items-center gap-1 text-xs font-semibold ${listing.trending ? "text-primary" : "text-red-400"}`}>
                      {listing.trending ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {listing.change}
                    </div>
                  </div>

                  <div className={`h-36 rounded-xl mb-4 bg-gradient-to-br ${listing.bg} border border-white/5 flex items-center justify-center relative overflow-hidden`}>
                    <ArrowUpRight className="w-10 h-10 text-white/10 group-hover:text-white/20 transition-colors" />
                    {listing.trending && (
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
                    )}
                  </div>

                  <h3 className="font-display font-bold text-foreground mb-1">{listing.title}</h3>
                  <p className="text-xs text-muted-foreground mb-3">by {listing.seller}</p>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    <span>{listing.timeLeft} left</span>
                    <span className="text-white/10">•</span>
                    <span>{listing.volume}</span>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-white/5">
                    <div>
                      <p className="text-xs text-muted-foreground">Asking Price</p>
                      <p className={`font-display font-bold text-xl bg-gradient-to-r ${listing.gradient} bg-clip-text text-transparent`}>
                        {listing.price}
                      </p>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
