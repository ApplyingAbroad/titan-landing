import Image from 'next/image'

export default function USPs() {
  return (
    <>
      {/* Features Section: Featured Image Side */}
      <div className="overflow-hidden bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col space-y-20 lg:flex-row lg:items-center lg:space-x-20 lg:space-y-0">
            <div className="space-y-10 md:py-12 lg:w-1/2 xl:w-3/5">
              {/* Heading */}
              <div>
                <div className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  A joy to use
                </div>
                <h2 className="mb-4 text-4xl font-titillium font-bold text-black dark:text-white">
                  Clean User Interface
                </h2>
                <div className="mb-3 h-1.5 w-12 rounded-lg bg-accent" />

                <h3 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                  You will love working with your newly updated and customized
                  dashboard.
                </h3>
              </div>
              {/* END Heading */}

              {/* Features */}
              <div className="space-y-8 xl:w-2/3">
                <div className="flex space-x-4">
                  <div className="flex-none text-accent-foreground">
                    <svg
                      className="hi-mini hi-check-circle inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Sleek and Intuitive Interface
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      Our SaaS platform boasts a sleek and intuitive user
                      interface, ensuring effortless navigation and a delightful
                      user experience.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-none text-accent-foreground">
                    <svg
                      className="hi-mini hi-check-circle inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Customizable Themes
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      Stand out from the crowd with our customizable themes.
                      Tailor the look and feel of your web projects to match
                      your brand identity or desired aesthetic.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="flex-none text-accent-foreground">
                    <svg
                      className="hi-mini hi-check-circle inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold">
                      Responsive Design
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      Your web projects automatically adapt to different screen
                      sizes, guaranteeing a seamless and consistent user
                      experience whether accessed from desktops, tablets, or
                      smartphones.
                    </p>
                  </div>
                </div>
              </div>
              {/* END Features */}
            </div>
            <div className="relative mx-auto w-2/3 flex-none lg:w-1/2 xl:w-2/5">
              <Image
                width={600}
                height={800}
                src="/about/about-2.jpg"
                alt="Preview Feature Image"
                className="relative mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* END Features Section: Featured Image Side */}
    </>
  )
}
