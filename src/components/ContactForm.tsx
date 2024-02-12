'use client'
import Image from 'next/image'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { FormEvent } from 'react'

export default function ContactForm() {

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwV2h0r3Nb9XP5oh2q4tqioOcLdERzcsbRZv1AvXao5iIIZCKVf-eTO-Uz8yQLAAwTd/exec'

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const data = new FormData(e.target as HTMLFormElement)
    console.log(data.get('name'))
    fetch(scriptURL, { method: 'POST', body: data })
      .then((res) => {
        console.log(res)
        console.log("SUCCESSFULLY SUBMITTED")
        alert('Thank you for reaching out to us. We will get back to you soon.')
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      <div
        id="contact"
        className="scroll-m-28 relative bg-stone-100 bg-cover container max-w-5xl lg:-mt-28 px-0 border-accent border-4"
      >
        <div className="absolute inset-0">
          <Image
            height={896}
            width={1344}
            className="h-full w-full object-cover"
            src="/hero-bg.jpg"
            alt="Two people working on a project"
          />
        </div>
        <div className="relative flex items-center overflow-hidden">
          <div className="absolute bottom-0 lg:left-1/2 top-0 w-full bg-white shadow-lg lg:w-1/2 dark:bg-gray-800" />
          <div className="container relative mx-auto px-4 py-16 lg:px-8">
            <div className="ml-auto space-y-16 lg:w-1/2 lg:px-14 xl:px-20">
              {/* Heading */}
              <div>
                <h2 className="font-titillium mb-4 text-4xl font-bold text-black dark:text-white">
                  Contact
                </h2>
                <div className="mb-3 h-1.5 w-12 rounded-lg bg-accent" />
                <h3 className="text-xl font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                  We always love to hear from you.
                </h3>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full space-y-6">
                <div className="space-y-1">
                  <Label htmlFor="name" className="font-medium">
                    First Name
                  </Label>
                  <Input required id="name" name="name" placeholder="John" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    defaultValue={''}
                    placeholder="Your message here"
                  />
                </div>
                <Button
                  type='submit'
                  size="lg">
                  <span>Send Message</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
