"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { tv } from "tailwind-variants";
import { usePathname } from "next/navigation";

type Props = {
  id: number;
  icon: string;
  label: string;
  href: string[] | string;
};

const navItem = tv({
  slots: {
    base: "flex items-center gap-x-4 pl-6",
    text: "text-base/6 font-semibold text-white",
    iconClass: "h-4.5 w-4.5",
  },
  variants: {
    active: {
      true: {
        base: "bg-primary flex h-12 w-58 items-center rounded-sm",
        text: "text-white",
      },
    },
  },
});

const matchesRoute = (pathname: string, route: string): boolean => {
  if (pathname === route) return true;

  if (route.includes(":")) {
    const regexPattern = route
      .replace(/:[^/]+/g, "[^/]+")
      .replace(/\//g, "\\/");

    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(pathname);
  }

  return false;
};

export const NavItem = (props: Props) => {
  const pathname = usePathname();
  const clicked = Array.isArray(props.href)
    ? props.href.some((route) => matchesRoute(pathname, route))
    : matchesRoute(pathname, props.href);

  const topMargin = props.id === 2 ? "mt-8" : "mt-0";

  const { base, text, iconClass } = navItem({ active: clicked });

  const navigationHref = Array.isArray(props.href) ? props.href[0] : props.href;

  return (
    <Link href={navigationHref}>
      <div className={base({ className: topMargin })}>
        <Image
          src={props.icon}
          alt={props.label}
          className={iconClass()}
          width={18}
          height={18}
        />
        <span className={text()}>{props.label}</span>
      </div>
    </Link>
  );
};
