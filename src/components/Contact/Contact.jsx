import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdMarkEmailUnread, MdPhoneInTalk } from 'react-icons/md'

const contact = () => {
    return (
        <div id='contact' className='max-w-[1400px] min-w-[300px] m-auto md:px-20 p-4 py-16 border-t-4 border-content bg-light dark:bg-dark '>
            <h1 className='py-4 text-5xl font-bold text-solid dark:text-darkSolid'>
                Contact Me
            </h1>
            <p className='pt-6  pb-16 text-content flex justify-center font-semibold dark:text-darkContent lg:w-[900px]     py-12 text-xl'>
                I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className='flex w-full flex-col md:flex-row py-2 gap-x-8'>
                <div className='relative h-[600px] md:h-auto p-4 flex flex-col md:basis-1/2 xl:basis-2/5 w-full text-darkSolid bg-dark rounded-lg overflow-hidden dark:bg-content'>
                    <div className='h-1/2 lg:h-2/5 text-center md:text-start'>
                        <h3 className='text-3xl capitalize font-bold py-8'>
                            Contact Information
                        </h3>
                        <p className='text-xl'>
                            Feel free to contact me via email or phone.
                        </p>
                    </div>

                    <div className='flex flex-row h-1/2 items-end md:items-start'>
                        <div className='flex flex-col text-xl md:text-base lg:text-xl w-full'>
                            <a href='tel:+2347011340549' className='md:flex justify-start items-center py-6 mb-4 cursor-pointer hover:scale-90 transition ease-in duration-200 text-center w-full'>
                                <MdPhoneInTalk size={30} className='text-center block w-full md:w-auto' />
                                <span className='pl-4'>
                                    +234 701 1340 549
                                </span>
                            </a>
                            <a href='mail:chidiobinna@gmail.com' className='md:flex justify-start items-center py-4 cursor-pointer hover:scale-90 transition ease-in duration-200 w-full text-center'>
                                <MdMarkEmailUnread size={30} className='text-center block w-full md:w-auto' />
                                <span className='pl-4'>
                                    chidiobinna@gmail.com
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className='flex z-20 mt-10 md:m-auto'>
                        <div className='flex m-auto'>
                            <a
                                href='https://twitter.com/justCodiing'
                                className='m-2 mx-1 text-btnSuccess'>
                                <FaTwitter size={40} className='p-1.5 hover:scale-125 transition ease-in duration-200 mx-1' />
                            </a>
                            <a
                                href='https://www.instagram.com/chizzi01/'
                                className='m-2 mx-1 text-btnSuccess'>
                                <FaInstagram size={40} className='p-1.5  hover:scale-125 transition ease-in duration-200 mx-1' />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/chizzi01/'
                                className='m-2 mx-1 text-btnSuccess'>
                                <FaLinkedin size={40} className='p-1.5 hover:scale-125 transition ease-in duration-200 mx-1' />
                            </a>
                            <a
                                href='https://github.com/chizzi001'
                                className='m-2 mx-1 text-btnSuccess'>
                                <FaGithub size={40} className='p-1.5 hover:scale-125 transition ease-in duration-200 mx-1' />
                            </a>
                            <a
                                href='https://discordapp.com/users/937116359601569842/'
                                className='m-2 mx-1 text-btnSuccess'>
                                <FaDiscord size={40} className='p-1.5 hover:scale-125 transition ease-in duration-200 mx-1' />
                            </a>
                        </div>
                    </div>

                    <div className='w-48 h-48 rotate-45 bg-darkContent rounded-full absolute -bottom-12 -right-12 z-10 opacity-30 dark:bg-dark/70' />
                    <div className='w-40 h-40 rotate-45 bg-darkContent rounded-full absolute bottom-8 right-8 z-10 opacity-30 dark:bg-dark/70' />
                </div>

                <form action='' method='GET' encType='multipart/form-data' className='mt-10 md:m-0 lg:w-1/2'>



                    <div className='grid md:grid-cols-2 gap-6 gap-x-7 w-full py-2'>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-base py-2 text-content dark:text-darkContent'>
                                First Name
                            </label>
                            <input className='text-content dark:text-darkContent rounded-t-lg border-b outline-none p-3 flex border-b-darkContent focus:border-b-content  bg-content/10 dark:bg-darkContent/10' type='text' placeholder='John' name='fName' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-base py-2 text-content dark:text-darkContent'>
                                Last Name
                            </label>
                            <input className='text-content dark:text-darkContent rounded-t-lg border-b outline-none p-3 flex border-b-darkContent focus:border-b-content  bg-content/10 dark:bg-darkContent/10' type='text' placeholder='Doe' name='lName' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-base py-2 text-content dark:text-darkContent'>
                                Email
                            </label>
                            <input className='text-content dark:text-darkContent rounded-t-lg border-b outline-none p-3 flex border-b-darkContent focus:border-b-content  bg-content/10 dark:bg-darkContent/10' type='email' placeholder='demo@example.com' name='name' />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label className='uppercase text-base py-2 text-content dark:text-darkContent'>
                                Phone Number
                            </label>
                            <input className='text-content dark:text-darkContent rounded-t-lg border-b outline-none p-3 flex border-b-darkContent focus:border-b-content bg-content/10 dark:bg-darkContent/10' type='text' placeholder='+234 123 4567 890' name='phone'
                                pattern="^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$   ^\+(?:[0-9]●?){6,14}[0-9]$" title='Enter valid Number' required />
                        </div>
                    </div>

                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-base py-2 text-content dark:text-darkContent'>
                            Subject
                        </label>
                        <input className='text-content dark:text-darkContent rounded-t-lg border-b outline-none p-3 flex border-darkContent focus:border-b-content bg-content/10 dark:bg-darkContent/10' type='text' name='subject' />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='uppercase text-base py-2 text-content dark:text-darkContent'>
                            Message
                        </label>
                        <textarea className='text-content dark:text-darkContent border-b outline-none border-darkContent focus:border-content rounded-t-lg p-3 resize-none bg-content/10 dark:bg-darkContent/10 dark:border-content' rows={5} name='message' />
                    </div>
                    <button className='text-btnText invert-[20%] dark:invert-0 bg-btnSuccess hover:text-btnSuccess hover:bg-btnText transition ease-in-out duration-200 focus:bg-btnSuccess focus:text-solid mt-4 w-full sm:w-1/2 p-4 rounded-lg'>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default contact;