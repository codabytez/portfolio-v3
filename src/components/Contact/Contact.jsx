import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import { MdMarkEmailUnread, MdPhoneInTalk } from 'react-icons/md'

const contact = () => {
    return (
        <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='py-4 text-4xl font-bold text-center text-blue-600'>
                Contact Me
            </h1>
            <p className='py-4 text-lg font-medium text-center max-w-[700px] m-auto'>
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className='flex flex-col md:flex-row py-2 gap-x-8'>
                <div className='relative h-[400px] md:h-auto p-4 flex flex-col md:basis-2/5 w-full text-white bg-black rounded-lg overflow-hidden'>
                    <div className='h-1/2 lg:h-2/5 text-center md:text-start'>
                        <h3 className='text-3xl capitalize font-bold py-8'>
                            Contact Information
                        </h3>
                        <p className='text-xl'>
                            Feel free to contact me via email or phone.
                        </p>
                    </div>

                    <div className='flex flex-row h-1/2 items-end md:items-start'>
                        <div className='flex flex-col text-xl w-full'>
                            <a href='tel:+2347011340549' className='md:flex justify-start items-center hover:shadow-gray-400 py-6 mb-4 cursor-pointer hover:scale-90 transition ease-in duration-200 text-center w-full'>
                                <MdPhoneInTalk size={40} className='text-center block w-full md:w-auto' />
                                <span className='pl-4'>
                                    +234 701 1340 549
                                </span>
                            </a>
                            <a href='mail:chidiobinna@gmail.com' className='md:flex justify-start items-center hover:shadow-gray-400 py-4 cursor-pointer hover:scale-90 transition ease-in duration-200 w-full text-center'>
                                <MdMarkEmailUnread size={40} className='text-center block w-full md:w-auto' />
                                <span className='pl-4'>
                                    chidiobinna@gmail.com
                                </span>
                            </a>
                        </div>

                        <div>
                            <div>
                                <FaTwitter size={30} className='border-2 border-gray-100 rounded-full p-1.5' />
                                <FaInstagram />
                                <FaDiscord />

                            </div>
                        </div>
                    </div>
                    <div className='w-48 h-48 rotate-45 bg-stone-600 rounded-full absolute -bottom-12 -right-12 z-10 opacity-30'></div>
                    <div className='w-40 h-40 rotate-45 bg-stone-600 rounded-full absolute bottom-8 right-8 z-10 opacity-30'></div>
                </div>

                <form action='' method='POST' encType='multipart/form-data' className='mt-10 md:m-0'>



                    <div className='grid md:grid-cols-2 gap-6 gap-x-7 w-full py-2'>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>
                                First Name
                            </label>
                            <input className='border-b-2 outline-none p-3 flex border-b-gray-300 focus:border-b-gray-500 ' type='text' placeholder='John' name='fName' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>
                                Last Name
                            </label>
                            <input className='border-b-2 outline-none p-3 flex border-b-gray-300 focus:border-b-gray-500 ' type='text' placeholder='Doe' name='lName' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>
                                Email
                            </label>
                            <input className='border-b-2 outline-none p-3 flex border-b-gray-300 focus:border-b-gray-500 ' type='email' placeholder='demo@example.com' name='name' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-sm py-2'>
                                Phone Number
                            </label>
                            <input className='border-b-2 outline-none p-3 flex border-b-gray-300 focus:border-b-gray-500' type='text' placeholder='012345678910' name='phone' />
                        </div>
                    </div>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>
                            Subject
                        </label>
                        <input className='border-b-2 p-3 flex border-gray-300 focus:border-b-gray-500 ' type='text' name='subject' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-sm py-2'>
                            Message
                        </label>
                        <textarea className='border-2 rounded-lg p-3 border-gray-300 resize-none' rows={5} name='message' />
                    </div>
                    <button className='bg-blue-600 text-gray-100 mt-4 w-full sm:w-1/2 p-4 rounded-lg'>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default contact;