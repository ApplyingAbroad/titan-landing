import { IconCube } from '@tabler/icons-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'

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
      {/* END Main Header */}
      {/* Hero Content */}
      <div className="container relative px-4 lg:px-8 py-16 lg:py-32">
        <h1 className="font-titillium leading-tight mb-4 max-w-3xl text-3xl md:text-4xl lg:text-6xl font-bold text-white">
          Transforming Your <span className="text-accent">Scrap</span> into
          Precious Wealth
        </h1>
        <h2 className="md:text-lg lg:text-xl font-medium leading-relaxed text-white opacity-80 lg:w-2/3">
          Welcome to Titan Alloys LLC, an Illinois (USA) based Metal Trading
          Company with a focus on the efficient handling, recycling, and trading
          of both Ferrous and Non-Ferrous alloys. Our expertise lies in the
          meticulous processes involved in sorting and processing high-value
          materials like Tungsten Carbide, Toolsteel, and High-Temperature
          Alloys. We are dedicated to maintaining high standards in our
          operations and contributing to the sustainable metal industry.
        </h2>
        <div className="flex flex-col space-y-2 pb-16 pt-10 sm:flex-row sm:space-x-2 sm:space-y-0">
          {/* <Button
            size="lg"
            className="bg-accent hover:bg-accent-light text-accent-foreground"
          >
            Get Started
          </Button> */}
          <Link href="#about">
            <Button size="lg" variant="secondary">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      I
    </div>
  )
}

export default Hero
