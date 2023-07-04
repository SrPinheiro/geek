import { styled } from "styled-components";

export const Container = styled.div<{backgroundColor?: string; background?: string; backgroundImage?: string}>`
  display: flex;
  flex-direction: column;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  width: calc(100% - 15em);
  margin-left: 15em;
  min-height: 100vh;
  background: ${props => props.background ? props.background : "auto"};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.backgroundImage ? props.backgroundImage : "auto"};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : "white"};

  *{
    width: 100%;
  }
`
