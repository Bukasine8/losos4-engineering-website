import BlueprintBackground from "@/components/backgrounds/BlueprintBackground"
import CenteredLogo from "@/components/CenteredLogo"
import HeroSection from "@/components/sections/HeroSection"
import MEPExpertiseSection from "@/components/sections/MEPExpertiseSection"
import ServiceSelectorSection from "@/components/sections/ServiceSelectorSection"
import ProjectTimelineSection from "@/components/sections/ProjectTimelineSection"
import TechnicalDrawingsSection from "@/components/sections/TechnicalDrawingsSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import DashboardPreviewSection from "@/components/sections/DashboardPreviewSection"
import SectionDivider from "@/components/ui/SectionDivider"

export default function Home() {
  return (
    <main className="relative bg-light-neutral min-h-screen">
      {/* Blueprint SVG Background */}
      <BlueprintBackground />
      
      {/* Centered Logo */}
      <CenteredLogo />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* MEP Expertise Showcase */}
      <section className="relative bg-gradient-to-b from-light-neutral to-dark-neutral/5 py-24">
        <MEPExpertiseSection />
      </section>
      
      {/* Service Selector */}
      <section className="relative bg-dark-neutral/5 py-24">
        <ServiceSelectorSection />
      </section>
      
      {/* Project Timeline */}
      <section className="relative bg-gradient-to-r from-cyan-accent/5 to-success-green/5 py-24">
        <ProjectTimelineSection />
      </section>
      
      {/* Technical Drawings */}
      <section className="relative bg-light-neutral py-24">
        <TechnicalDrawingsSection />
      </section>
      
      {/* Testimonials */}
      <section className="relative bg-gradient-to-b from-primary-orange/5 to-light-neutral py-24">
        <TestimonialsSection />
      </section>
      
      {/* Dashboard Preview */}
      <section className="relative bg-dark-neutral py-24">
        <DashboardPreviewSection />
      </section>
    </main>
  )
}
