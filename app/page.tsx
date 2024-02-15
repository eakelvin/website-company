'use client'
import React, { useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import CardComp from "@/components/Card";
import { Button } from "@/components/ui/button";
import Connect from "@/components/ContactForm";
import AccordionComp from "@/components/AccordionComp";
import Link from "next/link";
import { MdCastConnected } from "react-icons/md";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <main>
    <div className="mt-32 p-4 px-12">
      <div className="h-96 bg-gradient-to-r from-cyan-500 to-blue-500 text-center items-center p-12 py-auto">
        {/* <h1 className="text-7xl font-bold mb-5">Your Vision, Our Design: Creating Web Wonders Together</h1> */}
        <h1 className="mt-10 text-3xl md:text-7xl font-bold mb-5 dark:text-black">Your Dream Website <br /> Starts Here</h1>
        <p className="font-semibold text-sm md:text-md dark:text-black">
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
              <img className="mt-4 w-full h-full lg:mt-10 rounded-lg" src="web1.jpg" alt="Website Design" />
              <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />             
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
            <div className="grid grid-cols-2 gap-4 mt-3">
                <img className="w-full h-full rounded-lg" src="/mob1.jpg" alt="office content 1" />
                <img className="mt-4 w-full h-full lg:mt-10 rounded-lg" src="/and.jpg" alt="office content 2" />
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
                <img className="w-full rounded-lg" src="/ui.jpg" alt="office content 1" />
                <img className="mt-4 w-full h-full lg:mt-10 rounded-lg" src="/ux.jpg" alt="office content 2" />
            </div>
        </div>
      </section>

      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-center md:text-left">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Already have some questions?</h2>
          <p className="mb-4">
            We're eager to address your questions as they often lead to tailored digital solutions that perfectly meet your business needs.
          </p>
          <Button>
            <Link className='flex items-center' href='/contact'>
              <MdCastConnected size={30} />
              <span className='ml-2'>Connect with us</span>
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 mt-5 md:mt-2">
          <AccordionComp />    
        </div>
      </div>

      <Connect />

     

    </div>
    </main>
  );
}
