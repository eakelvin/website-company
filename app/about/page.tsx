import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'
import { MdCastConnected } from "react-icons/md";

const About = () => {
  return (
    <div className='mt-20 p-4 px-12'>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid grid-cols-2 gap-4 mt-8 mb-10">
              <img className="mt-4 w-full h-full lg:mt-10 rounded-lg" src="/about.jpg" alt="office content 2" />
              <img className="w-full h-full rounded-lg" src="/about1.jpg" alt="office content 1" />
            </div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"></h2>
                <p className="">
                  At The Website Company, we are dedicated to Crafting digital experiences that empower businesses to thrive in the online world. 
                  With a focus on areas that revolve around innovation, user-centric design, and seamless functionality. We prioritize transparency, collaboration, and excellence in all our endeavors, we strive to deliver cutting-edge websites and apps that exceed client expectations, drive business growth, and leave a lasting impact on users. 
                  Our team consists of professionals that bring a wealth of experience and expertise to every project, ensuring that we deliver quality products and services that exceed expectations. 
                  By Conducting thorough research to understand client needs and user preferences, 
                  Implementing best practices in design and development to create intuitive and visually appealing interfaces,
                  Testing websites and apps rigorously to ensure optimal performance and user experience and
                  Continuously updating skills and staying abreast of industry trends to incorporate the latest technologies and methodologies
                  we are committed to help our clients establish a strong online presence, enhance user engagement, and achieve their business objectives through our websites and apps. 
                  We look forward to the opportunity to collaborate with you and make a meaningful difference in this industry & community.                                
                </p>
                <Button className='mt-5'>
                  <Link className='flex items-center' href='/contact'>
                    <MdCastConnected size={30} />
                    <span className='ml-2'>Connect with us</span>
                  </Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About