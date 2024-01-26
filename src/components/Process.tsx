import { IconCircleCheckFilled } from '@tabler/icons-react'
import Image from 'next/image'

const steps = [
  {
    id: 1,
    title: 'Step 1: Request a Quote',
    description:
      'Begin your journey with Titan Alloys by reaching out to us for a personalized quote on your materials. Our responsive team is ready to assess the value of your alloys and provide you with a competitive quote that reflects our commitment to maximizing returns for our suppliers.',
  },
  {
    id: 2,
    title: 'Step 2: Ship Your Materials',
    description:
      'Once you&apos;ve received your quote and are ready to proceed, securely ship your materials to our state- of - the - art facilities.Our logistics team ensures a smooth and efficient process, guiding you through every step to guarantee the safe arrival of your alloys at Titan Alloys.',
  },
  {
    id: 3,
    title: 'Step 3: Material Inspection & Payment',
    description:
      'Upon receiving your shipment, our dedicated team conducts a thorough inspection and segregation of materials. We prioritize transparency in our processes, ensuring that you are informed every step of the way. Once the inspection is complete, we swiftly process your payment, ensuring you receive the maximum value for your alloys promptly.',
  },
]

export default function OurProcess() {
  return (
    <>
      <div className="overflow-hidden bg-stone-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col space-y-20 lg:flex-row lg:items-center lg:space-x-20 lg:space-y-0">
            <div className="space-y-10 md:py-12 lg:w-1/2 xl:w-3/5">
              <div>
                <div className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  Our Streamlined Process
                </div>
                <h2 className="mb-4 text-3xl md:text-4xl font-titillium font-bold text-black dark:text-white">
                  Navigating the Path to Seamless Metal Transactions
                </h2>
                <div className="mb-3 h-1.5 w-12 rounded-lg bg-accent" />
                <h3 className="text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                  Skip the hassle, maximize the value. Titan Alloys streamlines
                  your metal recycling experience, saving you time and money.
                  Unlock the full potential of your scrap - we&apos;re with you
                  every step of the way.
                </h3>
              </div>

              <div className="space-y-8 xl:w-3/4">
                {steps.map((step) => (
                  <div key={step.id} className="flex space-x-4">
                    <div className="flex-none text-accent-foreground">
                      <IconCircleCheckFilled className="inline-block size-5" />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold">
                        {step.title}
                      </h4>
                      <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="mx-auto lg:w-1/2 xl:w-2/5 md:min-h-[640px]
              bg-cover bg-center md:bg-[url('/process.jpg')]"
            >
              <Image
                width={600}
                height={1200}
                src="/process.jpg"
                alt="Preview Feature Image"
                className="md:hidden mx-auto h-full object-cover object-right"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
