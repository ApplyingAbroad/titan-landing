import FeatureCard from './FeatureCard'

export default function Features() {
  return (
    <>
      {/* Features Section: Card Links */}
      <div className="overflow-hidden bg-stone-100 text-accent-foreground-light">
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32">
          {/* Heading */}
          <div className="text-center">
            <h2 className="mb-4 text-4xl font-titillium font-bold text-black dark:text-white">
              You are getting the best bonus features
            </h2>
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-lg bg-accent" />
            <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
              These features are included with each purchase and you can get
              access immediately through your custom app dashboard.
            </h3>
          </div>
          {/* END Heading */}

          {/* Features */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <FeatureCard key={i} />
            ))}
          </div>
          {/* END Features */}
        </div>
      </div>
      {/* END Features Section: Card Links */}
    </>
  )
}
