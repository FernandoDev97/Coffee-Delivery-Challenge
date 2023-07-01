
import { Trash } from 'phosphor-react';
import QuantityInput from '../../../../components/QuantityInput';
import { RegularText } from '../../../../components/Typography';
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from './styles';
import { CartItem } from '../../../../contexts/CartContext';
import { formatMoney } from '../../../../utils/formatMoney';
import { useCart } from '../../../../hooks/useCart';

interface CoffeeCartCard {
  coffee: CartItem
}

export function CoffeeCartCard({coffee}: CoffeeCartCard) {
  const {changeCartIntemQuantity, removeCartItem} = useCart()
  const coffeeTotalPrice = coffee.price * coffee.quantity
  const formattedPrice = formatMoney(coffeeTotalPrice)

  function handleIncrease() {
    changeCartIntemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartIntemQuantity(coffee.id, 'decrease')
  }

  function handleRemoveCartItem() {
    removeCartItem(coffee.id)
  }

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/Coffees/${coffee.photo}`} alt="" />
        <div>
          <RegularText color='subtitle'>
            {coffee.name}
          </RegularText>
          <ActionsContainer>
            <QuantityInput onDecrease={handleDecrease} onIncrease={handleIncrease} size='small' quantity={coffee.quantity}/>
            <RemoveButton onClick={handleRemoveCartItem}>
              <Trash size={16}/>
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>{formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}
