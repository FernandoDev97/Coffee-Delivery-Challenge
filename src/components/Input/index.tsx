import { InputHTMLAttributes } from "react"
import { InputStyleContainer } from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({...props}: InputProps) => {
  return <InputStyleContainer {...props}/>

}

export default Input