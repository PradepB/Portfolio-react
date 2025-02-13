"use client";
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const socials = [
    { icon: <FaGithub />, path: "https://github.com/pradepb" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/pradepb/" },
];

const Social: React.FC<any> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>

            {socials.map((item, index) => {
                return (
                    <Link href={item.path} target="_blank" key={index} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })
            }

        </div>
    );
};

export default Social;