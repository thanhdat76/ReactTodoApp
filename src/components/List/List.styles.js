import styled from 'styled-components';

export const Wapper = styled.ul`
    list-style: none;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: var(--font-color);
    max-height: 400px;
    overflow-y: auto;
    @media screen and (max-width: 768px) {
        padding: 0 6px 0 0;
    }
    h3{

        font-family: Comic Sans MS;
        color: black;
    }
`