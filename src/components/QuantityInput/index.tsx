import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { IconWrapper, QuantityInputContainer } from "./styles"

const QuantityInput = () => {
    const [valueCoffee, setValueCoffee] = useState(0)

    
    return (
        <QuantityInputContainer>
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