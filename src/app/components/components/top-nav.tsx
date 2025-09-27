import { tv } from "tailwind-variants";
import { Profile } from "../atoms/profile";
import Image from "next/image";
import { Ellipsis } from "lucide-react";

const topNav = tv({
  slots: {
    base: "sticky top-0 z-40 flex h-18 w-full items-center justify-between bg-white pr-20 pl-6 shadow-[0_2px_6px_0px_rgba(229,229,229,0.3)]",
    left: "flex w-[85%] items-center justify-end border-r border-gray-50 pr-8",
    right: "flex flex-1 items-center justify-between pl-8",
  },
});

const { base, left, right } = topNav();

export const TopNav = () => {
  return (
    <div className={base()}>
      <div className={left()}>
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
