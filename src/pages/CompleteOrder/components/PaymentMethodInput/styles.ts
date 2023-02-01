import styled from "styled-components";

export const PaymentMethodContainer = styled.div `
    padding: 0 1rem;
    background: ${({theme}) => theme.colors["base-button"]};
    color: ${({theme}) => theme.colors["base-text"]};
    font-size: 0.75rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    text-transform: uppercase;
    border-radius: 6px;
    height: 3rem;
    border: 1px solid ${({theme}) => theme.colors["base-button"]};
    transition: .4s;
    user-select: none;
    &:hover {
        background: ${({theme}) => theme.colors["base-hover"]};
    }
    svg {
        color: ${({theme}) => theme.colors["brand-purple"]};
    }
`