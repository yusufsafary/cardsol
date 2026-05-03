import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using Cardsol ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Platform. These Terms constitute a legally binding agreement between you and Cardsol Inc.`,
  },
  {
    title: "2. Eligibility",
    content: `To use Cardsol, you must:

• Be at least 18 years of age
• Have the legal capacity to enter into contracts in your jurisdiction
• Not be located in a jurisdiction where participation in skill-based prediction contests is prohibited
• Not be a current employee, officer, or director of Cardsol Inc. or their immediate family members

By registering, you represent and warrant that you meet all eligibility requirements.`,
  },
  {
    title: "3. Account Registration",
    content: `You are responsible for maintaining the confidentiality of your account credentials. You agree to:

• Provide accurate and complete registration information
• Maintain and update your information to keep it accurate
• Notify us immediately of any unauthorized use of your account
• Be responsible for all activities that occur under your account

One account per person. Creating multiple accounts to circumvent restrictions or gain unfair advantages is prohibited and will result in permanent bans.`,
  },
  {
    title: "4. Prediction Cards & Prizes",
    content: `Prediction cards represent specific real-world event outcomes. Prize payouts are subject to:

• Successful verification of the predicted outcome against our data sources
• Your account being in good standing at the time of verification
• Successful identity verification for withdrawals over $500

Prize pool amounts are determined at card issuance and may not change. Cards without a verified outcome at deadline are resolved as "No Prediction" and refunded at face value.`,
  },
  {
    title: "5. Marketplace Rules",
    content: `The Cardsol Marketplace allows peer-to-peer card trading subject to:

• A 5% platform fee on all completed sales
• Listings remaining active for a maximum of 30 days
• No sale of cards after their prediction deadline has passed
• Prohibition of price manipulation or collusion between accounts
• All prices denominated in USD

We reserve the right to remove listings that violate these rules or otherwise abuse the marketplace.`,
  },
  {
    title: "6. Prohibited Conduct",
    content: `You agree not to:

• Create multiple accounts or share accounts
• Use bots, scripts, or automated tools to interact with the Platform
• Attempt to manipulate card prices, contest outcomes, or verification systems
• Engage in money laundering or fraudulent activity
• Circumvent geographic restrictions
• Harass, threaten, or abuse other users
• Reverse engineer or copy any part of the Platform
• Use the Platform for any illegal purpose`,
  },
  {
    title: "7. Intellectual Property",
    content: `All content on Cardsol, including card designs, artwork, software, and branding, is owned by Cardsol Inc. and protected by copyright and intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to use the Platform for personal, non-commercial purposes. You may not copy, modify, distribute, or create derivative works without our express written permission.`,
  },
  {
    title: "8. Disclaimers & Limitation of Liability",
    content: `THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, CARDSOL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE PLATFORM.

Our total liability to you for any claims arising from these Terms shall not exceed the greater of $100 or the amount you paid to us in the 12 months preceding the claim.`,
  },
  {
    title: "9. Governing Law & Disputes",
    content: `These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration under the American Arbitration Association rules, except for claims for injunctive relief. By using the Platform, you waive your right to a jury trial and the right to participate in class action proceedings.`,
  },
  {
    title: "10. Changes to Terms",
    content: `We reserve the right to modify these Terms at any time. We will provide notice of material changes via email or in-platform notification. Continued use of the Platform after the effective date of changes constitutes acceptance of the new Terms.`,
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="font-display text-5xl font-800 text-foreground mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 1, 2025</p>
          </div>

          <div>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Please read these Terms of Service carefully before using the Cardsol platform. These Terms govern your access to and use of our prediction card platform, marketplace, and contest services.
            </p>

            <div className="space-y-8">
              {sections.map((section, i) => (
                <div key={i} className="p-6 rounded-2xl bg-card border border-card-border" data-testid={`terms-section-${i}`}>
                  <h2 className="font-display font-700 text-foreground text-xl mb-4">{section.title}</h2>
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <h2 className="font-display font-700 text-foreground text-lg mb-2">Questions?</h2>
              <p className="text-sm text-muted-foreground">
                For questions about these Terms, contact us at{" "}
                <a href="mailto:legal@cardsol.fun" className="text-primary hover:underline">
                  legal@cardsol.fun
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
