import { tv } from "tailwind-variants";
import Image from "next/image";
import { NavLinks } from "./nav-links";

type Props = {
  sideNavProps: {
    isMenuOpen?: boolean;
    linksProps: React.ComponentProps<typeof NavLinks>;
  };
};

const sideNav = tv({
  slots: {
    base: "fixed top-0 bottom-0 left-0 z-50 min-h-screen w-68 overflow-hidden bg-blue-300",
    logo: "flex h-30 items-center justify-center",
    menuContent:
      "flex h-full flex-col items-center justify-between px-4 pt-0 pb-23.5",
  },
});

const { base, menuContent, logo } = sideNav();

export const SideNav = (props: Props) => {
  return (
    <div className={base()}>
      <div className={menuContent()}>
        <div className="">
          <div className={logo()}>
            <Image
              src="/assets/images/starwars.png"
              alt="spirit game logo"
              width={107}
              height={46}
            />
          </div>
          <NavLinks {...props.sideNavProps.linksProps} />
        </div>
      </div>
    </div>
  );
};
