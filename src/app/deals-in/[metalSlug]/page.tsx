import { IconChevronRight, IconHome2 } from '@tabler/icons-react'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import * as glob from 'glob'
const Page = ({
  params: { metalSlug },
}: {
  params: {
    metalSlug: string
  }
}) => {
  const pageContent = matter(readFileSync(`content/${metalSlug}.md`))
  const allContent = glob.sync('content/*.md')
  console.log(allContent)
  return (
    <div className="container flex flex-col lg:flex-row-reverse gap-5 mx-auto py-8">
      <Image
        height={800}
        width={600}
        src={pageContent.data.image}
        className="rounded-lg object-cover w-full lg:w-auto lg:h-full mt-12 lg:sticky lg:top-28"
        alt="Preview Feature Image"
      />
      <main>
        <div className="py-10 lg:py-32 w-full">
          <div className="mb-3 flex items-center gap-1">
            <Link
              href="/"
              className="text-accent-foreground bg-accent hover:bg-accent/50 transition-all hover:scale-110 size-7 grid place-items-center rounded-full"
            >
              <IconHome2 size={15} />
            </Link>
            <IconChevronRight className="text-stone-400" size={18} />
            <p className="font-bold uppercase tracking-wider text-muted-foreground text-sm">
              {pageContent.data.caption}
            </p>
          </div>
          <h2 className="font-titillium mb-3 text-3xl md:text-4xl font-bold text-black">
            {pageContent.data.title}
          </h2>
          <div className="mb-3 h-1.5 w-12 rounded-lg bg-accent" />
          <h3 className="md:text-lg font-medium leading-relaxed text-gray-800">
            {pageContent.data.description}
          </h3>
        </div>
        <div className="prose text-accent-foreground">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {pageContent.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  )
}

export default Page
