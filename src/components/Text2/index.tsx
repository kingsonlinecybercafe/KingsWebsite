import React from "react";

const sizes = {
  "5xl": "text-xl font-medium",
  xs: "text-[8px] font-medium",
  lg: "text-xs font-normal",
  s: "text-[10px] font-medium",
  "2xl": "text-sm font-medium",
  "3xl": "text-base font-medium",
  "4xl": "text-lg font-medium",
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
  size = "3xl",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
