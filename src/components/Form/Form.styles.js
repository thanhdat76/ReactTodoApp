import styled from 'styled-components';

export const Wapper = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 70% 29%;
    gap: 1%; 
    margin-bottom: 40px;
    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 20px;
    }
`
export const Input = styled.input`
    padding: 12px 20px;
    outline: none;
    border: none;
    background-color: #eee;
    border-radius: 10px;
    font-size: 0.9rem;
    font-family: inherit;
`