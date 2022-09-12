import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from "./styles"
import coffeeImageLogo  from '../../assets/Logo.svg'
import {MapPin, ShoppingCart} from 'phosphor-react'

const Header = () => {
  return (
    <HeaderContainer>
        <div className="container">
            <img src={coffeeImageLogo} alt="Logo Coffee Delivery" />
            <HeaderButtonsContainer>
                <HeaderButton variant="purple">
                    <MapPin size={20} weight='fill'/>
                    Porto Alegre, RS
                </HeaderButton>
                <HeaderButton variant="yellow">
                    <ShoppingCart size={20} weight='fill'/>
                </HeaderButton>
            </HeaderButtonsContainer>
        </div>
    </HeaderContainer>
  )
}

export default Header