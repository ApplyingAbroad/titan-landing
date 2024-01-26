import About from '@/components/About'
import CTA from '@/components/CTA'
import ContactForm from '@/components/ContactForm'
import Hero from '@/components/Hero'
// import Logos from '@/components/Logos'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'
import OurProcess from '@/components/Process'
// import Features from '@/components/features'

export default function Home() {
  return (
    <main className="bg-stone-100">
      <Hero />
      {/* <Logos /> */}
      <About />
      {/* <Features /> */}
      <OurProcess />
      <Solutions />
      <CTA />
      <ContactForm />
      <Testimonials />
    </main>
  )
}
