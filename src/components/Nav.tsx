"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface links {
    name: string,
    path: string;
}
const Links: links[] = [
    {
        name: 'Home',
        path: "/"
    },
    // {
    //     name: 'Services',
    //     path: "/services"
    // },
     {
        name: 'Resume',
        path: "/resume"
    }
];
const Nav = () => {
    const pathName = usePathname();
    return (
        <nav className='flex gap-8'>
            {Links.map((item: links, index) => {
                return (
                    <Link key={index} href={item.path} className={`${pathName === item.path && "border-accent border-b-2 text-accent"}
                        font-medium hover:text-accent transition-all
                    `}>
                        {item.name}
                    </Link>
                );
            }
            )}

        </nav>
    );
};

export default Nav;