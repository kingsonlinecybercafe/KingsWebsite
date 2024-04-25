import React from "react";

const shapes = {
  square: "rounded-[0px]",
  circle: "rounded-[50%]",
  round: "rounded-[5px]",
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
  },
  outline: {
    gray_300: "border-gray-300 border border-solid text-gray-700_02",
  },
} as const;
const sizes = {
  sm: "h-[24px] px-0.5",
  "2xl": "h-[39px] px-3.5 text-base",
  lg: "h-[33px] px-3 text-[13px]",
  xs: "h-[14px] px-0.5 text-[8px]",
  md: "h-[28px] px-[5px]",
  xl: "h-[34px] px-[5px]",
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
  }>;
const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "red_500_23",
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
