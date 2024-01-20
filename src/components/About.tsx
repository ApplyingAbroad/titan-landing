import { Icon3dRotate, IconMedal, IconUserBolt } from '@tabler/icons-react'
import Image from 'next/image'

export default function About() {
  return (
    <>
      {/* About Section: Company with Images */}
      <div className="bg-white text-accent-foreground">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div>
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              A joy to use
            </div>
            <h2 className="font-titillium mb-3 text-4xl font-bold text-black dark:text-white">
              We are TechCode
            </h2>
            <div className="mb-3 h-1.5 w-12 rounded-lg bg-accent" />
            <h3 className="text-xl font-medium leading-relaxed text-gray-800 lg:w-1/2 dark:text-gray-300">
              A passionate team who are here to help you code and build your
              business using powerful tools.
            </h3>
          </div>
          {/* END Heading */}

          {/* Images */}
          <div className="flex space-x-2">
            <div>
              <Image
                height={800}
                width={1280}
                className="object-cover max-h-[400px]"
                src="/about/about-1.jpg"
                alt="Featured Image"
              />
            </div>
            <div>
              <Image
                height={800}
                width={600}
                className="object-cover max-h-[400px]"
                src="/about/about-2.jpg"
                alt="Featured Image"
              />
            </div>
          </div>
          {/* END Images */}

          {/* Values */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16">
            <div>
              <IconMedal
                strokeWidth={1.5}
                className="w-10 h-10 mb-4 text-accent"
              />
              <h3 className="mb-2 text-xl font-bold">Passion</h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-400">
                We are passionate with what we do and love crafting products
                that can make your life easier and help you succeed. We pay
                attention to small details and always aiming for the best.
              </p>
            </div>
            <div>
              <Icon3dRotate
                strokeWidth={1.5}
                className="w-10 h-10 mb-4 text-accent"
              />
              <h3 className="mb-2 text-xl font-bold">Commitment</h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-400">
                We are committed to our work and stand by our projects. Our aim
                is to improve them in every update and offer the most
                full-featured packages with the smallest possible footprint.
              </p>
            </div>
            <div>
              <IconUserBolt
                strokeWidth={1.5}
                className="w-10 h-10 mb-4 text-accent"
              />
              <h3 className="mb-2 text-xl font-bold">Less is More</h3>
              <p className="leading-relaxed text-gray-700 dark:text-gray-400">
                We believe that design should be invisible and enhance the user
                experience, not get in the way. This gives room for your content
                to breath and attracts your users’ attention.
              </p>
            </div>
          </div>
          {/* END Values */}
        </div>
      </div>
      {/* END About Section: Company with Images */}
    </>
  )
}
