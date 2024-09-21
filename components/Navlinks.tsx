import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: ReactNode;
};

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      className={clsx(
        "px-4 py-2 rounded-lg text-sm transition-colors text-gray-950"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}