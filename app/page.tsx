'use client'
import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import CardComp from "@/components/Card";
import { Button } from "@/components/ui/button";
import { ArrowBigDownIcon, ArrowBigUpIcon, Mail } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue, } from "@/components/ui/select"
import Connect from "@/components/ContactForm";
import AccordionComp from "@/components/AccordionComp";
import Link from "next/link";
import { MdCastConnected } from "react-icons/md";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <main>
    <div className="mt-48 mb-48 p-4 px-12">
      <div className="text-center items-center">
        {/* <h1 className="text-7xl font-bold mb-5">Your Vision, Our Design: Creating Web Wonders Together</h1> */}
        <h1 className="text-5xl md:text-7xl font-bold mb-5">Your Dream Website <br /> Starts Here</h1>
        <p className="font-semibold text-sm md:text-md">
          The Website Company is dedicated to crafting visually stunning and functional websites that capture the essence of your brand.
        </p>
      </div>

      <section className="bg-white dark:bg-gray-900 mt-48 md:mt-56">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Website Design</h2>
                <p className="mb-4">
                  As a trusted Company for web design, we provide businesses and individuals with a perfect blend of expertise and creativity. Our design approach ensures that every aspect of your website is carefully crafted to achieve your business goals, meet your unique needs, possess a user-friendly experience and command an engaging design while promising flawless functionality.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Mobile App Development</h2>
                <p className="mb-4">
                The Webiste Company also specialize in developing mobile applications. Whether you're looking to expand your digital presence with a custom iOS, Android, or cross-platform app, our experienced team is here to bring your ideas to life.
                From concept to launch, we're committed to delivering high-quality, user-friendly mobile solutions that meet your unique business needs and objectives
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">UI/UX Designs</h2>
                <p className="mb-4">
                Our team specializes in providing comprehensive UI/UX design services to complement our existing offerings.
                In today's digital landscape, user experience is paramount, and we understand the importance of creating intuitive and visually appealing interfaces that captivate and engage users. Whether you're looking to enhance the usability of your website, streamline the navigation of your mobile app, or create a seamless user journey across various platforms, our skilled designers are here to help.
                </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
        </div>
      </section>

      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Already have some questions?</h2>
          <p className="mb-4">
            We're eager to address your questions as they often lead to tailored digital solutions that perfectly meet your business needs.
          </p>
          {/* <Button>
            <Mail className="mr-2 h-4 w-4" /> Contact Us
          </Button> */}
          <Button>
            <Link className='flex items-center' href='/contact'>
              <MdCastConnected size={30} />
              <span className='ml-2'>Connect with us</span>
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 mt-5 md:mt-0">
          <AccordionComp />    
        </div>
      </div>

      <Connect />

     

    </div>
    </main>
  );
}
