import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import CoffeeCard from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

const OurCoffees = () => {
  return (
    <OurCoffeesContainer className='container'>
      <TitleText size='l' color='subtitle'>
        Nossos cafés
      </TitleText>
      
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}

export default OurCoffees