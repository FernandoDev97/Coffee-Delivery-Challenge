 import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { IconWrapper, QuantityInputContainer } from "./styles"

interface QuantityInputProps {
    size?: 'medium' | 'small'
}

const QuantityInput = ({size = 'medium'}: QuantityInputProps) => {
    const [valueCoffee, setValueCoffee] = useState(0)    
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper>
                <Minus weight="fill" size={14} onClick={() => {
                    if (valueCoffee >= 1) {
                        setValueCoffee(valueCoffee - 1)
                    }
                }
                } />
            </IconWrapper>
            <input type="number" readOnly value={valueCoffee} />
            <IconWrapper>
                <Plus weight="fill" size={14} onClick={() => setValueCoffee(valueCoffee + 1)} />
            </IconWrapper>
        </QuantityInputContainer>
    )
}

export default QuantityInput