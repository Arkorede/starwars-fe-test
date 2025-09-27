import React from "react";
import { tv } from "tailwind-variants";

type Props = {
  onClick?: () => void;
  type?: "button" | "submit";
  label: string;
  customClass?: string;
  disabled?: boolean;
};

const button = tv({
  base: "bg-primary flex h-12 w-full cursor-pointer items-center justify-center rounded-md text-center text-base/6 font-medium text-white outline-none",
  variants: {
    disabled: {
      true: "cursor-not-allowed brightness-80",
    },
  },
});

export const Button = (props: Props) => {
  const type = props.type ?? "button";

  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={type}
      className={button({ class: props.customClass, disabled: props.disabled })}
    >
      {props.label}
    </button>
  );
};
