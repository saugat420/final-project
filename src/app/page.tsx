import {
  BenefitsSection,
  BonusesSection,
  FinalCtaSection,
  Footer,
  GuaranteeSection,
  HeroSection,
  HowItWorksSection,
  ObjectionSection,
  ProblemSection,
  ServicesSection,
  SocialProofSection,
  SolutionSection,
  StickyMobileCta,
  UrgencySection,
  ValueStackSection,
  WhatsAppFloat,
} from "@/components/landing";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main>
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ServicesSection />
        <SocialProofSection />
        <BenefitsSection />
        <ValueStackSection />
        <BonusesSection />
        <ObjectionSection />
        <GuaranteeSection />
        <UrgencySection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyMobileCta />
      <WhatsAppFloat />
    </>
  );
}
