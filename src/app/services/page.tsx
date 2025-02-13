"use client";
import React from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import { motion } from "framer-motion";
import Link from 'next/link';

interface experence {
  company: string,
  title: string,
  responsability: string,
  href: string;
}
const exp = [
  {
    company: "eParamabara Technologies",
    title: 'Web developer',
    href: '',
    responsability: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    company: "Sify Technologies",
    title: 'Software developer',
    href: '',
    responsability: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    company: "TCS",
    title: 'Software developer',
    href: '',
    responsability: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }
];
const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {exp.map((item: experence, index) => {
            return (
              <div key={index} className='flex flex-col flex-1 justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{item.company} </div>
                  <Link href={item.href} >
                    <BsArrowDownRight />
                  </Link>
                </div>
                <h2>{item.title}</h2>
                <p>{item.responsability}</p>
                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;