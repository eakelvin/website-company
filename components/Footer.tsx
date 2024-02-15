import React from 'react'
import { TwitterLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 lg:px-12">
        <div className="md:flex md:items-center md:justify-between">
          <a href="" className="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Company Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">The Website Company</span>
          </a>
          <div className='flex items-center py-5 sm:mb-0'>
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillTwitterCircle size={30} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram size={30} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebook size={30} />
            </a>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Term of Service</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            {/* <li>
              <a href="#" className="hover:underline">Contact</a>
            </li> */}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="" className="hover:underline">The Website Company</a>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}

export default Footer