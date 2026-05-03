import { useState } from "react";
import { Link } from "wouter";
import { Eye, EyeOff, Sparkles, ArrowRight } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
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
            <h2 className="font-display text-5xl font-800 text-foreground leading-tight mb-6">
              Predict.<br />
              Collect.<br />
              <span className="text-gradient">Win.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
              Join 250,000+ players competing for real cash prizes on the world's most exciting prediction card platform.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { value: "$4.2M+", label: "Total paid out to players" },
                { value: "98%", label: "Verified payout rate" },
                { value: "15K+", label: "Active prediction cards" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="font-display font-800 text-2xl text-primary w-24 shrink-0">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Cardsol. All rights reserved.</p>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="mb-2 lg:hidden">
            <Link href="/" className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-800 text-xl tracking-tight text-foreground">
                card<span className="text-primary">sol</span>
              </span>
            </Link>
          </div>

          <h1 className="font-display text-3xl font-800 text-foreground mb-1">Welcome back</h1>
          <p className="text-muted-foreground text-sm mb-8">Sign in to your account to continue</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
                data-testid="input-email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                  className="w-full px-4 py-3 pr-12 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  required
                  data-testid="input-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-xs text-primary hover:text-primary/80 transition-colors">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 glow-primary flex items-center justify-center gap-2"
              data-testid="button-login-submit"
            >
              Sign In <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-background text-xs text-muted-foreground">or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {["Google", "Discord"].map((provider) => (
              <button
                key={provider}
                className="py-3 rounded-xl bg-card border border-card-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200 font-medium"
                data-testid={`button-login-${provider.toLowerCase()}`}
              >
                {provider}
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:text-primary/80 transition-colors">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
