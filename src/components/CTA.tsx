import Image from 'next/image'
import { Button } from './ui/button'

export default function CTA() {
  return (
    <>
      {/* CTA Section: Box with Image */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            height={896}
            width={1344}
            className="h-full w-full object-cover"
            src="/hero-bg.jpg"
            alt="Two people working on a project"
          />
        </div>
        <div className="absolute inset-0 bg-stone-900/90 from-stone-950 via-stone-950/75 to-transparent lg:bg-transparent lg:bg-gradient-to-r" />

        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden rounded-xl px-6 py-8 lg:px-12 lg:py-16">
            <div className="relative py-5 text-center lg:w-3/5 lg:text-left xl:w-1/2">
              {/* Heading */}
              <div>
                <h2 className="mb-2 text-5xl font-titillium font-bold text-white">
                  Build your dream now
                </h2>
                <h3 className="mb-7 text-lg text-stone-300">
                  Start using our professional solution and build next
                  generation web applications and websites.
                </h3>
              </div>
              {/* END Heading */}

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <Button className="bg-accent text-accent-foreground" size="lg">
                  Get Started
                </Button>
                <Button
                  className="bg-transparent text-white"
                  size="lg"
                  variant="outline"
                >
                  Learn More
                </Button>
              </div>
              {/* END Actions */}
            </div>
          </div>
        </div>
      </div>
      {/* END CTA Section: Box with Image */}
    </>
  )
}
