import ContactForm from '@/components/ContactForm'
import React from 'react'

const Contact = () => {
  return (
    <div className='mt-8 p-4 px-12'>
      <section className="">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold">GET IN TOUCH</h2>
                <p className="">Call us on 02244245</p>
                <p className="">
                  Email us at <span className='text-lime-400'>eacodes@gmail.com</span>
                </p>
                <p className="font-semibold">Or Send us a message and we'll response as soon as possible</p>
            </div>
            <div className="">
              <ContactForm showHeader={false} />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Contact