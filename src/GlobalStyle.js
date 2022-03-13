import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --maxWidth: 1280px;

        --bg-color: #fe938b;
        --alt-bg-color: #ee7766;
        --title-color: #003950;
        --primary-color: #008e9f;

        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        padding: 60px 0;
        background: var(--bg-color);
        ${'' /* background: linear-gradient(90deg, #fed586 0%, #fe938b 100%); */}
    }
    ::-webkit-scrollbar {
        width: 0.5rem;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #00b3b3;
        outline: 0px inset #7fffd4;
        border-radius: 10px;
        height: 50px;
    }
    .active{
        background-color: #69bec8;
    }
`