import React from 'react'
import { MdLocationCity, MdLocationPin, MdSchool } from 'react-icons/md';

const School = ({ year, title, duration, details, location, school, schoolType }) => {
    return (
        <div className='lg:w-[900px]'>
            <ul className='flex flex-col md:flex-row relative border-l-4 border-content'>
                <li className='mb-10 ml-4 '>
                    <div className='absolute  w-5 h-5 bg-content rounded-full mt-1.5 -left-3 top-1' />
                    <div className='flex flex-wrap gap-4 flex-row items-center justify-between text-xs md:text-sm tracking-widest'>
                        <div className='flex sm:flex-col justify-between basis-full sm:basis-1/2 '>
                            <div className='flex flex-col items-start'>
                                <span className='text-base sm:text-xl text-content dark:text-darkContent flex basis-2/3 items-center sm:pb-1'>
                                    {title}
                                </span>
                                <span className='inline-block sm:hidden items-center text-xs mt-2 p-2 px-4 font-normal leading-none italic rounded-xl text-btnText bg-btnSuccess'>
                                    {year}
                                </span>
                            </div>
                            <div className='flex flex-col sm:flex-row justify-between items-start sm:items-end text-sm sm:text-base pl-4 sm:p-0 min-w-[170px] text-content dark:text-darkContent'>
                                <span className='flex items-center mt-2 '>
                                    <MdSchool size={30} className='inline-block mr-1' />
                                    {school}
                                </span>
                                <span className='flex items-center'>
                                    <MdLocationPin size={30} className='inline-block mr-1' />
                                    {location}
                                </span>
                            </div>
                        </div>
                        <div className='hidden sm:flex flex-col justify-center py-2 items-start sm:items-end'>
                            <span className='inline-block px-2.5 py-1.5 text-xs font-semibold text-btnText bg-btnSuccess rounded-2xl'>
                                {schoolType}

                            </span>
                            <span className='mt-3 text-xs font-normal leading-none text-content dark:text-darkContent'>
                                {duration}
                            </span>
                        </div>
                    </div>
                    <p className='my-10 text-base font-normal text-content dark:text-darkContent'>{details}</p>
                </li>
            </ul>
        </div >
    )
}

export default School;