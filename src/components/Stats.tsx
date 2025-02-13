"use client";
import React from 'react';
import CountUp from 'react-countup';

interface stats {
  num: number;
  text: string;
}
const statsData: stats[] = [
  {
    num: 8,
    text: "Years of Experience"
  },
  {
    num: 10,
    text: "Projects completed"
  },

  {
    num: 4,
    text: "Technologies worked"
  },
  {
    num: 500,
    text: "Code commits"
  },
];
const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
          {statsData.map((item: stats, index) => {
            return (
              <div key={index} className='flex-1 flex gap-4 items-center justify-center xl:justify-start'>
                <CountUp end={item.num} duration={5} delay={2} className='text-accent text-4xl xl:text-6xl font-extrabold' />
                <p className='text-4xl xl:text-6xl font-extrabold'>+</p>
                <p className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'}`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;