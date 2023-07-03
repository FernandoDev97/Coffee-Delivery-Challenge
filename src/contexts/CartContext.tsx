import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from 'immer'

export interface CartItem extends Coffee {
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[]
    cartQuantity: number
    carItemsTotal: number
    addCoffeeToCart: (coffee: CartItem) => void
    changeCartIntemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void
    removeCartItem: (cartItemId: number) => void
    cleanCart: () => void
}

interface CartContextProviderProps {
    children: ReactNode
}

const COFFEE_ITEMS_SATORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_SATORAGE_KEY)
        if (storedCartItems) {
            return JSON.parse(storedCartItems)
        }
        return [];
    })
    const cartQuantity = cartItems.length

    const carItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    // const [activeCoffeeId, setActiveCoffeeId] = useState<number | null>(null)

    function addCoffeeToCart(coffees: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === coffees.id)

        // *Conceito de imutabilidade
        // if (coffeeAlreadyExistsInCart < 0) {
        //     setCartItems((state) => [...state, coffees])
        //     setActiveCoffeeId(coffees.id)
        // } else {
        //     setCartItems(state => state.map((coffee, index) => {
        //         if (coffee.id === index) {
        //             return { ...coffee, quantity: coffee.quantity + coffees.quantity }
        //         } else {
        //             return coffee
        //         }
        //     }))
        // }

        // *Com a biblioteca immer
        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistsInCart < 0) {
                draft.push(coffees)
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += coffees.quantity
            }
        })
        setCartItems(newCart)
    }

    function changeCartIntemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCarts = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            )
            if (coffeeExistsInCarts >= 0) {
                const item = draft[coffeeExistsInCarts]
                draft[coffeeExistsInCarts].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
            }
        })

        setCartItems(newCart)
    }

    function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCarts = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            )

            if(coffeeExistsInCarts >= 0) {
                draft.splice(coffeeExistsInCarts, 1)
            }
        })
        setCartItems(newCart)
    }

    function cleanCart() {
        setCartItems([])
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_SATORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider value={{
            cartItems,
            cartQuantity,
            carItemsTotal,
            addCoffeeToCart,
            changeCartIntemQuantity,
            removeCartItem,
            cleanCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
