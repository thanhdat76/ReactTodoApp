import styled from 'styled-components';

export const Wapper = styled.button`
    cursor: pointer;
    background-color: var(--primary-color);
    padding: 10px 30px;
    border-radius: 10px;
    border: none;
    font-size: 0.9rem;
    font-weight: 500;
    font-family: inherit;
    color: var(--font-color);
    :hover{
        background-color: #21abbb;
    }
    @media screen and (max-width: 768px) {
        padding: 8px 20px;
    }
`