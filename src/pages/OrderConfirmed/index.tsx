import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedContainer, OrderDetialsConteiner } from './styles';
import orderConfirmedImage from '../../assets/Illustration.svg'
import InfoWithIcon from '../../components/InfoWithIcon';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderData } from '../CompleteOrder';
import { paymentMethods } from '../CompleteOrder/components/CompleteOrderForm/PaymentMethodsOptions';
import { useEffect } from 'react';

interface LocationType {
  state: OrderData
}

export function OrderConfirmedPage() {
  const { colors } = useTheme()
  const navigate = useNavigate()

  const { state } = useLocation() as unknown as LocationType

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state])

  if (!state) return <></>

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
                Entrega em <strong>{state.street}, {state.number} - {state?.complement}</strong> <br />
                {state.district} - {state.city}, {state.uf}
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
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            } />
        </OrderDetialsConteiner>
        <img src={orderConfirmedImage} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
