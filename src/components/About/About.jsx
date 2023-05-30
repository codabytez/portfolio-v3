import React from 'react'
import WorkItems from './WorkItems';
import Work from './Work';


const About = () => {
    return (
        <div id='about' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 pb-20'>
            <h1 className='text-4xl font-bold text-center text-gray-900'>
                Work
            </h1>
            {WorkItems.map(works => (
                <Work
                    key={works.id}
                    year={works.year}
                    title={works.title}
                    duration={works.duration}
                    company={works.company} employmentType={works.employmentType}
                    details={works.details}
                />
            ))}
        </div>
    )
}

export default About;