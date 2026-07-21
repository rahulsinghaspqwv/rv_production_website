"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "../ui/Logo";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-5">
        <nav className="mt-5 flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-black/45 px-7 backdrop-blur-2xl">

          <Logo />

          <div className="hidden items-center gap-10 lg:flex">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium tracking-wide text-zinc-300 transition hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <button className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-500">
              Hire Me
            </button>
          </div>

          <button className="rounded-xl border border-white/10 p-3 text-white lg:hidden">
            <Menu size={24} />
          </button>

        </nav>
      </div>
    </header>
  );
}