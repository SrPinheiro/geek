import { styled } from "styled-components";

export const Container = styled.div<{backgroundColor?: string; background?: string; backgroundimage?: string}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 15em);
  max-width: calc(100% - 15em);

  margin-left: 15em;
  min-height: 100vh;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #555;

  *{
    width: 100%;
  }
`
