"use client";
import React from 'react';
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuFries } from "react-icons/ci";

interface links {
    name: string,
    path: string;
}
const Links: links[] = [
    {
        name: 'Home',
        path: "/"
    }, {
        name: 'Resume',
        path: "/resume"
    }
];
const MobileNav = () => {
    const pathName = usePathname();
    return (
        <Sheet>
            <SheetTrigger><CiMenuFries className='text-[32px] text-accent' /></SheetTrigger>
            <SheetContent className='flex flex-col bg-primary'>
                <SheetHeader>
                    <SheetTitle className='mt-32 mb-40 text-center text-2xl'>
                        <Link className='text-4xl font-semibold' href={'/'}>
                            Pradep<span className='text-accent'>.</span>
                        </Link>
                    </SheetTitle>
                    <SheetDescription>

                        <span className='flex flex-col justify-center items-center gap-8'>
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

                        </span>

                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>


    );
};

export default MobileNav;