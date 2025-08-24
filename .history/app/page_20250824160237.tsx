import { Header } from "@/components/header"
import { ServicesOverview } from "@/components/services-overview"
import { FeaturedCaseStudies } from "@/components/featured-case-studies"
import { LogoCloud } from "@/components/logo-cloud"
import { Testimonials } from "@/components/testimonials"
import { KPIBand } from "@/components/kpi-band"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import AnimatedHeroBackground from "@/components/animated-hero-background"

export default function HomePage() {
  return (
    <div className="min-h-screen">
import CustomCursor from "@/components/custom-cursor";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Header />
      <main>
        <AnimatedHeroBackground/>
        <ServicesOverview />
        <FeaturedCaseStudies />
        <LogoCloud />
        <Testimonials />
        <KPIBand />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
      <Header />
      <main>
        <AnimatedHeroBackground/>
        <ServicesOverview />
        <FeaturedCaseStudies />
        <LogoCloud />
        <Testimonials />
        <KPIBand />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
