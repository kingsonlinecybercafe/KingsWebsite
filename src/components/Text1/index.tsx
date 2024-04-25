import React from "react";

const sizes = {
  "5xl": "text-2xl font-medium md:text-[22px]",
  xs: "text-[8px] font-medium",
  lg: "text-xs font-normal",
  s: "text-[10px] font-normal",
  "2xl": "text-base font-medium",
  "3xl": "text-lg font-medium",
  "4xl": "text-xl font-medium",
  xl: "text-[13px] font-medium",
  md: "text-[11px] font-normal",
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
    <Component className={`text-gray-600_02 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
