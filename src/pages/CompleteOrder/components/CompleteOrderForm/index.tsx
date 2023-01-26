import { TitleText } from "../../../../components/Typography";
import { SectionTitle } from "../SectionTitle";
import { CompletOrderFormContainer, FormSectionContainer } from "./styles";
import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";

export function CompletOrderForm () {
    const { colors } = useTheme()

    return (
        <CompletOrderFormContainer>
            <TitleText size='xs' color="subtitle">
                Complete seu pedido
            </TitleText>
            <FormSectionContainer >
                <SectionTitle
                    title="Endereço de Entrega"
                    subtitle="Informe o endereço onde deseja receber o pedido"
                    icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
                />
            </FormSectionContainer>
        </CompletOrderFormContainer>
    )
}