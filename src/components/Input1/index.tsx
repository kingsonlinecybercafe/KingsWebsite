import React from "react";

const shapes = {
  square: "rounded-[0px]",
  round: "rounded",
} as const;
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-gray-500_01",
  },
  underline: {
    gray_300: "border-b border-gray-300 border-solid",
  },
  outline: {
    gray_300: "border-gray-300 border border-solid",
  },
} as const;
const sizes = {
  xs: "h-[33px] pl-[13px] pr-[35px] text-[11px]",
  sm: "h-[33px] pl-[13px] pr-[35px] text-base",
  md: "h-[36px] pl-[3px] pr-[35px] text-base",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "md",
      color = "gray_300",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <label
          className={`${className} flex items-center justify-center cursor-text  ${(shape && shapes[shape]) || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </label>
      </>
    );
  },
);

export { Input };
