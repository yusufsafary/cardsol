import { useState } from "react";
import { Link } from "wouter";
import { Package, Zap, Star, Crown, ChevronRight, Filter, Search } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const packs = [
  {
    id: 1,
    name: "Starter Pack",
    description: "Perfect for beginners. Contains 3 prediction cards covering major categories.",
    price: "$4.99",
    originalPrice: null,
    cards: 3,
    rarity: "Common–Rare",
    icon: Package,
    gradient: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    glowColor: "shadow-blue-500/10",
    badge: null,
    categories: ["Sports", "Finance", "Tech"],
  },
  {
    id: 2,
    name: "Pro Pack",
    description: "5 cards with guaranteed at least one Epic rarity card. Best value.",
    price: "$12.99",
    originalPrice: "$16.99",
    cards: 5,
    rarity: "Rare–Epic",
    icon: Zap,
    gradient: "from-primary/20 to-cyan-500/10",
    border: "border-primary/30",
    glowColor: "shadow-primary/15",
    badge: "BEST VALUE",
    badgeColor: "bg-primary text-primary-foreground",
    categories: ["All categories"],
  },
  {
    id: 3,
    name: "Elite Pack",
    description: "8 cards with guaranteed Legendary. For serious collectors and competitors.",
    price: "$24.99",
    originalPrice: null,
    cards: 8,
    rarity: "Epic–Legendary",
    icon: Star,
    gradient: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/30",
    glowColor: "shadow-purple-500/15",
    badge: "POPULAR",
    badgeColor: "bg-purple-500 text-white",
    categories: ["All categories"],
  },
  {
    id: 4,
    name: "Champion Bundle",
    description: "20 cards across all rarities. Exclusive cards not available in other packs.",
    price: "$49.99",
    originalPrice: "$79.99",
    cards: 20,
    rarity: "All Rarities",
    icon: Crown,
    gradient: "from-yellow-500/20 to-orange-500/10",
    border: "border-yellow-500/30",
    glowColor: "shadow-yellow-500/15",
    badge: "BEST DEAL",
    badgeColor: "bg-yellow-500 text-black",
    categories: ["Exclusive access"],
  },
];

const individualCards = [
  { id: 1, title: "FED CUTS RATES", category: "Finance", rarity: "RARE", price: "$3.20", deadline: "Dec 2025", gradient: "from-blue-500 to-cyan-500", bg: "from-blue-900/20 to-cyan-900/10" },
  { id: 2, title: "MESSI RETIRES", category: "Sports", rarity: "EPIC", price: "$8.50", deadline: "Jun 2026", gradient: "from-purple-500 to-pink-500", bg: "from-purple-900/20 to-pink-900/10" },
  { id: 3, title: "MARS MISSION", category: "Science", rarity: "LEGENDARY", price: "$22.00", deadline: "Dec 2026", gradient: "from-yellow-500 to-orange-500", bg: "from-yellow-900/20 to-orange-900/10" },
  { id: 4, title: "GPT-6 LAUNCH", category: "Tech", rarity: "RARE", price: "$4.80", deadline: "Jun 2026", gradient: "from-cyan-500 to-blue-500", bg: "from-cyan-900/20 to-blue-900/10" },
  { id: 5, title: "GOLD AT $4K", category: "Finance", rarity: "RARE", price: "$3.60", deadline: "Dec 2025", gradient: "from-yellow-400 to-amber-500", bg: "from-yellow-900/20 to-amber-900/10" },
  { id: 6, title: "SUPER BOWL LX", category: "Sports", rarity: "EPIC", price: "$7.20", deadline: "Feb 2026", gradient: "from-green-500 to-emerald-500", bg: "from-green-900/20 to-emerald-900/10" },
];

const rarityColors: Record<string, string> = {
  COMMON: "from-gray-400 to-slate-400",
  RARE: "from-blue-400 to-cyan-500",
  EPIC: "from-purple-400 to-pink-500",
  LEGENDARY: "from-yellow-400 to-orange-500",
};

export default function Store() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Sports", "Finance", "Tech", "Science", "Politics"];

  const filteredCards = individualCards.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = selectedCategory === "All" || c.category === selectedCategory;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-display text-5xl font-800 text-foreground mb-3">Store</h1>
            <p className="text-muted-foreground text-lg">Buy packs or individual cards to build your collection</p>
          </div>

          {/* Packs Section */}
          <div className="mb-20">
            <h2 className="font-display text-2xl font-700 text-foreground mb-8">Mystery Packs</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {packs.map((pack) => (
                <div
                  key={pack.id}
                  className={`relative p-6 rounded-2xl bg-card border ${pack.border} hover:shadow-xl ${pack.glowColor} transition-all duration-300 cursor-pointer group card-glow`}
                  data-testid={`pack-${pack.id}`}
                >
                  {pack.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${pack.badgeColor}`}>
                      {pack.badge}
                    </div>
                  )}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${pack.gradient} opacity-40`} />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <pack.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="font-display font-700 text-foreground text-lg mb-2">{pack.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{pack.description}</p>
                    <div className="flex gap-2 flex-wrap mb-5">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground">{pack.cards} cards</span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-muted-foreground">{pack.rarity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-display font-800 text-2xl text-foreground">{pack.price}</span>
                        {pack.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through ml-2">{pack.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    <button
                      className="w-full mt-4 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200"
                      data-testid={`button-buy-pack-${pack.id}`}
                    >
                      Buy Pack
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Individual Cards Section */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <h2 className="font-display text-2xl font-700 text-foreground">Individual Cards</h2>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search cards..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-card border border-card-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
                    data-testid="input-search-cards"
                  />
                </div>
                <button className="p-2.5 rounded-xl bg-card border border-card-border text-muted-foreground hover:text-foreground transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap mb-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-card-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                  }`}
                  data-testid={`filter-category-${cat}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCards.map((card) => (
                <div
                  key={card.id}
                  className="prediction-card p-5 cursor-pointer group"
                  data-testid={`card-store-${card.id}`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.bg} opacity-30`} />
                  <div className="relative">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${rarityColors[card.rarity]} text-black`}>
                        {card.rarity}
                      </span>
                      <span className="text-xs text-muted-foreground px-2.5 py-1 rounded-full bg-white/5">{card.category}</span>
                    </div>
                    <div className={`h-36 rounded-xl mb-4 bg-gradient-to-br ${card.bg} border border-white/5 flex items-center justify-center`}>
                      <Star className="w-10 h-10 text-white/10" />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-3">{card.title}</h3>
                    <div className="flex justify-between items-center pt-3 border-t border-white/5">
                      <div>
                        <p className="text-xs text-muted-foreground">Market Price</p>
                        <p className={`font-display font-bold text-lg bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>{card.price}</p>
                      </div>
                      <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
                        Buy Now
                      </button>
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
