import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-lg",
} as const;
const variants = {
  fill: {
    gray_200_01: "bg-gray-200_01 text-gray-500_02",
    red_500_28: "bg-red-500_28 text-red-500_01",
    green_A700_30: "bg-green-A700_30 text-green-A700",
    blue_800_30: "bg-blue-800_30 text-blue-800",
    purple_500_30: "bg-purple-500_30 text-purple-500_01",
    red_500: "bg-red-500 text-gray-200",
    red_500_23: "bg-red-500_23",
    red_500_02: "bg-red-500_02 text-white-A700",
    lime_500: "bg-lime-500 text-gray-900",
    red_A700: "bg-red-A700 text-gray-50",
  },
  outline: {
    gray_300: "border-gray-300 border border-solid text-gray-700_02",
  },
  gradient: {
    red_500_01_red_500_03: "bg-gradient",
  },
} as const;
const sizes = {
  xl: "h-[64px] px-[35px] text-base",
  sm: "h-[48px] px-[11px]",
  md: "h-[52px] px-[35px] text-base",
  xs: "h-[48px] px-[33px] text-base",
  lg: "h-[56px] px-[35px] text-base",
  "2xl": "h-[39px] px-3.5 text-base",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    href: string;
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "lg",
  color = "red_500_02",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color as keyof (typeof variants)[typeof variant]]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
