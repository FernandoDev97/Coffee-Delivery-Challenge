import { TitleText } from "../../../../components/Typography";
import { CompletOrderFormContainer, FormSectionContainer } from "./styles";

export function CompletOrderForm () {
    return (
        <CompletOrderFormContainer>
            <TitleText size='xs' color="subtitle">
                Complete seu pedido
            </TitleText>
            <FormSectionContainer >
                <div>Teste</div>
            </FormSectionContainer>
        </CompletOrderFormContainer>
    )
}