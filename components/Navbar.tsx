import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-white font-mono">CodeSmiths</span>
          </Link>
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-baseline space-x-4 font-mono">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Introduction
              </Link>
              <Link href="/video-demonstration" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Video Demo
              </Link>
              <Link href="/prototype" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Prototype
              </Link>
              <Link href="/resources" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Resources
              </Link>
              <Link href="/team" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                Team
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
