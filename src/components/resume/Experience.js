import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}} 
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      {/* part one */}
    <div>
    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">
        2021 - 2023
        </p>
      <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
    border-opacity-30 flex flex-col gap-10">
       <ResumeCard
      title="Front-end Developer"
      subTitle="Story bay(2022 - 2023)"
      result="Nigeria"
      des="Story bay is a company that promotes the growth of the cultures all over the world
      and also reviews things unknow to people about their cultures." 
      />
      <ResumeCard
      title="Web Developer & Trainee"
      subTitle="Semicolon(2021- 2022)"
      result="Nigeria"
      des="Semicolon is a home for Tech, where young ones at been trained to 
      become great software engineers."
      />
       <ResumeCard
      title="Graphic Designer"
      subTitle="Fadat(2019 - 2021)"
      result="Nigeria"
      des="Fadat is a graphics design company that products different designs
      and also train people to become great designers." 
      />
    </div>
    </div>
     {/* part two */}
    <div>
    <div className=" py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">
      2015 - 2020
        </p>
      <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
    border-opacity-30 flex flex-col gap-10">
         <ResumeCard
    title="Gym Instructor"
    subTitle="Rainbow Gym Center(2018 - 2020)"
    result="Lagos"
    des="Rainbow Gym is a Gym Center, where people comes in to be fit and healthy.
    Ensured that that members needs were met through personal recognition and by
    providing quality service and group fitness classes ." 
    />
    <ResumeCard
    title="Paino Trainer"
    subTitle="Private(2016- 2018)"
    result="Nigeria"
    des="Teaching people Music on the paino 
    and providind all they needs to know to be perfect."
    />
    <ResumeCard
    title="Graphic Trainer"
    subTitle="Fadat(2015 - 2016)"
    result="Lagos"
    des="Fadat is a graphics design company that products different designs
    and also train people to become great designers." 
    />
    </div>
    </div>
    </motion.div>
  )
}

export default Experience
