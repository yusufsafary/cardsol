import { useState } from "react";
import { Mail, MessageSquare, Zap, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const contactOptions = [
  { icon: MessageSquare, title: "Live Chat", desc: "Available Mon–Fri, 9am–6pm PST", action: "Start Chat", color: "text-primary", bg: "bg-primary/10" },
  { icon: Mail, title: "Email Support", desc: "support@cardsol.fun", action: "Send Email", color: "text-accent", bg: "bg-accent/10" },
  { icon: Zap, title: "Discord Community", desc: "Join 50K+ players helping each other", action: "Join Discord", color: "text-yellow-400", bg: "bg-yellow-400/10" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl font-800 text-foreground mb-4">Get in Touch</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              We're here to help. Reach out through any of our support channels or send us a message directly.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactOptions.map((opt, i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-card-border text-center card-glow">
                <div className={`w-14 h-14 rounded-2xl ${opt.bg} flex items-center justify-center mx-auto mb-4`}>
                  <opt.icon className={`w-7 h-7 ${opt.color}`} />
                </div>
                <h3 className="font-display font-700 text-foreground mb-1">{opt.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{opt.desc}</p>
                <button className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-foreground hover:bg-white/10 transition-all">
                  {opt.action}
                </button>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-800 text-foreground mb-6">Send a Message</h2>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-card border border-primary/30 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display font-700 text-foreground text-xl mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours at the email you provided.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-5 text-primary text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      data-testid="select-contact-subject"
                    >
                      <option value="">Select a topic</option>
                      <option value="account">Account & Login</option>
                      <option value="payment">Payments & Withdrawals</option>
                      <option value="cards">Cards & Packs</option>
                      <option value="contest">Contests</option>
                      <option value="bug">Report a Bug</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your issue or question in detail..."
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-card border border-card-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      data-testid="textarea-contact-message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all glow-primary"
                    data-testid="button-contact-submit"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info Panel */}
            <div className="space-y-6">
              <h2 className="font-display text-2xl font-800 text-foreground mb-6">Support Info</h2>

              <div className="p-6 rounded-2xl bg-card border border-card-border">
                <h3 className="font-semibold text-foreground mb-4">Response Times</h3>
                <div className="space-y-3">
                  {[
                    { type: "Live Chat", time: "Under 5 minutes", available: "Mon–Fri 9am–6pm PST" },
                    { type: "Email", time: "Within 24 hours", available: "7 days a week" },
                    { type: "Discord", time: "Under 1 hour (community)", available: "24/7" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-start py-2 border-b border-white/5 last:border-0">
                      <div>
                        <p className="text-sm font-medium text-foreground">{item.type}</p>
                        <p className="text-xs text-muted-foreground">{item.available}</p>
                      </div>
                      <span className="text-xs text-primary font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-card-border">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Our Office
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cardsol Inc.<br />
                  101 Market Street, Suite 800<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Looking for the FAQ?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Most answers are already there. Check before reaching out!
                </p>
                <a href="/faq" className="text-primary text-sm font-semibold hover:underline">
                  Browse FAQ &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
