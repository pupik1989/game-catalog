import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
       background-color:darkgray;
    }
    &::-webkit-scrollbar-track { 
        background-color: white;
    }
    body{
        font-family: 'Montserrat',sans-serif;
        width:100%;
    }
    input{
        font-family: 'Montserrat',sans-serif;
        font-weight:bold;
    }

    h2{
        font-size:3rem;
        font-family: 'abril Fatface',cursive;
        font-weight:lighter;
        color:#333;
    }
    h3{
        font-size: 1.3rem;
        color:#333;
        padding:1.5rem 0rem;
    }
    p{
        font-size:1.2rem;
        line-height:200%;
        color:#696969;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    img{
        display: block
    }
}
`


export default GlobalStyle