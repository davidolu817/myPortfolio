import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} 
    animate={{opacity:1, transition:{duration:.5}}} 
    className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20">
      {/* part one */}
    <div>
    <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">
        2003 - 2023
        </p>
      <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
    border-opacity-30 flex flex-col gap-10">
      <ResumeCard
      title="BSc In International Relations & Diplomatic Studies"
      subTitle="National Open University Of Nigeria (2019 - 2023)"
      result="3.70/4"
      des="The training provided by universities in order to prepare people to work
      in various sector of the econpmy or areas of culture."
      />
      <ResumeCard
      title="Art Department"
      subTitle="Birrel Avenue Senior High School (2015 - 2018)"
      result="4.75/5"
      des="Higher education is tertiary education leading to award of an academic
      degree. Higher education, also called post-secondary education."
      />
      <ResumeCard
      title="Primary and Junior Secondary School Education"
      subTitle="Mercytrack Primary School & Mobolaji Junior High School (2005 - 2015)"
      result="5.00/5"
      des="Primary education and Junior Secondary education covers two phases on the
      International Standard Classification of Education scale." 
      />
    </div>
    </div>
     {/* part two */}
    <div>
    <div className=" py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">
        2020 - 2023
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
    </motion.div>
  )
}

export default Education