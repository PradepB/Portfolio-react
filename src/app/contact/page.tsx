"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select, SelectContent, SelectGroup, SelectItem,
  SelectLabel, SelectTrigger, SelectValue
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    info: <FaPhoneAlt />,
    title: "Phone",
    description: "+91-8508483314"
  }, {
    info: <FaEnvelope />,
    title: "Email",
    description: "pradeepb014@gmail.com"
  }, {
    info: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kallippatti, Gobi(tk), Erode(dt), TamilNadu- 638 505"
  }
];



const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
      }}
      className='py-6'

    >

    </motion.section>
  );
};

export default Contact;