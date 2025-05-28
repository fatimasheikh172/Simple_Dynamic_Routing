import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="bg-black">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col sm:flex-row items-center">
          <Link href="" className="flex title-font font-medium items-center text-gray-900 mb-4 sm:mb-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-white shadow-2xl hover:text-white">
              fatima sheikh
            </h1>
          </Link>
          <nav className="sm:ml-auto flex flex-wrap items-center text-base justify-center space-x-4">
            <Link href="/" className="text-white font-bold text-sm sm:text-base">
              Home
            </Link>
            <Link href="/About" className="text-white font-bold text-sm sm:text-base">
              About
            </Link>
            <Link href="/countries" className="text-white font-bold text-sm sm:text-base">
              List of countries
            </Link>
            <Link href="/contact" className="text-white font-bold text-sm sm:text-base">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
