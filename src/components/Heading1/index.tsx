import React from "react";

const sizes = {
  xl: "text-xl font-semibold",
  s: "text-sm font-semibold",
  md: "text-[15px] font-semibold",
  xs: "text-[8px] font-semibold",
  lg: "text-base font-semibold",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "xl",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-700_02 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
