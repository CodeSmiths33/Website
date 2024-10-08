"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLink from "./Navlinks";
import { Fragment } from "react";
import clsx from "clsx";

import { Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";

const links = [
  { label: "Introduction", href: "/introduction" },
  { label: "Video demo", href: "/video-demonstration" },
  { label: "Prototype", href: "/prototype" },
  { label: "Resources", href: "/resources" },
  { label: "Team", href: "/team" },
];

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic sub-pages

  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null); // Typing the ref

  // Function to close the popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="md:mt-6">
      <nav className="mx-auto flex max-w-[700px] items-center justify-between gap-3 px-4 py-3 md:px-6">
        <Link href="/" className="flex-shrink-0">
          <span className="text-2xl font-bold">CodeSmiths</span>
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Popover className="relative md:hidden" ref={popoverRef}>
      <PopoverButton
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-8 w-8 items-center justify-center rounded-lg text-secondary"
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="20" rx="10"></rect>
          <rect y="30" width="100" height="20" rx="10"></rect>
          <rect y="60" width="100" height="20" rx="10"></rect>
        </svg>
      </PopoverButton>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel className="absolute right-0 z-10 mt-2 w-40 origin-top-right overflow-auto rounded-xl bg-gray-300 p-2 text-base shadow-soft focus:outline-none sm:text-sm">
          <div className="grid">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-md px-4 py-2 transition-colors hover:text-primary",
                  pathname === link.href
                    ? "bg-secondary font-medium"
                    : "font-normal"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
      </nav>
    </header>
  );
}
