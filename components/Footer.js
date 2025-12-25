import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='text-black flex flex-col md:flex-row items-center justify-between px-4 py-4  w-full z-10 shadow-xl'>
        <div className='mb-4 md:mb-0 md:ml-8'>
          <ul className='flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[17px]'>
            <li>
              <Link
                href="/contact"
                className="px-2 py-1 rounded transition-colors duration-200 hover:bg-blue-600 hover:text-white"
              >
                Contact us
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-2 py-1 rounded transition-colors duration-200 hover:bg-blue-600 hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="px-2 py-1 rounded transition-colors duration-200 hover:bg-blue-600 hover:text-white"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/policy"
                className="px-2 py-1 rounded transition-colors duration-200 hover:bg-blue-600 hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className='md:mr-8'>
          <ul className='flex gap-4 md:gap-8 text-[17px]'>
            <li className='text-blue-600'>
              <Link href="/">MathsBuddy</Link>
            </li>
            <li className='text-blue-600'>
              <Link href="">Android</Link>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer