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
       <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectsCard
        title ="NETFLIX CLONE"
        des="Netflix clone refers to a website, application or platform that replicates 
        the popular streaming service, Netflix."
        src={projectOne}
        />
        <ProjectsCard
        title ="Caculator App"
        des="A calculator is an electronic device or tool that performs mathematical operations such as addition, 
        subtraction, multiplication, and division."
        src={projectTwo}
        />
        <ProjectsCard
        title ="Todo-List App"
        des="This app is designed to help you organize your tasks
        and schedule efficiently."
        src={projectThree}
        />
        <ProjectsCard
        title ="Quiz App"
        des="A quiz app is a mobile application that allows users to answer questions 
        on various topics and test their knowledge."
        src={projectFour}
        />
        <ProjectsCard
        title ="Expense Tracker"
        des="Expense tracker is a tool or application that 
        helps individuals track, manage and monitor their expenses."
        src={projectFive}
        />
        <ProjectsCard
        title ="Photo App"
        des="A photo app is a mobile application that allows users to take photos, 
        edit them, and share them with others."
        src={projectSix}
        />
       </div>
    </section>
  )
}

export default Projects