'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useToast } from "@/components/ui/use-toast"
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import axios from 'axios'
import { ToastAction } from '@radix-ui/react-toast'
import { Loader2 } from 'lucide-react'

const testURL = "http://localhost:8000"
const baseURL = "https://company-website-09c3.onrender.com"

interface ContactFormProps{
    showHeader?: boolean,
}

interface FormData {
    name: string;
    email: string;
    number: number,
    subject: string,
    message: string
}

const ContactForm: React.FC<ContactFormProps> = ({ showHeader = true }) => {
    const { toast } = useToast()
    const { register, handleSubmit, reset } = useForm<FormData>()
    const [loading, setLoading] = useState(false)

    const onSubmit = async (data: FormData) => {
        setLoading(true)
        try {
            const response = await axios.post(`${baseURL}/api/messages/create`, data)
            console.log(response.data);
            toast({ description: "Your message has been sent.",})
            setLoading(false)
            reset()
        } catch (error) {
            console.log(error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your request.",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        }
    }

  return (
    <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            {showHeader && (
            <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
                    React Out
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
                    Got a technical issue? Want to send feedback about a feature? Need details about our Business plan? Let us know.
                </p>
            </div>
            )}
            
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                    <input 
                        type="text" 
                        id="name"
                        {...register('name', { required: true })} 
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder="Name" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                    <input
                        type="email" 
                        id="email"
                        {...register('email', { required: true })}  
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder="name@gmail.com" 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Your Number</label>
                    <input 
                        type="tel" 
                        id="phone"
                        {...register('number')}  
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder="735 783 8992" 
                        // required 
                    />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium ">Subject</label>
                    <input 
                        type="text" 
                        id="subject"
                        {...register('subject')}  
                        className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder="Let us know how we can help you" 
                        // required 
                    />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium">Your message</label>
                    <textarea
                        required
                        {...register('message', { required: true })}  
                        id="message" 
                        rows={6} 
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Leave a comment...">
                    </textarea>
                </div>
                <div className='flex justify-center'>
                    <Button 
                        className='bg-white text-black' 
                        type='submit'>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message' }                         
                    </Button>

                    {/* <Button disabled>
                    
                    Please wait
                    </Button> */}
                </div>
            </form>
           
        </div>
    </section>
  )
}

export default ContactForm