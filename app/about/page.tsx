import { Button } from '@/components/ui/button'
import Link from 'next/link';
import React from 'react'
import { MdCastConnected } from "react-icons/md";

const About = () => {
  return (
    <div className='mt-20 p-4 px-12'>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"></h2>
                <p className="mb-4">
                  At [Company Name], we are dedicated to [describe your mission or purpose]. 
                  With a focus on [key focus areas or values], we strive to [desired outcome or goal]. 
                  Our team of [number] professionals brings a wealth of experience and expertise to every project, ensuring that we deliver [quality/products/services] that exceed expectations. 
                  By [specific actions or approaches], we are committed to [desired impact or result]. 
                  We look forward to the opportunity to collaborate with you and make a meaningful difference in [industry or community]                                 
                </p>
                <Button>
                  <Link className='flex items-center' href='/contact'>
                    <MdCastConnected size={30} />
                    <span className='ml-2'>Connect with us</span>
                  </Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
        </div>
      </section>
    </div>
  )
}

export default About