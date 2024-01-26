import Link from 'next/link'

export default function Footer() {
  return (
    <>
      {/* Footer Section: With Links Info Newsletter */}
      <footer
        id="page-footer"
        className="bg-white dark:bg-gray-900 dark:text-gray-100"
      >
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            <div className="space-y-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400/75">
                Products
              </h4>
              <nav className="flex flex-col space-y-3 text-sm">
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Pricing Plans
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Analytics
                </a>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Support Center
                </a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400/75">
                Legal
              </h4>
              <nav className="flex flex-col space-y-3 text-sm">
                <Link
                  href="/terms-of-service"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Terms of Service
                </Link>
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Privacy Policy
                </a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400/75">
                Company Inc
              </h4>

              <div className="text-sm leading-relaxed">
                5145 N Clark Street# 1370
                <br />
                Chicago, IL 60640
                <br />
                United States
                <br />
                <abbr title="Phone">P:</abbr> +1 (778) 892-0779
                <br />
                <br />
                Mail us at{' '}
                <Link
                  href="mailto:orders@titanalloysllc.com"
                  className="font-bold"
                >
                  orders@titanalloysllc.com
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-10 dark:border-gray-700/75" />
          <div className="text-center text-sm">
            <div className="text-gray-500 dark:text-gray-400/80">
              <span className="font-semibold">Titan Alloys LLC</span> © 2024
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      {/* END Footer Section: With Links Info Newsletter */}
    </>
  )
}
