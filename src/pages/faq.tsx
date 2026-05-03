import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const faqData = [
  {
    category: "Getting Started",
    items: [
      { q: "How do I get started on Cardsol?", a: "Sign up for a free account and claim your free prediction card. No credit card required. You can start trading and entering contests immediately." },
      { q: "What is a prediction card?", a: "A prediction card represents a specific real-world event outcome (e.g., 'Bitcoin reaches $200,000 by Dec 31, 2025'). If the prediction is correct at the deadline, the card pays out its prize pool." },
      { q: "How many free cards do I get?", a: "Every new user receives 1 free prediction card on signup. Additional cards can be purchased through packs or the marketplace." },
      { q: "What age do I need to be to play?", a: "You must be 18 or older to participate in cash prize contests. Free-to-play features may be available to users 16+." },
    ],
  },
  {
    category: "Cards & Packs",
    items: [
      { q: "What are the card rarities?", a: "Cards come in 4 rarities: Common (smallest prizes), Rare, Epic, and Legendary (largest prizes). Higher rarity cards have larger prize pools and are harder to find." },
      { q: "What are the pack odds?", a: "Starter Pack — Common: 60%, Rare: 35%, Epic: 5%. Pro Pack — Rare: 55%, Epic: 40%, Legendary: 5%. Elite Pack — Epic: 60%, Legendary: 40%." },
      { q: "Can I trade cards I've received in packs?", a: "Yes! Once you open a pack and receive cards, they're yours to keep or trade on the marketplace. You can set any price you want." },
      { q: "What happens to cards after a prediction resolves?", a: "After the deadline, cards are verified and prizes paid out. The card is then marked as 'Resolved' and stays in your collection as a historical item." },
    ],
  },
  {
    category: "Marketplace",
    items: [
      { q: "How does the marketplace work?", a: "The marketplace lets players buy and sell cards peer-to-peer. Set your asking price, and buyers can purchase directly. Cardsol takes a 5% fee on successful sales." },
      { q: "How is card value determined?", a: "Card prices fluctuate based on supply and demand, time remaining, and perceived probability of the prediction coming true. More likely predictions near their deadline tend to be more valuable." },
      { q: "Is there a minimum/maximum price I can set?", a: "Minimum listing price is $0.50. There is no maximum. Legendary cards have sold for over $1,000 on our marketplace." },
      { q: "How long do marketplace listings last?", a: "Listings stay active for 30 days by default. You can renew or cancel anytime. Listings automatically expire when a prediction's deadline passes." },
    ],
  },
  {
    category: "Prizes & Payouts",
    items: [
      { q: "How do prize payouts work?", a: "When a prediction deadline passes, our verification system checks the outcome against trusted data sources. Winning cards are automatically paid out within 24 hours." },
      { q: "What payment methods are supported for withdrawals?", a: "We support bank transfer (ACH/SEPA), PayPal, and major cryptocurrencies (BTC, ETH, USDC). Minimum withdrawal is $10." },
      { q: "How long do withdrawals take?", a: "PayPal and crypto: instant to 1 hour. Bank transfers: 1-3 business days. First withdrawal requires identity verification." },
      { q: "Are there taxes on winnings?", a: "Winnings may be taxable in your jurisdiction. Cardsol provides annual winning statements. Consult a tax professional for advice specific to your situation." },
    ],
  },
  {
    category: "Contests",
    items: [
      { q: "How do I enter a contest?", a: "From the Contests page, select a contest and click 'Enter'. You'll need cards that meet the contest's minimum rarity requirement. Each card can only be entered in one contest at a time." },
      { q: "What happens if a contest is cancelled?", a: "If a contest is cancelled, all entry fees are refunded and cards are returned to your collection." },
      { q: "How is contest prize distribution determined?", a: "Contest prize distributions vary. Some pay top 10%, others pay top 3. Prize structure is always clearly displayed before you enter." },
    ],
  },
];

export default function FAQ() {
  const [search, setSearch] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredData = faqData
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          !search ||
          item.q.toLowerCase().includes(search.toLowerCase()) ||
          item.a.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl font-800 text-foreground mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-lg mb-8">Everything you need to know about Cardsol</p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-card-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all text-sm"
                data-testid="input-faq-search"
              />
            </div>
          </div>

          {filteredData.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No results for "{search}". Try a different search.</p>
              <Link href="/contact" className="text-primary text-sm mt-2 inline-block hover:underline">
                Contact support instead
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredData.map((category) => (
                <div key={category.category}>
                  <h2 className="font-display font-700 text-foreground text-xl mb-4 border-b border-white/5 pb-3">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.items.map((item, i) => {
                      const key = `${category.category}-${i}`;
                      const isOpen = openItems[key];
                      return (
                        <div key={i} className="rounded-2xl bg-card border border-card-border overflow-hidden" data-testid={`faq-${key}`}>
                          <button
                            onClick={() => toggle(key)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
                          >
                            <span className="font-medium text-foreground pr-4">{item.q}</span>
                            <ChevronDown className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                          </button>
                          {isOpen && (
                            <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 text-center p-8 rounded-2xl bg-card border border-card-border">
            <h2 className="font-display font-700 text-foreground mb-2">Still have questions?</h2>
            <p className="text-sm text-muted-foreground mb-5">Our support team responds within 24 hours</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
