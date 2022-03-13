import styled from 'styled-components';

export const Wapper = styled.div`
    width: 80%;
    max-width: 900px;
    padding: 30px;
    margin: 0 auto;
    background: var(--alt-bg-color);
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 0 20px 0px #00000045;

    @media screen and (max-width: 768px) {
        width: 90%;
        padding: 20px;
    }
`