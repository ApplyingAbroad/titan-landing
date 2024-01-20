import About from '@/components/About'
import CTA from '@/components/CTA'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'
import USPs from '@/components/USPs'
import Features from '@/components/features'

export default function Home() {
  return (
    <main className="bg-stone-100">
      <Hero />
      <Logos />
      <About />
      <Features />
      <USPs />
      <Solutions />
      <CTA />
      <ContactForm />
      <Testimonials />
      <Footer />
    </main>
  )
}
