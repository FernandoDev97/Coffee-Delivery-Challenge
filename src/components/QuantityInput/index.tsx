import { Minus, Plus } from "phosphor-react"
import { useState } from "react"
import { IconWrapper, QuantityInputContainer } from "./styles"

interface QuantityInputProps {
    size?: 'medium' | 'small'
    onIncrease: () => void
    onDecrease: () => void
    quantity: number
}

const QuantityInput = ({ onIncrease, onDecrease, quantity, size = 'medium' }: QuantityInputProps) => {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
                <Minus weight="fill" size={14} />
            </IconWrapper>
            <input type="number" readOnly value={quantity} />
            <IconWrapper onClick={onIncrease}>
                <Plus weight="fill" size={14} />
            </IconWrapper>
        </QuantityInputContainer>
    )
}

export default QuantityInput