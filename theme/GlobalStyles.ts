import { createGlobalStyle } from "styled-components";

const GloalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* word-break: break-all; */
}
  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  h1 {
    line-height: 60px;
    font-size: 3rem;
  }
  
  h2 {
    font-size: 1.8rem;
    line-height: 35px;
  }

  body {
    width: 100%;
  }

  @media (min-width: 37.3rem) {
    h1 {
    line-height: 84px;
    font-size: 3.8rem;
    }
    
    h2 {
      font-size: 2.2rem;
      line-height: 47px;
    }
  }
`

export default GloalStyles