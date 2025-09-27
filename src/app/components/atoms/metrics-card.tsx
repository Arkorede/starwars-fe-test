import React from "react";
import { tv } from "tailwind-variants";

type Props = {
  title: string;
  value: number;
  subtitle: string;
  indicatorColor?: string;
};

const metricCard = tv({
  slots: {
    container:
      "relative rounded-[10px] bg-white p-6 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]",
    header: "mb-6 flex items-center justify-between",
    title: "text-base/6 font-bold text-gray-500",
    indicator: "h-6.5 w-6.75 rounded-[5px]",
    value: "text-base/6 font-bold text-gray-500",
    subtitle: "text-[0.5625rem]/6 font-normal text-green-200",
  },
});

export const MetricCard = ({
  title,
  value,
  subtitle,
  indicatorColor,
}: Props) => {
  const {
    container,
    header,
    title: titleClass,
    indicator,
    value: valueClass,
    subtitle: subtitleClass,
  } = metricCard();

  return (
    <div className={container()}>
      <div className={header()}>
        <h3 className={titleClass()}>{title}</h3>
        <div
          className={indicator()}
          style={{ backgroundColor: indicatorColor }}
        />
      </div>
      <div className={valueClass()}>{value}</div>
      <p className={subtitleClass()}>{subtitle}</p>
    </div>
  );
};
