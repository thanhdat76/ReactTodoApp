import styled from 'styled-components';

export const Text = styled.div`
    text-align: center;
    margin-bottom: 20px;
    h1{
        font-size: var(--fontSuperBig);
        color: var(--title-color);

        @media screen and (max-width: 768px){
            font-size: var(--fontMed);
        }
    }

`