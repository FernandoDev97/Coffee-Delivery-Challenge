import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer'

export interface CartItem extends Coffee {
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[]
    cartQuantity: number
    addCoffeeToCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [activeCoffeeId, setActiveCoffeeId] = useState<number | null>(null)
    const id = cartItems.find((cartItem) => cartItem.id === activeCoffeeId)

    const cartQuantity = cartItems.length
    
    function addCoffeeToCart(coffees: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffees.id)
        // *Conceito de imutabilidade
        if (coffeeAlreadyExistsInCart < 0) {
            setCartItems((state) => [...state, coffees])
            setActiveCoffeeId(coffees.id)
        } else {
            setCartItems(state => state.map((coffee) => {
                if (coffee.id === activeCoffeeId) {
                    return { ...coffee, quantity: coffee.quantity + coffees.quantity }
                } else {
                    return coffee
                }
            }))
        }
        // *Com a biblioteca immer, ignorando os conceitos 
        // const newCart = produce(cartItems, (draft) => {
        //     if (coffeeAlreadyExistsInCart < 0) {
        //         draft.push(coffee)
        //     } else {
        //         draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
        //     }
        // })
        // setCartItems(newCart)
    }

    console.log(cartItems, id?.id)
    return (
        <CartContext.Provider value={{
            cartItems,
            cartQuantity,
            addCoffeeToCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}
