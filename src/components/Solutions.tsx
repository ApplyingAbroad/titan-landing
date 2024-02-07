import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { readFileSync, readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const DealsIn = [
  {
    image: '/products/product-1.jpg',
    name: 'Tungsten Carbide Cutting Tools',
    slug: 'tungsten-carbide',
    description:
      'Extend the life cycle of your worn-out tungsten carbide tools. We accept drill bits, inserts, blades, and more, offering competitive prices for this valuable scrap metal.',
  },
  {
    image: '/products/product-2.jpg',
    name: 'High-Temperature Alloys',
    slug: 'high-temperature-alloys',
    description:
      'Give your superalloys a second life. We recycle Inconel, Incoloy, and other high-performance alloys from jet engines, turbines, and industrial equipment.',
  },
  {
    image: '/products/product-3.webp',
    name: 'Non-Ferrous Metals',
    slug: 'non-ferrous-metals',
    description:
      'Aluminum, copper, brass, and more – we buy a wide variety of non-ferrous scrap metals. Clean out your storage and bring us your unwanted non-ferrous materials for responsible recycling.',
  },
  {
    image: '/products/product-4.jpg',
    name: 'Tool Steels',
    slug: 'tool-steel',
    description:
      "Don't discard your used tool steel – give it a new purpose. We accept a variety of tool steel scrap, including HSS, CPM, and more, ensuring responsible recycling and resource recovery.",
  },
]

export default function Solutions() {
  const contentFolderPath = path.join(process.cwd(), '/content')
  const allfiles = readdirSync(contentFolderPath)

  return (
    <>
      {/* Features Section: With Images */}
      <div
        id="deals-in"
        className="bg-white dark:bg-gray-900 dark:text-gray-100"
      >
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              We Deal In
            </div>
            <h2 className="mb-4 text-4xl font-titillium font-bold text-black dark:text-white">
              Navigating the Path to Seamless Metal Transactions
            </h2>
            <div className="mb-3 mx-auto h-1.5 w-12 rounded-lg bg-accent" />

            <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">
              Skip the hassle, maximize the value. Titan Alloys streamlines your
              metal recycling experience, saving you time and money. Unlock the
              full potential of your scrap - we&apos;re with you every step of
              the way.
            </h3>
          </div>
          {/* END Heading */}

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            {allfiles.map((metalSlug, index) => {
              const filePath = path.join(contentFolderPath, metalSlug)
              const pageContent = matter(readFileSync(filePath, 'utf8'))
              return (
                <SolutionCard key={index}
                  image={pageContent.data.image}
                  name={pageContent.data.title}
                  description={pageContent.data.description}
                  slug={metalSlug.split('.mdx')[0]}
                />
              )
            })}
          </div>
          {/* END Features */}
        </div>
      </div>
      {/* END Features Section: With Images */}
    </>
  )
}

const SolutionCard = ({
  image,
  name,
  description,
  slug,
}: (typeof DealsIn)[0]) => {
  return (
    <div className="py-5">
      <div className="aspect-h-3 aspect-w-4 mb-8">
        <Image
          height={800}
          width={600}
          src={image}
          className="rounded-lg object-cover w-full h-60"
          alt="Preview Feature Image"
        />
      </div>
      <h4 className="mb-2 text-lg font-bold">{name}</h4>
      <p className="mb-4 leading-relaxed text-gray-600 line-clamp-2">
        {description}
      </p>
      <Link href={`/deals-in/${slug}`}>
        <Button variant="outline">Learn More</Button>
      </Link>
    </div>
  )
}
