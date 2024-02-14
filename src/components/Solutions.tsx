import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
import { readFileSync, readdirSync } from 'fs'
import path from 'path'
import matter from 'gray-matter'



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
              Simplifying Metal Recycling
            </h2>
            <div className="mb-3 mx-auto h-1.5 w-12 rounded-lg bg-accent" />

            <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3">
              Efficient Metal Recycling with Titan Alloys. Save time and money, get the best value for your scrap. We support you at every step
            </h3>
          </div>
          {/* END Heading */}

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-12 xl:gap-16 max-w-5xl mx-auto">
            {allfiles.map((metalSlug, index) => {
              const filePath = path.join(contentFolderPath, metalSlug)
              const pageContent = matter(readFileSync(filePath, 'utf8'))
              return (
                <SolutionCard
                  key={index}
                  image={pageContent.data.featureImage}
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

interface DealsInProps {
  image: string
  name: string
  description: string
  slug: string
}

const SolutionCard = ({
  image,
  name,
  description,
  slug,
}: DealsInProps) => {
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
