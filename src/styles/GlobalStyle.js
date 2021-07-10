import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #0477BF;
  --secondary-color: #2E9AA6;
  --background-dark-color: #0477BF;
  --border-color: #8C3503;
  --background-light-color: #0596F1;
  --white-color: #FFF;
  --font-light-color: #F0894D;
  --font-dark-color: #ED5A05;
  --font-dark-color-2: #BA4704; 
  --font-dark-color-3: #6E3E23;
  --sidebar-dark-color: #2E9AA6;
}

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    font-size: 1.2rem;
  }

  body {
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
  }

  a {
    font-weight: 900;
    font-family: inherit;  
    color: var(--font-dark-color-3);
    font-size: inherit;
  }

  footer{
    color: var(--font-dark-color-3);
  }
`;

export default GlobalStyle;