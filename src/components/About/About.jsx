import React from 'react'
import WorkItems from './WorkItems';
import Work from './Work';
import Education from './Education';
import School from './School';


const About = () => {
    return (
        <div id='about' className='max-w-[1400px] min-w-[300px] m-auto overflow-x-hidden border-t-4 border-content md:px-20 p-4 py-16 pb-20 bg-light dark:bg-dark'>
            <h1 className='text-5xl w-[900px] font-bold text-solid dark:text-darkSolid'>
                About Me
            </h1>
            <p className='py-12 lg:w-[900px] text-lg text-content dark:text-darkContent'>
                The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
            </p>

            <h1 className='text-5xl lg:w-[900px] font-bold text-solid dark:text-darkSolid pb-16 pt-8'>
                Work Experience
            </h1>

            {WorkItems.map(works => (
                <Work
                    key={works.id}
                    year={works.year}
                    title={works.title}
                    duration={works.duration}
                    company={works.company}
                    employmentType={works.employmentType}
                    location={works.location}
                    details={works.details}
                />
            ))}

            <h1 className='text-5xl lg:w-[900px] font-bold text-solid dark:text-darkSolid pb-14 pt-4'>
                Education
            </h1>

            {Education.map(works => (
                <School
                    key={works.id}
                    year={works.year}
                    title={works.title}
                    duration={works.duration}
                    school={works.school}
                    schoolType={works.schoolType}
                    location={works.location}
                    details={works.details}
                />
            ))}

        </div>
    )
}

export default About;