import { MouseEventHandler, ReactNode } from "react";

interface ButtonPropsType {
  children?: ReactNode;
  icon?: ReactNode;
  align: "vertical" | "horizontal" | "default";
  bordered?: boolean;
  background?: "red";
  textColor: "light" | "dark";
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button = ({
  children,
  type,
  className,
  icon,
  align,
  bordered,
  background,
  textColor,
  onClick,
}: ButtonPropsType) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`
        ${align === "vertical" && "flex flex-col justify-center items-center gap-4"}
        ${align === "horizontal" && "flex items-center justify-center gap-4"}
        ${align === "default" && ""}
        ${bordered && "border-gray-300 border-2"}
        ${background === "red" && "bg-[#DB4444]"}
        ${textColor === "light" && "text-white"}
        ${textColor === "dark" && "text-black"}
        ${className} p-4 rounded-md w-full
        `}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
