"use client";
import React, { JSX } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
  SiTailwindcss, SiNextdotjs
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const about = {
  title: "About me",
  Description: "I’m a UI Developer with 8+ years of experience, specializing in React.Js (Next.Js) and front-end technologies. I’m passionate about building intuitive, high-performance web applications that enhance user experience.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pradep B"
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-8508483314"
    },
    {
      fieldName: "Experience",
      fieldValue: "8+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "pradeepb014@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Tamil"
    }
  ]
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "",
  items: [
    {
      company: "TCS",
      position: "Software Developer",
      duration: "2021-present"
    },
    {
      company: "Sify Technologies",
      position: "Software Developer",
      duration: "2020-2021"
    },
    {
      company: "eParampara Technologies",
      position: "Web Developer",
      duration: "2016-2020"
    }
  ]
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: '',
  items: [
    {
      insititution: "Kathir college of engineering, Coimbatore",
      degree: "Electronics and communication engineering",
      duration: "2012 - 2016"
    }
  ]
};

const skills = {
  title: "My Skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3'
    },
    {
      icon: <FaJs />,
      name: 'Javascript'
    },
    {
      icon: <FaReact />,
      name: 'ReactJs'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.Js'
    },
    {
      icon: <FaNodeJs />,
      name: 'NodeJs'
    },
    {
      icon: <FaFigma />,
      name: 'Figma'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS'
    }

  ]

};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className='min-h-[80vh] flex justify-center items-center py-12 xl:py-0'
    >

      <div className='container mx-auto'>

        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className='flex flex-col w-full max-w-[330px] mx-auto xl:m-0 gap-6'>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>


          <div className='min-h-[70vh] w-full'>
            <TabsContent value='experience' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {experience.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:m-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3>{item.position}</h3>
                          <div>
                            <span></span>
                            <p className='text-[12px] text-white/70'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            <TabsContent value='education' className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>
                  {education.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:m-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => {
                      return (
                        <li key={index}
                          className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        >
                          <span className='text-accent'>{item.duration}</span>
                          <h3>{item.degree}</h3>
                          <div>
                            <span></span>
                            <p className='text-[12px] text-white/70'>{item.insititution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>






            <TabsContent value='skills' className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:m-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li className='' key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl cursor-pointer hover:text-accent transition-all duration-300'>{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>








            <TabsContent value='about' className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>
                  {about.title}
                </h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:m-0'>
                  {about.Description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[680px] mx-auto xl:m-0">
                  {about.info.map((item, index) => {
                    let fieldValue: JSX.Element | string = item.fieldValue;

                    // If it's an email, create a mailto link
                    if (item.fieldName.toLowerCase() === "email") {
                      fieldValue = (
                        <a
                          href={`mailto:${item.fieldValue}`}
                          className="text-accent hover:underline"
                        >
                          {item.fieldValue}
                        </a>
                      );
                    }

                    // If it's a phone number, create a tel link
                    if (item.fieldName.toLowerCase() === "phone") {
                      fieldValue = (
                        <a
                          href={`tel:${item.fieldValue}`}
                          className="text-accent hover:underline"
                        >
                          {item.fieldValue}
                        </a>
                      );
                    }

                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>

      </div>

    </motion.div>
  );
};

export default Resume;