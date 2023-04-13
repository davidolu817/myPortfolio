import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard'

const Projects = () => {
  return (
    <section
     id="projects"
    //  className='w-full py-20 border-b[1px] border-b-black'
    className='w-full pt-10 pb-20 border-b-[1px] border-b-black'
    >
       <div className='flex justify-center items-center text-center'>
       <Title 
        title="VISIT MY PROJECTS"
        des="My Projects"
        />
       </div>
       <div className='grid grid-cols-3 gap-14'>
        <ProjectsCard
        title ="NETFLIX CLONE"
        des="Lorem, ipsum dolor sit amet consectetur adipisising elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectOne}
        />
        <ProjectsCard
        title ="Caculator App"
        des="Lorem, ipsum dolor sit amet consectetur adipisising elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectTwo}
        />
        <ProjectsCard
        title ="Todo-List App"
        des="Lorem, ipsum dolor sit amet consectetur adipisising elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectThree}
        />
        <ProjectsCard
        title ="Quiz App"
        des="Lorem, ipsum dolor sit amet consectetur adipisising elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectFour}
        />
        <ProjectsCard
        title ="Expense Tracker"
        des="Lorem, ipsum dolor sit amet consectetur adipisising elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectFive}
        />
        <ProjectsCard
        title ="Photo App"
        des="Lorem, ipsum dolor sit amet consectetur adipisising elit.
            Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
        src={projectSix}
        />
       </div>
    </section>
  )
}

export default Projects