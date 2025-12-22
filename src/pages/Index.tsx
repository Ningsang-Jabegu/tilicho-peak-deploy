import HeroSection from "@/components/sections/HeroSection";
import StatementSection from "@/components/sections/StatementSection";
import DetailsSection from "@/components/sections/DetailsSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import FooterSection from "@/components/sections/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatementSection />
      <DetailsSection />
      <PartnershipSection />
      <FooterSection />
    </main>
  );
};

export default Index;
