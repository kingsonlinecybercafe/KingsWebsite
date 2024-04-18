import React from "react";

const sizes = {
  "5xl": "text-[56px] font-medium md:text-5xl sm:text-[42px]",
  "6xl": "text-[64px] font-medium md:text-5xl",
  xs: "text-[10px] font-medium",
  lg: "text-base font-normal",
  s: "text-xs font-normal",
  "2xl": "text-2xl font-normal md:text-[22px]",
  "3xl": "text-[38px] font-normal md:text-4xl sm:text-[34px]",
  "4xl": "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  xl: "text-xl font-medium",
  md: "text-sm font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "lg",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
