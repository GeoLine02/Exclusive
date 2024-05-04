import { ChangeEventHandler } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  backgroundColor: string;
  underlined: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
  type,
  placeholder,
  name,
  backgroundColor,
  handleChange,
  underlined,
}: InputProps) => {
  return (
    <input
      className={`${backgroundColor === "gray" ? "bg-gray-200" : backgroundColor === "none" && ""} ${underlined ? "border-b-2 border-gray-300" : !underlined && ""} outline-none`}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
    />
  );
};

export default Input;
