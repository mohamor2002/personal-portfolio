import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { ProfessionalSummary } from "@/components/sections/professional-summary"
import { EducationSection } from "@/components/sections/education-section"
import { TechnicalSkillsSection } from "@/components/sections/technical-skills-section"
import { ProfessionalExperienceSection } from "@/components/sections/professional-experience-section"
import { KeyProjectsSection } from "@/components/sections/key-projects-section"
import { AchievementsSection } from "@/components/sections/achievements-section"
import { LeadershipActivitiesSection } from "@/components/sections/leadership-activities-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <ProfessionalSummary />
        <EducationSection />
        <TechnicalSkillsSection />
        <ProfessionalExperienceSection />
        <KeyProjectsSection />
        <AchievementsSection />
        <LeadershipActivitiesSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}
