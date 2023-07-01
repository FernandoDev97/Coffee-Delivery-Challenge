import QuantityInput from "../../../../components/QuantityInput"
import { RegularText, TitleText } from "../../../../components/Typography"
import { AddCartWhrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"
import { ShoppingCart } from "phosphor-react"
import { formatMoney } from "../../../../utils/formatMoney"
import { useCart } from "../../../../hooks/useCart"
import { useState } from "react"

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee;
}

const CoffeeCard = ({ coffee }: CoffeeProps) => {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    setQuantity(state => state - 1)
  }

  function handleAddToCart() {
    const coffeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={`/Coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </Tags>
      <Name>
        {coffee.name}
      </Name>
      <Description>
        {coffee.description}
      </Description>
      <CardFooter>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size="m" color='text' as='strong'>{formattedPrice}</TitleText>
        </div>
        <AddCartWhrapper>
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart weight="fill" size={22} />
          </button>
        </AddCartWhrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}

export default CoffeeCard