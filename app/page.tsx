import { Navbar } from '@/components/landing/navbar'
import { Hero } from '@/components/landing/hero'
import { ShowcaseGrid } from '@/components/landing/showcase-grid'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Benefits } from '@/components/landing/benefits'
import { FooterSection } from '@/components/landing/footer-section'

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseGrid />
      <HowItWorks />
      <Benefits />
      <FooterSection />
    </>
  )
}
