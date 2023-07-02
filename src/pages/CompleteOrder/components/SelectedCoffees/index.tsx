import { ReactNode } from 'react';

import { DetailsContainer, SelectedCoffeesContainer } from './styles';
import { TitleText } from '../../../../components/Typography';
import { CoffeeCartCard } from '../CoffeeCartCard';
import { ConfirmationSection } from './ConfirmationSection';
import { useCart } from '../../../../hooks/useCart';

export function SelectedCoffees() {
  const { cartItems } = useCart()
  return (
    <SelectedCoffeesContainer>
      <TitleText size='xs' color='subtitle'>
        Café selecionandos
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item}/>
        ))}
        
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
