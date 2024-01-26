import { IconStarFilled } from '@tabler/icons-react'
import { Avatar, AvatarFallback } from './ui/avatar'
const testimonials = [
  {
    name: 'John S.',
    role: 'Manufacturing Partner',
    message:
      'Working with Titan Alloys LLC has been a game-changer for our manufacturing operations. Their commitment to quality and reliability in sourcing high-value alloys has significantly improved our production efficiency. Titan Alloys is our trusted partner for sustainable metal solutions.',
  },
  {
    name: 'Sarah M.',
    role: 'Environmental Advocate',
    message:
      "I'm impressed by Titan Alloys' dedication to environmentally responsible practices in the metal trading industry. Their emphasis on recycling and sustainable processes aligns perfectly with our values. Choosing Titan Alloys means supporting a greener future.",
  },
  {
    name: 'David H.',
    role: 'Industry Professional',
    message:
      'Titan Alloys LLC stands out in the metal trading landscape. Their deep knowledge of ferrous and non-ferrous alloys, combined with their proficiency in sorting and processing, makes them an invaluable resource in the industry. Reliable, efficient, and a pleasure to work with.',
  },
]

export default function Testimonials() {
  return (
    <>
      {/* Testimonials Section: Boxed Multiple Alternate */}
      <div>
        <div className="container mx-auto space-y-10 px-4 pt-16 lg:flex lg:items-center lg:justify-between lg:space-y-0 lg:px-8 lg:pt-32">
          <div className="text-center lg:w-6/12 lg:pr-24 lg:text-left">
            <div className="mb-1 text-sm font-bold uppercase tracking-wider text-muted-foreground">
              Testimonials
            </div>
            <h2 className="mb-4 text-4xl font-titillium font-bold text-black dark:text-white">
              Hear What Our Partners Say
            </h2>
            <div className="mx-auto mb-3 h-1.5 w-12 rounded-lg bg-accent lg:mx-0 dark:bg-gray-700/75" />
            <h3 className="mb-5 text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
              Discover the experiences of those who have partnered with Titan
              Alloys LLC. Our satisfied clients and industry professionals share
              their thoughts on our commitment to excellence, sustainability,
              and the value we bring to metal trading and recycling.
            </h3>
          </div>
          <div className="space-y-10 md:space-y-16 lg:w-5/12 lg:flex-none">
            <blockquote>
              <p className="relative mb-5 rounded-xl bg-accent py-6 pl-6 pr-10 font-medium leading-7 md:p-10 dark:bg-yellow-950">
                <span className="absolute right-0 top-0 mr-4 mt-2 inline-block font-serif text-6xl text-accent-foreground dark:text-yellow-800">
                  “
                </span>
                <span className="absolute bottom-0 left-6 inline-block size-4 translate-y-1/2 rotate-45 bg-accent dark:bg-yellow-950" />
                <span className="relative mb-3 block">
                  <span className="inline-flex gap-0.5 items-center text-accent-foreground">
                    {[...Array(5)].map((_, i) => (
                      <IconStarFilled key={i} className="inline-block size-5" />
                    ))}
                  </span>
                </span>
                <span className="relative">
                  Titan Alloys is more than just a metal trading company; they
                  are our preferred partner in recycling initiatives. Their
                  commitment to sustainable practices, coupled with their
                  expertise in recycling ferrous and non-ferrous alloys, makes
                  them a leader in the industry. A reliable and responsible
                  choice.
                </span>
              </p>
              <footer className="flex items-center space-x-4">
                <Avatar className="border-accent-foreground-light/50 border-2 size-12">
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <div>
                  <a href="#" className="font-semibold text-accent-foreground">
                    Michael B.
                  </a>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Recycling Partner
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="container mx-auto space-y-16 px-4 py-16 lg:px-8 lg:py-32">
          {/* Feedback */}
          <div className="grid grid-cols-1 gap-4 md:gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
          {/* END Feedback */}
        </div>
      </div>
      {/* END Testimonials Section: Boxed Multiple Alternate */}
    </>
  )
}

const TestimonialCard = ({ name, role, message }: (typeof testimonials)[0]) => {
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
          {message}
        </p>
        <footer className="flex flex-none items-center space-x-4">
          <Avatar className="border-accent-foreground-light/50 border-2">
            <AvatarFallback>
              {name
                .split(' ')
                .map((word) => word[0])
                .join('')
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <a href="#" className="font-semibold">
              {name}
            </a>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {role}
            </p>
          </div>
        </footer>
      </blockquote>
    </div>
  )
}
