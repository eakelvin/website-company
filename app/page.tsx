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
import { Fire, FireEmoji, Lightbulb, Question, Sparkles, Star, Stroke } from "@/assets/svg";
import StepList from "@/components/Stepper";
const bright = require('../assets/images/innershadow.svg')
const background = require('../assets/images/man.svg')
const thought = require('../assets/images/thought.png')
import data from '../data.json'
import BlogPostCard from "@/components/BlogPostCard";
import { CarouselPlugin } from "@/components/Carousel";
import style from '../assets/styles/home.module.css'
import Backdrop from "@/components/backdrop";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const { projects } = data
  
  
  return (
    <div className="mt-24 p-4 px-12">
      <div className="">
        <h3 className="font-normal sm:text-right md:text-xl lg:text-2xl sm:font-bold">
          Ignite your brand's creative spark with us
        </h3>
        <div className="flex justify-end">
          <Stroke />
        </div>
      </div>   

      <div className="flex flex-row justify-between mx-6 sm:mx-12 mt-5">
        <Backdrop />
        
        <div>
          <Sparkles />
        </div>

        <div className={style.spinner}>
          <div className={style.spinner1}></div>
        </div>
      </div>
      
      {/* <div className="grid grid-cols-1 lg:grid-cols-[270px_1fr] px-5 sm:mx-12">
        <div className="col-span-1">
          <div className="mx-32 rotate-45 sm:rotate-3 sm:-mb-5">
            <Lightbulb />
          </div>
          <p className="">
           <span className="text-bold text-sm md:text-base lg:text-xl text-center flex items-center">
            EA CODES
            <FireEmoji />
            </span><br /> 
           <span className=" text-lime-400 font-semibold lg:text-2xl">strategy, design & technology</span><br /> 
           <span className="text-sm">to craft visually stunning and functional websites 
           & mobile apps that capture the essence of your brand.</span>
          </p>
          <Button className='bg-white text-black hover:bg-lime-300 mt-4'>
            <MdCastConnected size={30} />
            <span className='ml-2'>CONTACT US</span>
          </Button>
        </div>

        <div className="col-span-1 mt-8 sm:mt-0">
          <div className="bg-[url('/man.svg')] bg-no-repeat bg-center bg-cover">
            <Image className="" src={bright} alt="" />
          </div>
        </div>
      </div> */}

      <div className="md:flex md:flex-row px-5">
        <div className="md:basis-2/6">
          <div className="mx-32 rotate-45 sm:rotate-3 sm:-mb-5">
            <Lightbulb />
          </div>
          <p className="">
           <span className="text-bold text-pretty text-xl text-center flex justify-center items-center">
            EA CODES
            <FireEmoji />
            </span><br /> 
           {/* <span className="text-sm">combine</span>  */}
           <span className=" text-lime-400 font-semibold lg:text-2xl">Strategy, Design & Technology</span><br /> 
           <span className="text-sm font-semibold">to craft visually stunning and functional websites 
           & mobile apps that capture the essence of your brand.</span>
          </p>
          <div className="flex justify-evenly items-center">
            <Button className='bg-white text-black hover:bg-lime-300 mt-4'>
              <Link className='' href='/contact'>
                <MdCastConnected size={30} />
                <span className='ml-2'>CONTACT US</span>
              </Link>
            </Button>
            <Star />
          </div>
        </div>

        <div className="md:basis-4/6 mt-8 sm:mt-0">
          <div className="bg-[url('/man.svg')] bg-no-repeat bg-center bg-cover">
            <Image className="" src={bright} alt="" />
          </div>
        </div>
      </div>

      <div>
        <section className="mt-8">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light sm:text-lg">
                <span className="flex items-center">
                <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-lime-400">
                  Website Design
                </h2>
                <Image className="ml-2 rotate-180" src='/arrow.svg' height={30} width={30} alt="" />
                </span>
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
        <section className="">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="grid grid-cols-2 gap-4 mt-3">
                  <img className="w-full h-full rounded-lg" src="/mob1.jpg" alt="office content 1" />
                  <img className="mt-4 w-full h-full lg:mt-10 rounded-lg" src="/and.jpg" alt="office content 2" />
              </div>
              <div className="font-light sm:text-lg">
                  <h2 className="my-4 text-4xl tracking-tight font-extrabold text-lime-400">Mobile App Development</h2>
                  <p className="mb-4">
                  EA CODES also specialize in developing mobile applications. Whether you're looking to expand your digital presence with a custom iOS, Android, or cross-platform app, our experienced team is here to bring your ideas to life.
                  From concept to launch, we're committed to delivering high-quality, user-friendly mobile solutions that meet your unique business needs and objectives
                  </p>
              </div>   
          </div>
        </section>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <section className="">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-lime-400">UI/UX Designs</h2>
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
      </div>

      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg text-center md:text-left">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold">
            Already have some <br /> <span className="text-lime-400">Questions?</span>
          </h2>
          <p className="mb-4">
            We're eager to address your questions as they often lead to tailored digital solutions that perfectly meet your business needs.
          </p>
          <AccordionComp /> 
          <Button className="bg-white text-black hover:bg-lime-300 mt-4">
            <Link className='flex items-center' href='/contact'>
              <MdCastConnected size={30} />
              <span className='ml-2'>Connect with us</span>
            </Link>
          </Button>
        </div>
        <div className="">
          <div className="flex justify-between">           
            <Sparkles />
            <Question />
            <Star />
          </div>
          <Image src={thought} alt="" />
        </div>
      </div>

      <div>
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl">Overview</h1>
          <p className="mt-3">Here is the breakdown of the time we anticipate for a client's project</p>
        </div>

        <div className="px-6 md:flex md:justify-center">
          <StepList />
        </div>
      </div>

      <div className="py-12 lg:py-16">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl">Portfolio</h1>
          <p className="mt-3">Higlights of the best projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <Image src='/trophy.svg' width={584} height={482} alt="" />
          </div>
          <div className="space-y-5 md:space-y-0 md:flex md:flex-row md:gap-6 md:h-80 mt-10 md:mt-36">
            {projects.map((project) =>
              <BlogPostCard key={project.id} project={project} /> 
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl">Testimonials</h1>
          <p className="mt-3">Reviews from some of our clients</p>
        </div>

        <div className="md:flex md:justify-center">
          <CarouselPlugin />
        </div>
      </div>

      <div className="mt-12">
        <Connect />
      </div>
      
    </div>
  );
}

