import styled from 'styled-components';

export const Wapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
    margin: 0 auto 40px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: 0 auto 20px;

        button{
            width: 50%;
        }
    }
`