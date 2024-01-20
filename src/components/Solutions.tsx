import Image from 'next/image'
import { Button } from './ui/button'

export default function Solutions() {
  return (
    <>
      {/* Features Section: With Images */}
      <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              A joy to use
            </div>
            <h2 className="mb-4 text-4xl font-titillium font-bold text-black dark:text-white">
              Fully Featured
            </h2>
            <div className="mb-3 mx-auto h-1.5 w-12 rounded-lg bg-accent" />

            <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
              Amazing and latest features to help you build your next idea with
              cool tools and super modern technology.
            </h3>
          </div>
          {/* END Heading */}

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-12 xl:gap-16">
            {Array.from({ length: 3 }, (_, i) => (
              <SolutionCard key={i} />
            ))}
          </div>
          {/* END Features */}
        </div>
      </div>
      {/* END Features Section: With Images */}
    </>
  )
}

const SolutionCard = () => {
  return (
    <div className="py-5">
      <div className="aspect-h-3 aspect-w-4 mb-8">
        <Image
          height={800}
          width={600}
          src="/about/about-2.jpg"
          className="rounded-lg object-cover w-full h-60"
          alt="Preview Feature Image"
        />
      </div>
      <h4 className="mb-2 text-lg font-bold">Drag &amp; Drop Development</h4>
      <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        With Drag &amp; Drop Development, building web projects becomes a
        breeze. No coding skills required—simply choose elements, customize
        layouts, and effortlessly create stunning websites and web applications
        tailored to your unique vision.
      </p>
      <Button variant="outline">Learn More</Button>
    </div>
  )
}
