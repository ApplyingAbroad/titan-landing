import React from 'react'
import { Button } from './button'
import { IconCube } from '@tabler/icons-react'
import Link from 'next/link'

const links = [
  { id: '1', href: '/#about', label: 'About' },
  { id: '2', href: '/#process', label: 'Our Process' },
  { id: '3', href: '/#deals-in', label: 'We Deal In' },
]

const Navbar = () => {
  return (
    <header
      id="page-header"
      className="z-50 sticky top-0 flex flex-none items-center py-4 bg-accent-foreground"
    >
      {/* Main Header Content */}
      <div className="container mx-auto flex flex-col space-y-4 px-4 text-center md:flex-row md:items-center md:justify-between md:space-y-0 lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-lg font-bold tracking-wide text-white"
          >
            <IconCube className="size-7 text-accent" />
            <span>
              Titan Alloys <span className="text-amber-400">LLC</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-col space-y-4 text-center md:flex-row md:items-center md:justify-between md:space-x-10 md:space-y-0">
          <nav className="space-x-3 md:space-x-6">
            {links.map(({ id, href, label }) => (
              <Link
                className="text-sm font-semibold text-white hover:text-accent"
                key={id}
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link href="/#contact">
            <Button variant="secondary">Contact us</Button>
          </Link>
        </div>
      </div>
      {/* END Main Header Content */}
    </header>
  )
}

export default Navbar
