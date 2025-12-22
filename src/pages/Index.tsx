import HeroSection from "@/components/sections/HeroSection";
import StatementSection from "@/components/sections/StatementSection";
import DetailsSection from "@/components/sections/DetailsSection";
import PartnershipSection from "@/components/sections/PartnershipSection";
import FooterSection from "@/components/sections/FooterSection";
import MountainBackground from "@/components/MountainBackground";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      <MountainBackground />
      <div className="relative z-10">
        <HeroSection />
        <StatementSection />
        <DetailsSection />
        <PartnershipSection />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
