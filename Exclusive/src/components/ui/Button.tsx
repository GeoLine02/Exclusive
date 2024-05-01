import { ReactNode } from "react"

interface ButtonPropsType {
    children?: ReactNode
    icon?: ReactNode
    align: "vertical" | "horizontal"
    bordered?: boolean
    background: "red" | "none"
    textColor: "light" | "dark"
    type: "submit" | "reset" | "button" | undefined
    className?: string
    
}

const Button = ({children, type, className, icon, align, bordered, background, textColor, } : ButtonPropsType) => {
  return (
    <button type={type} className={`${align === "vertical" ? "flex flex-col justify-center items-center gap-4" : "flex items-center justify-center gap-4"} ${bordered ? "border-gray-300 border-2" : ""} ${background === "red" ? "bg-red-400" : background === "none" && ""} ${textColor === "light" ? "text-white" : textColor === "dark" && "text-black"} ${className} p-4 rounded-md w-full`}>
        {icon}
        {children}
    </button>
  )
}

export default Button