"use client"
import Link from 'next/link';
import React from 'react';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { usePathname } from "next/navigation";



const NavigationBar = () => {
    const navigationLinks = [
        { name: 'Admin', href: '' },
        { name: 'Category', href: '/categories' },
        { name: 'Products', href: '/products' },
        { name: 'Users', href: '/users' },
    ];

    const pathname = usePathname();

    return (
        <nav className="text-white flex flex-col items-center py-2 px-4">
            <h1 className="text-xl font-bold text-black dark:text-white mb-7">Admin Panel</h1>

            <Menubar>
                <MenubarMenu>
                    {navigationLinks.map((link) => (
                        <MenubarTrigger key={link.name} className="p-3">
                            <Link href={`/admin${link.href}`}
                                className={`hover:text-gray-400 text-black dark:text-white font-medium ${`/admin${link.href}` === pathname ? 'underline underline-offset-2' : ''} `}>
                                {link.name}
                            </Link>
                        </MenubarTrigger>
                    ))}
                </MenubarMenu>
            </Menubar>


        </nav >
    );
};

export default NavigationBar;