"use client";
import React from "react";

import { links } from "@/app/constants/links";
import { SideNav } from "@/app/components/components/side-nav";
import { TopNav } from "@/app/components/components/top-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <SideNav
        sideNavProps={{
          linksProps: {
            navLinksProps: links,
          },
        }}
      />
      <div className="flex w-[calc(100vw-17rem)] flex-1 flex-col">
        <TopNav />
        <main className="flex-1 overflow-auto bg-white">{children}</main>
      </div>
    </div>
  );
}
