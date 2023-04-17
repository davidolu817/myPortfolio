import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Achievement = () => {
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
      <h2 className="text-3xl md:text-4xl font-bold">Company's Achievement</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
    border-opacity-30 flex flex-col gap-10">
      <ResumeCard
      title="Front-end Developer"
      subTitle="Story bay(2022 - 2023)"
      result="Nigeria"
      des="These include developing user experiences that increased user satisfaction, 
      testing code and ensuring cross-browser compatibility, implementing a custom CSS grid system, 
      writing front-end code for apps, and more.." 
      />
      <ResumeCard
      title="Web Developer & Trainee"
      subTitle="Semicolon(2021- 2022)"
      result="Nigeria"
      des="."
      />
       <ResumeCard
      title="Graphic Designer"
      subTitle="Fadat(2019 - 2021)"
      result="Nigeria"
      des="." 
      />
    </div>
    </div>
     {/* part two */}
    <div>
    <div className=" py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
      <p className="text-sm text-designColor tracking-[4px]">
      2015 - 2020
        </p>
      <h2 className="text-3xl md:text-4xl font-bold">Job's Achievement</h2>
    </div>
    <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black
    border-opacity-30 flex flex-col gap-10">
        <ResumeCard
    title="Gym Instructor"
    subTitle="Rainbow Gym Center(2018 - 2020)"
    result="Lagos"
    des="A positive attitude and an approachable personality.
     The ability to teach and motivate people of all ages and backgrounds. 
     Good communication skills for explaining techniques and movements clearly. a good level of physical fitness.." 
    />
    <ResumeCard
    title="Paino Trainer"
    subTitle="Private(2016- 2018)"
    result="Nigeria"
    des="As a Paino Trainer i achieved alot by impacting knowledge to my sudents and disciplined in order to help the students build effective practice habits,
     coach them on excellent technique, analyze the music, and plan successful lessons.And i also learnt to be 
     friendly, smile, play games and make jokes,."
    />
    <ResumeCard
    title="Graphic Trainer"
    subTitle="Fadat(2015 - 2016)"
    result="Lagos"
    des="Used Photoshop, Illustrator, and InDesign, in daily production.
     Frequently integrated photographic, graphic, and typographic elements.
      Commended 4x by management for Photoshop skills." 
    />
    </div>
    </div>
    </motion.div>
  )
}

export default Achievement