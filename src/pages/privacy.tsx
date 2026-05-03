import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you create an account, purchase cards, or contact support. This includes:

• Account information: name, email address, username, password
• Payment information: billing address, payment method details (processed securely by our payment providers)
• Identity verification: government-issued ID for prize withdrawals over $500
• Communications: messages you send to our support team
• Usage data: how you interact with our platform, cards purchased, predictions made, contest entries

We also collect information automatically when you use Cardsol, including IP addresses, browser type, device information, and cookies.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Verify your identity for prize payouts
• Send promotional communications (with your consent)
• Monitor and analyze usage patterns to improve user experience
• Detect, investigate, and prevent fraudulent transactions and abuse
• Comply with legal obligations`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

• Service providers who assist in our operations (payment processors, cloud hosting, customer support tools)
• Law enforcement or regulatory agencies when required by law
• Parties in connection with a merger, acquisition, or sale of assets

All third-party service providers are contractually bound to protect your information and may only use it as directed by us.`,
  },
  {
    title: "4. Data Security",
    content: `We implement industry-standard security measures including:

• SSL/TLS encryption for all data transmission
• Bcrypt password hashing
• Two-factor authentication options
• Regular security audits and penetration testing
• PCI DSS compliant payment processing

No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.`,
  },
  {
    title: "5. Cookies & Tracking",
    content: `We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings. Types of cookies we use:

• Essential cookies: Required for the platform to function
• Analytics cookies: Help us understand how users interact with our platform
• Preference cookies: Remember your settings and preferences
• Marketing cookies: Used with your consent to show relevant content`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your location, you may have the following rights:

• Access: Request a copy of your personal data
• Rectification: Correct inaccurate data
• Erasure: Request deletion of your account and data
• Portability: Receive your data in a machine-readable format
• Objection: Object to certain processing activities

To exercise these rights, contact us at privacy@cardsol.fun. We will respond within 30 days.`,
  },
  {
    title: "7. Children's Privacy",
    content: `Cardsol is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If we learn that we have collected information from a minor, we will promptly delete it. If you believe we have inadvertently collected information from a minor, please contact us immediately.`,
  },
  {
    title: "8. Changes to This Policy",
    content: `We may update this Privacy Policy periodically. We will notify you of material changes by email or by posting a prominent notice on our platform. Your continued use of Cardsol after the effective date of any changes constitutes your acceptance of the revised policy.`,
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="font-display text-5xl font-800 text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>

          <div className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-10">
              At Cardsol ("we", "us", or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform at cardsol.fun.
            </p>

            <div className="space-y-10">
              {sections.map((section, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-card-border" data-testid={`privacy-section-${i}`}>
                  <h2 className="font-display font-700 text-foreground text-xl mb-4">{section.title}</h2>
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h2 className="font-display font-700 text-foreground text-lg mb-2">Contact Us</h2>
              <p className="text-sm text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@cardsol.fun" className="text-primary hover:underline">
                  privacy@cardsol.fun
                </a>
                {" "}or write to us at Cardsol Inc., 101 Market Street, Suite 800, San Francisco, CA 94105.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
