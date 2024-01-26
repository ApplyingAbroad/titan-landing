import {
  Icon3dRotate,
  IconSortAscendingShapes,
  IconStars,
} from '@tabler/icons-react'
import Image from 'next/image'

const features = [
  {
    id: 1,
    icon: IconStars,
    title: 'Expert Alloy Handling',
    description:
      'Our team at Titan Alloys possesses specialized expertise in the intricate handling of various alloys, ensuring precision and quality in every process',
  },
  {
    id: 2,
    icon: Icon3dRotate,
    title: 'Advanced Processing and Recycling',
    description:
      'Utilizing state-of-the-art technology, we excel in processing and recycling ferrous and non-ferrous alloys, contributing to a sustainable and eco-friendly approach.',
  },
  {
    id: 3,
    icon: IconSortAscendingShapes,
    title: 'Precision Sorting of High-Value Alloys',
    description:
      'Titan Alloys is at the forefront of sorting Tungsten Carbide, Toolsteel, and High Temp Alloys with unmatched precision, guaranteeing optimal value for each material.',
  },
]

export default function About() {
  return (
    <>
      {/* About Section: Company with Images */}
      <div className="bg-white text-accent-foreground">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div>
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              About Titan Alloys LLC
            </div>
            <h2 className="font-titillium mb-3 text-3xl md:text-4xl font-bold text-black dark:text-white">
              Empowering the Metal Industry with Innovation and Integrity
            </h2>
            <div className="mb-3 h-1.5 w-12 rounded-lg bg-accent" />
            <h3 className="text-xl font-medium leading-relaxed text-gray-800 lg:w-1/2 dark:text-gray-300">
              At Titan Alloys LLC, we stand as pioneers in the dynamic realm of
              metal trading, processing, and recycling. Established in the heart
              of Illinois, USA, our journey is fueled by a relentless commitment
              to innovation, sustainability, and integrity.
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
                src="/about/about-3.jpg"
                alt="Featured Image"
              />
            </div>
            <div>
              <Image
                height={800}
                width={600}
                className="object-cover max-h-[400px]"
                src="/about/about-4.jpg"
                alt="Featured Image"
              />
            </div>
          </div>
          {/* END Images */}

          {/* Values */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-16">
            {features.map((feature) => (
              <Feature key={feature.id} {...feature} />
            ))}
          </div>
          {/* END Values */}
        </div>
      </div>
      {/* END About Section: Company with Images */}
    </>
  )
}

const Feature = ({ icon: Icon, title, description }: (typeof features)[0]) => (
  <div>
    <Icon strokeWidth={1.5} className="w-10 h-10 mb-4 text-accent" />
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="leading-relaxed text-gray-700 dark:text-gray-400">
      {description}
    </p>
  </div>
)
