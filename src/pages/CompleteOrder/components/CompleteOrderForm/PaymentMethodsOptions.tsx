import { PaymentMethodInput } from "../PaymentMethodInput"
import { PaymentMethodsOptionsContainer } from "./styles"

export const PaymentMethodsOptions = () => {
  return (
    <PaymentMethodsOptionsContainer>
        <PaymentMethodInput/>
        <PaymentMethodInput/>
        <PaymentMethodInput/>
    </PaymentMethodsOptionsContainer>
  )
}
