import { ReactNode } from "react"


interface FormPropsType {
    children: ReactNode
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    align: "horizontal" | "vertical"
    className?: string
}

const Form = ({children, onSubmit, className, align} : FormPropsType) => {
  return (
    <form onSubmit={onSubmit} className={`${className} ${align === "horizontal" ? "flex items-center justify-center gap-4" : align === "vertical" ? "flex flex-col justify-center" : ""}`}>
        {children}
    </form>
  )
}

export default Form