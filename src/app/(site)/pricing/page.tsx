import { getPricingPlans } from "@/lib/pricing";
import { HeroSection } from "@/components/pages/pricing";
import { PricingPlans } from "@/components/pages/pricing";
import { PricingFAQ } from "@/components/pages/pricing";
import { CTASection } from "@/components/pages/pricing";
import ComingSoonModal from "@/components/common/ComingSoonModal";

export default async function Pricing() {

  // Pre-fetch pricing plans to pass as props
  const pricingPlans = await getPricingPlans();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PricingPlans initialPlans={pricingPlans} />
      {/* <CustomPricing /> */}
      <PricingFAQ />
      <CTASection />
    </div>
  );
}
