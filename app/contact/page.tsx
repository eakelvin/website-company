import ContactForm from '@/components/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <div className='mt-8 p-4 px-12'>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">GET IN TOUCH</h2>
                <p className="">Call us on 02244245</p>
                <p className="">Email us at webcompany@gmail.com</p>
                <p className="font-semibold">Or Send us a message and we'll response as soon as possible</p>
            </div>
            <div className="">
              <ContactForm showHeader={false} />
                {/* <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" /> */}
                {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" /> */}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact