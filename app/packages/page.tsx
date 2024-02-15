import CardComp from '@/components/Card';
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdCastConnected } from "react-icons/md";

const Packages = () => {
  return (
    <div className='mt-20 p-4 px-12'>
        <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Innovative options tailored to suit any budget.
                </h2>
                <p className="mb-4">
                    We're firm believers that innovation should be within reach for everyone, irrespective of financial limitations. 
                    Dive into our thoughtfully curated selection of budget-friendly packages, crafted to empower you to realize your aspirations without stretching your budget.             
                </p>
                <Button>
                    <Link className='flex items-center' href='/contact'>
                    <MdCastConnected size={30} />
                    <span className='ml-2'>Connect with us</span>
                    </Link>
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3">               
                <Image className='mt-8 rounded-lg lg:mt-10' src='/budget.jpg' width={400} height={400} alt='' />
                <Image className='rounded-lg' src='/bud.jpg' width={400} height={400} alt='' />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Packages