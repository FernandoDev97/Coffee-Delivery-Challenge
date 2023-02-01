import { PaymentMethodContainer } from "./styles"
import { CreditCard } from "phosphor-react"

export const PaymentMethodInput = () => {
  return (
    <PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </PaymentMethodContainer>
  )
}
