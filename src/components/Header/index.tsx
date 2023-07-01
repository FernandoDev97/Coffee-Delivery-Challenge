import { HeaderContainer, HeaderButtonsContainer, HeaderButton } from "./styles"
import coffeeImageLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useCart } from "../../hooks/useCart"

const Header = () => {
    const { cartQuantity } = useCart()
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to='/'>
                    <img src={coffeeImageLogo} alt="Logo Coffee Delivery" />
                </NavLink>
                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight='fill' />
                        Porto Alegre, RS
                    </HeaderButton>
                    <NavLink to="/completeOrder">
                        <HeaderButton variant="yellow">
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight='fill' />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}

export default Header