import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

export default function Footer() {
  const contentFolderPath = path.join(process.cwd(), '/content')
  const allfiles = readdirSync(contentFolderPath)

  return (
    <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11864.564037575865!2d-87.68634932102007!3d41.97578217485911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd188075e5361%3A0x5615a74b122a5c02!2s5145%20N%20Clark%20St%2C%20Chicago%2C%20IL%2060640%2C%20USA!5e0!3m2!1sen!2sin!4v1707897414894!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
