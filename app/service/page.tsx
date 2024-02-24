import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MdCastConnected } from "react-icons/md";
import { Progress } from "@/components/ui/progress"
import Image from 'next/image';


const Service = () => {
  return (
    <div className='mt-18 p-4 px-12 '>
      <div className='text-center py-48 items-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-extrabold'>Our Innovative Process</h1>
        <p className='mb-4'>
          We employ a direct and consistent problem-solving approach, prioritizing simplicity over complexity. 
          Our focus is on implementing intelligent and pragmatic solutions that effectively tackle challenges.
        </p>
        <Button>
            <Link className='flex items-center' href='/contact'>
              <MdCastConnected size={30} />
              <span className='ml-2'>Connect with us</span>
            </Link>
        </Button>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 p-5'>
        <div className='mt-4'>
          <Progress className='' value={15} />
          <div>
            <h1 className='mt-4 mb-4 font-extrabold text-xl'>Discovery and Analysis</h1>
            <p>
              Analyze each problem to understand its complexities thoroughly. <br />
              Understanding the client's requirements, <br />
              target audience, and goals for the project.
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <Progress value={25} />
          <div>
            <h1 className='mt-4 mb-4 font-extrabold text-xl'>Planning and Design</h1>
            <p>
              Planning: Creating a sitemap, defining the project structure, and outlining content requirements. <br />
              Design: Developing wireframes and mockups to visualize the product layout and user interface.
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <Progress value={50} />
          <div>
            <h1 className='mt-4 mb-4 font-extrabold text-xl'>Implementation & Development</h1>
            <p>
              Building the project using required technologies, frameworks and other programming languages, as well as integrating any necessary backend functionalities.
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <Progress value={75} />
          <div>
            <h1 className='mt-4 mb-4 font-extrabold text-xl'>Testing</h1>
            <p>
              Conducting quality assurance testing to ensure the product is functional, compatible across different devices and browsers, and free of bugs.
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <Progress value={85} />
          <div>
            <h1 className='mt-4 mb-4 font-extrabold text-xl'>Deployment</h1>
            <p>
              Launching the product to the live server and making it accessible to the public.
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <Progress value={100} />
          <div>
            <h1 className='mt-4 mb-4 font-extrabold text-xl'>Maintenance</h1>
            <p>
              Providing ongoing support, updates, and improvements to keep the product secure, up-to-date, and optimized for performance.
            </p>
          </div>
        </div>
      </div>

      <div className='mt-24 grid grid-cols-1 md:grid-cols-2'>
        <div className='mx-auto'>
          <Image src='/port.jpg' width={400} height={200} alt='Portfolio' />
        </div>
        <div className='items-center my-auto'>
          <h1 className='font-extrabold text-2xl mt-5'>Explore our Portfolio</h1>
          <p className='my-5'>
            Delve into a display of our varied projects and uncover the inventive solutions we've tailored for clients spanning diverse industries. 
            From elegant website designs to resilient mobile applications, our showcase underscores our dedication to quality and originality in every venture
          </p>
          <Button>
            <Link className='flex items-center' href='/work'>
              <MdCastConnected size={30} />
              <span className='ml-2'>Discover Our Projects</span>
            </Link>
        </Button>
        </div>

      </div>

    </div>
  )
}

export default Service