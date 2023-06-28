
import { Trash } from 'phosphor-react';
import QuantityInput from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from './styles';

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9LmYH1RsX5tde7RR9pturTHPlWl2gWl2Xgi6a9_-fQbPij97Hm09F-z4kKSsUZ59HRKA&usqp=CAU" alt="" />
        <div>
          <RegularText color='subtitle'>
            Expresso tradicional
          </RegularText>
          <ActionsContainer>
            <QuantityInput size='small'/>
            <RemoveButton>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
}
