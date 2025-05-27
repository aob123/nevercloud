"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Adjust the import based on your Next.js version
import { Url } from "next/dist/shared/lib/router/router";

type INavbarProps = object;

const navItems = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
  {
    id: "blog",
    label: "Blog",
    href: "/blog",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
];

const Navbar: React.FC<INavbarProps> = () => {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  return (
    <nav className="flex justify-between items-center p-6 bg-black font-mono text-white sticky top-0 z-50">
      <div className="text-lg font-bold">Nevercloud</div>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`${
                isActive(item.href) ? "text-lime-500" : ""
              } hover:text-lime-300`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
