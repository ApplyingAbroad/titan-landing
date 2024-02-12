import { IconChevronRight, IconHome2 } from '@tabler/icons-react'
import { readFileSync } from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import path from 'path'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const metadata = {
  title: 'Deals In | Titan Alloys LLC',
  description:
    'Titan Alloys LLC deals in various metals and alloys including Tungsten Carbide, Toolsteel, and High-Temperature Alloys. Our expertise lies in the meticulous processes involved in sorting and processing high-value materials.',

}

const Page = ({
  params: { metalSlug },
}: {
  params: {
    metalSlug: string
  }
}) => {
  const pageContent = matter(
    readFileSync(
      path.join(process.cwd(), `./content/${metalSlug}.mdx`),
      'utf8',
    ),
  )

  metadata.title = `${pageContent.data.title} | Titan Alloys LLC`
  metadata.description = pageContent.data.description

  const images: string[] = pageContent.data.images

  return (
    <div className="container flex flex-col items-center mx-auto py-10 lg:py-20">

      <main>
        <div className="max-w-4xl w-full">
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
        <Carousel className="mx-auto max-w-3xl w-full my-10 h-fit">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className='rounded-lg'>
                <Image
                  height={800}
                  width={600}
                  src={image}
                  className="object-cover w-full lg:min-w-96 h-96 "
                  alt="Preview Feature Image"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='hidden lg:flex' />
          <CarouselNext className='hidden lg:flex' />
        </Carousel>
        <div className="prose max-w-4xl text-accent-foreground">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {pageContent.content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  )
}

export default Page
