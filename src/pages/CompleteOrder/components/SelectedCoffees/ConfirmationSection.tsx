import { Button } from "../../../../components/Button"
import { RegularText } from "../../../../components/Typography"
import { ConfirmationSectionContainer } from "./styles"

export const ConfirmationSection = () => {
  return (
    <ConfirmationSectionContainer>
        <div>
            <RegularText size="s">Total de itens</RegularText>
            <RegularText>R$ 9,90</RegularText>
        </div>
        <div>
            <RegularText size="s">Entrega</RegularText>
            <RegularText>R$ 3,50</RegularText>
        </div>
        <div>
            <RegularText weigth="700" color="subtitle" size="l">Total</RegularText>
            <RegularText weigth="700" color="subtitle" size="l">R$ 29,90</RegularText>
        </div>
        <Button text="Confirmar Pedido"/>
    </ConfirmationSectionContainer>
  )
}
