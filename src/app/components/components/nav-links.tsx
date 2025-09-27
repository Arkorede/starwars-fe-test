import React from "react";
import { tv } from "tailwind-variants";
import { NavItem } from "../atoms/nav-item";

type Props = {
  navLinksProps: React.ComponentProps<typeof NavItem>[];
};

const navLinks = tv({
  base: "flex flex-col items-start gap-y-10",
});

export const NavLinks = (props: Props) => {
  return (
    <div className={navLinks()}>
      {props.navLinksProps.map((link) => {
        return <NavItem {...link} key={link.id} />;
      })}
    </div>
  );
};
