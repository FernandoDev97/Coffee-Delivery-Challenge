import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedContainer, OrderDetialsConteiner } from './styles';
import orderConfirmedImage from '../../assets/Illustration.svg'
import InfoWithIcon from '../../components/InfoWithIcon';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function OrderConfirmedPage() {
  const { colors } = useTheme()

  return (
    <OrderConfirmedContainer className='container'>
      <div>
        <TitleText size='l'>
          Uhu! Pedido confirmado
        </TitleText>
        <RegularText size='l' color='subtitle'>
          Agora é só aguardar que logo o pedido chegará até você!
        </RegularText>
      </div>

      <section>
        <OrderDetialsConteiner>
          <InfoWithIcon
            icon={<MapPin
              weight='fill' />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em <strong>Rua José do Vale, 330</strong> <br />
                Pajuçara - Maracanaú, CE
              </RegularText>
            } />
          <InfoWithIcon
            icon={<Clock
              weight='fill' />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega  <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            } />
          <InfoWithIcon
            icon={<CurrencyDollar
              weight='fill' />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega  <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            } />
        </OrderDetialsConteiner>
        <img src={orderConfirmedImage} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
