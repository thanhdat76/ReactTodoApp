import styled from 'styled-components';

export const Wapper = styled.li`
    background-color: rgb(0, 150, 136);
    padding: 4px 20px 5px 30px;
    border-radius: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    text-align: left;
    p{
        font-size: 1rem;
        text-transform: capitalize;
        flex: 1 1;
    }
    ${'' /* .task-done{
        opacity: 0.5;
        text-decoration: line-through;
    } */}
`
export const Button = styled.button`
    width: 40px;
    height: 40px;
    font-weight: bold;
    font-size: 1em;
    background: transparent;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    :hover{
        background: var(--bg-color);
    }
    @media screen and (max-width: 768px) {
        width: 20px;
        height: 32px;
    }
`