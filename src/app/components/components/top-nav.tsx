"use client";
import { tv } from "tailwind-variants";
import { Profile } from "../atoms/profile";
import Image from "next/image";
import { Ellipsis } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const topNav = tv({
  slots: {
    base: "sticky top-0 z-40 flex h-18 w-full items-center justify-between bg-white pr-20 pl-6 shadow-[0_2px_6px_0px_rgba(229,229,229,0.3)]",
    left: "flex w-[85%] items-center justify-end border-r border-gray-50 pr-8",
    right: "flex flex-1 items-center justify-between pl-8",
  },
  variants: {
    isBackButton: {
      true: {
        left: "justify-between px-8",
      },
    },
  },
});

export const TopNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  const showBackButton = () => {
    const segments = pathname.split("/").filter((segment) => segment !== "");

    const lastSegment = segments[segments.length - 1];
    const isDetailPage =
      /^[0-9]+$/.test(lastSegment) ||
      /^[0-9a-f-]{36}$/.test(lastSegment) ||
      /^[a-zA-Z0-9_-]+$/.test(lastSegment);

    return isDetailPage && segments.length >= 2;
  };

  const { base, left, right } = topNav({ isBackButton: showBackButton() });

  const handleBack = () => {
    router.back();
  };

  return (
    <div className={base()}>
      <div className={left()}>
        {showBackButton() && (
          <button
            onClick={handleBack}
            className="flex cursor-pointer items-center justify-center text-base/4 text-gray-200"
          >
            <ChevronLeft />
            Back
          </button>
        )}
        <Image
          src="/assets/icons/notifications_icon.svg"
          alt="notification_icon"
          width={24}
          height={24}
        />
      </div>
      <div className={right()}>
        <Profile name="John Doe" />
        <Ellipsis className="text-gray-80" />
      </div>
    </div>
  );
};
