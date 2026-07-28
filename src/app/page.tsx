import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import EducationSection from "@/components/sections/EducationSection";
import CertificatesSection from "@/components/sections/CertificatesSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <FeaturedProjects />
      <EducationSection />
      <CertificatesSection />
    </>
  );
}
