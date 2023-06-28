import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 0.75rem 2.8rem;
    color: ${({theme}) => theme.colors['base-white']};
    background: ${({theme}) => theme.colors['brand-yellow']};
    font-size: ${({theme}) => theme.textSizes['components-button-g']};
    font-weight: 700;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;
    margin-top: 0.7rem;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    &:not(:disabled):hover {
        background: ${({theme}) => theme.colors['brand-yellow-dark']};
    }
`;
