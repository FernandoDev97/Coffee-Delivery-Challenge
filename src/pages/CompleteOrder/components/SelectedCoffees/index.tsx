import { ReactNode } from 'react';

import { DetailsContainer, SelectedCoffeesContainer } from './styles';
import { TitleText } from '../../../../components/Typography';
import { CoffeeCartCard } from '../CoffeeCartCard';
import { ConfirmationSection } from './ConfirmationSection';

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size='xs' color='subtitle'>
        Café selecionandos
      </TitleText>
      <DetailsContainer>
        <CoffeeCartCard/>
        <ConfirmationSection/>
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
