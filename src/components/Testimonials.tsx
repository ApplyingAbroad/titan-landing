import { IconStarFilled } from '@tabler/icons-react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section: Boxed Multiple Alternate */}
      <div>
        <div className="container mx-auto space-y-10 px-4 pt-16 lg:flex lg:items-center lg:justify-between lg:space-y-0 lg:px-8 lg:pt-32">
          <div className="text-center lg:w-6/12 lg:pr-24 lg:text-left">
            <h2 className="mb-4 text-4xl font-titillium font-bold text-black dark:text-white">
              Trusted by 10,000+ senior developers
            </h2>
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-lg bg-gray-200 lg:mx-0 dark:bg-gray-700/75" />
            <h3 className="mb-5 text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              Web developers from all over the world are using our products.
              Join them today and build something amazing!
            </h3>
            <Button className="bg-accent text-accent-foreground">
              Get Started
            </Button>
          </div>
          <div className="space-y-10 md:space-y-16 lg:w-5/12 lg:flex-none">
            <blockquote>
              <p className="relative mb-5 rounded-xl bg-accent py-6 pl-6 pr-10 font-medium leading-7 md:p-10 dark:bg-yellow-950">
                <span className="absolute right-0 top-0 mr-4 mt-2 inline-block font-serif text-6xl text-accent-foreground dark:text-yellow-800">
                  “
                </span>
                <span className="absolute bottom-0 left-6 inline-block size-4 translate-y-1/2 rotate-45 bg-accent dark:bg-yellow-950" />
                <span className="relative mb-3 block">
                  <span className="inline-flex items-center text-accent-foreground">
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <svg
                      className="hi-mini hi-star inline-block size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
                <span className="relative">
                  I’ve been using pixelcave themes for years. The code is
                  consistently high-quality and pleasant to work with, so I
                  highly recommended them.
                </span>
              </p>
              <footer className="flex items-center space-x-4">
                <a
                  href="#"
                  className="dark:shadow-dark-gray-950 size-16 flex-none overflow-hidden rounded-full border-2 border-gray-50 transition duration-150 ease-out hover:scale-110 hover:border-white hover:shadow-md active:scale-100 active:border-gray-50 active:shadow-sm dark:border-gray-900"
                >
                  <Image
                    height={40}
                    width={40}
                    src="https://cdn.tailkit.com/media/placeholders/avatar-euZ2n8dGUcQ-160x160.jpg"
                    className="object-cover w-full h-full"
                    alt="Avatar Photo"
                  />
                </a>
                <div>
                  <a href="#" className="font-semibold text-accent-foreground">
                    Alejandro Lee
                  </a>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Full Stack Developer
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32">
          {/* Feedback */}
          <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <TestimonialCard key={i} />
            ))}
          </div>
          {/* END Feedback */}
        </div>
      </div>
      {/* END Testimonials Section: Boxed Multiple Alternate */}
    </>
  )
}

const TestimonialCard = () => {
  return (
    <div className="group relative flex flex-col items-stretch rounded-xl border border-gray-200 px-6 pb-6 pt-8 md:px-8 md:pb-8 dark:border-gray-700/75">
      <div className="absolute right-0 top-0 mr-4 mt-3 font-serif text-7xl text-gray-200 opacity-75 dark:text-gray-700/75">
        “
      </div>
      <blockquote className="relative flex grow flex-col">
        <div className="mb-6">
          <div className="inline-flex items-center text-accent">
            {[...Array(5)].map((_, i) => (
              <IconStarFilled key={i} className="inline-block size-5" />
            ))}
          </div>
        </div>
        <p className="mb-5 grow text-sm font-medium leading-relaxed text-gray-700 dark:text-gray-400">
          This is an amazing, multi purpose, and very well designed and
          structured template. I rarely share feedback about my purchases but
          this product deserves the support. It is distinguished.
        </p>
        <footer className="flex flex-none items-center space-x-4">
          <a
            href="#"
            className="dark:shadow-dark-gray-950 size-12 flex-none overflow-hidden rounded-full border-2 border-gray-50 transition duration-150 ease-out hover:scale-125 hover:border-white hover:shadow-md active:scale-110 active:border-gray-50 active:shadow-sm dark:border-gray-900"
          >
            <Image
              width={40}
              height={40}
              src="https://cdn.tailkit.com/media/placeholders/avatar-sibVwORYqs0-160x160.jpg"
              className="object-cover w-full h-full"
              alt="Avatar Photo"
            />
          </a>
          <div>
            <a href="#" className="font-semibold">
              Alex Sader
            </a>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Web Developer
            </p>
          </div>
        </footer>
      </blockquote>
    </div>
  )
}
