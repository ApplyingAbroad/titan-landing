import { IconCube } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <div className="relative">
      {/* Main Header */}
      <Image
        height={400}
        width={1280}
        alt="bg"
        src="/hero-bg.jpg"
        className="absolute h-full object-cover w-full inset-0 "
      />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-transparent opacity-80"></div>
      <header
        id="page-header"
        className="relative flex flex-none items-center py-8"
      >
        {/* Main Header Content */}
        <div className="container mx-auto flex flex-col space-y-4 px-4 text-center md:flex-row md:items-center md:justify-between md:space-y-0 lg:px-8">
          <div>
            <a
              href="#"
              className="group inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-white"
            >
              <IconCube className="size-7 text-amber-400 group-hover:text-amber-500" />
              <span>Company</span>
            </a>
          </div>
          <div className="flex flex-col space-y-4 text-center md:flex-row md:items-center md:justify-between md:space-x-10 md:space-y-0">
            <nav className="space-x-3 md:space-x-6">
              <a
                href="#"
                className="text-sm font-semibold text-white hover:text-amber-600"
              >
                <span>Features</span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:text-amber-600"
              >
                <span>Pricing</span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-white hover:text-amber-600"
              >
                <span>Support</span>
              </a>
            </nav>
            <div className="flex items-center justify-center space-x-2">
              <Button variant="secondary">Contact us</Button>
            </div>
          </div>
        </div>
        {/* END Main Header Content */}
      </header>
      {/* END Main Header */}
      {/* Hero Content */}
      <div className="container relative px-4 lg:px-8 py-16 lg:py-32">
        <h1 className="font-titillium leading-tight tracking-tighter mb-4 max-w-5xl text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          quisquam!
        </h1>
        <h2 className="md:text-lg lg:text-xl font-medium leading-relaxed text-white lg:w-2/3">
          Save, schedule and generate social media posts for all the networks
          you are part of. Inspiring results from first day.
        </h2>
        <div className="flex flex-col space-y-2 pb-16 pt-10 sm:flex-row sm:space-x-2 sm:space-y-0">
          <Button size="lg" className="bg-accent text-accent-foreground">
            Get Started
          </Button>
          <Button size="lg" variant="secondary">
            Learn More
          </Button>
        </div>
      </div>
      I
    </div>
  )
}

export default Hero
