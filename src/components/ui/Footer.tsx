import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

export default function Footer() {
  const contentFolderPath = path.join(process.cwd(), '/content')
  const allfiles = readdirSync(contentFolderPath)

  return (
    <>
      <footer
        id="page-footer"
        className="bg-white dark:bg-gray-900 dark:text-gray-100"
      >
        <div className="container mx-auto px-4 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-10">
            <div className="space-y-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-400/75">
                Deals in
              </h4>
              <nav className="flex flex-col space-y-3 text-sm">
                {allfiles.map((metalSlug) => {
                  const filePath = path.join(contentFolderPath, metalSlug)
                  const pageContent = matter(readFileSync(filePath, 'utf8'))
                  return (
                    <Link
                      href={`/deals-in/${metalSlug.split('.mdx')[0]}`}
                      key={metalSlug}
                      className="font-medium text-gray-700 hover:text-gray-950 hover:underline"
                    >
                      {pageContent.data.caption}
                    </Link>
                  )
                })}
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
                <Link
                  href="/privacy-policy"
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Privacy Policy
                </Link>
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
                <abbr title="Phone">P:</abbr> +1 (773) 200-5320
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
