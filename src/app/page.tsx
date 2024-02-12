import About from '@/components/About'
import CTA from '@/components/CTA'
import ContactForm from '@/components/ContactForm'
// import Hero from '@/components/Hero'
// import Logos from '@/components/Logos'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'
import OurProcess from '@/components/Process'
// import Features from '@/components/features'

export const metadata = {
  title: 'Home | Titan Alloys LLC',
  description:
    'Welcome to Titan Alloys LLC, an Illinois (USA) based Metal Trading Company with a focus on the efficient handling, recycling, and trading of both Ferrous and Non-Ferrous alloys. Our expertise lies in the meticulous processes involved in sorting and processing high-value materials like Tungsten Carbide, Toolsteel, and High-Temperature Alloys. We are dedicated to maintaining high standards in our operations and contributing to the sustainable metal industry.',
}

export default function Home() {
  return (
    <main className="bg-stone-100">
      <Solutions />
      {/* <Hero /> */}
      {/* <Logos /> */}
      <About />
      {/* <Features /> */}
      <OurProcess />
      <CTA />
      <ContactForm />
      <Testimonials />
    </main>
  )
}
