"use client";
import Link from "next/link";
import {Menu} from "lucide-react";
import Logo from "../ui/Logo";

import { usePathname } from "next/navigation";
import clsx from "clsx";

const pathname = usePathname();

const links=[
    {
        name: "Home",
        href:"/",
    },
    {
        name:"Projects",
        href:"/projects",
    },
    {
        name:"About",
        href:"/about",
    },
    {
        name:"Contact",
        href:"/contact",
    },
];

export default function Navbar(){
    return(
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto max-w-[1450px] px-5">
                <nav className="mt-5 flex h-16 lg:h-20 items-center justify-between rounded-2xl border border-white/1- bg-zinc-950/65 px-7 backdrop-blur-3xl">
                    <Logo />
                    <div className="hidden items-center gap-10 lg:flex">
                        {links.map((item)=>(
                            <Link
                                key={item.href}
                                href={item.href}
                                className={clsx("realtive py-2 text-sm font-medium transition-all duration-300", pathname===item.href ? "text-white" : "text-zinc-400 hover:text-white")}>
                                {item.name}
                                <span
                                    className={clsx("absolute left-0 -bottom-1 h-[2px] rounded-full bg-red-500 transition-all duration-300", pathname===item.href ? "w-full" : "w-0 group-hover:w-full"
                                    )}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="hidden lg:block">
                        <button className="
                                group
                                relative
                                overflow-hidden
                                rounded-xl
                                bg-red-600
                                px-6
                                py-3
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:bg-red-500
                                hover:shadow-[0_0_30px_rgba(239,68,68,.45)]">
                            Hire Me 
                        </button>
                    </div>
                    <button className="rounded-xl border border-white/10 p-3 text-white lg:hidden">
                        <Menu size={24}/>
                    </button>
                </nav>
            </div>
        </header>
    );
}