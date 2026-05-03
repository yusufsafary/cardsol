import { useState } from "react";
import { Link } from "wouter";
import { Eye, EyeOff, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const perks = [
  "1 free prediction card on signup",
  "Access to all public contests",
  "Real-time marketplace trading",
  "Cash prizes directly to your account",
];

export default function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "", agree: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-card">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative flex flex-col justify-between p-12 w-full">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-800 text-2xl tracking-tight text-foreground">
              card<span className="text-primary">sol</span>
            </span>
          </Link>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Free card on signup — no credit card needed
            </div>
            <h2 className="font-display text-5xl font-800 text-foreground leading-tight mb-6">
              Join the<br />
              Prediction<br />
              <span className="text-gradient">Revolution.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm mb-10">
              250,000+ players are already winning real cash with their prediction cards. Start for free today.
            </p>

            <ul className="space-y-4">
              {perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-muted-foreground">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Cardsol. All rights reserved.</p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-800 text-xl tracking-tight text-foreground">
                card<span className="text-primary">sol</span>
              </span>
            </Link>
          </div>

          <h1 className="font-display text-3xl font-800 text-foreground mb-1">Create your account</h1>
          <p className="text-muted-foreground text-sm mb-8">Get your free card and start winning today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                placeholder="your_username"
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
                data-testid="input-username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2" htmlFor="reg-email">
                Email address
              </label>
              <input
                id="reg-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
                data-testid="input-reg-email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2" htmlFor="reg-password">
                Password
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Minimum 8 characters"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                  minLength={8}
                  data-testid="input-reg-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle password"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agree"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="mt-1 accent-primary"
                required
                data-testid="checkbox-agree"
              />
              <label htmlFor="agree" className="text-xs text-muted-foreground leading-relaxed">
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                I confirm I am 18 or older.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 glow-primary flex items-center justify-center gap-2"
              data-testid="button-register-submit"
            >
              Create Account & Claim Free Card <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-background text-xs text-muted-foreground">or sign up with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {["Google", "Discord"].map((provider) => (
              <button
                key={provider}
                className="py-3 rounded-xl bg-card border border-card-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200 font-medium"
                data-testid={`button-reg-${provider.toLowerCase()}`}
              >
                {provider}
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-semibold hover:text-primary/80 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
