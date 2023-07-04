import { styled } from "styled-components";

export const NavBar = styled.nav`
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0.8),
    rgba(250, 250, 250, 0)
  );
  flex-grow: 0;
  height: 5em;
  min-height: 5em;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    color: #49cb8c;
    height: 2em;
    width: auto;
    cursor: pointer;
    margin-right: 1em;
  }

  svg:hover {
    transform: scale(1.1);
    transition: 0.5s linear;
  }
`;
export const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const MovieDataContainer = styled.div`
  // background-color: red;
  height: 270px;
  flex-grow: 0;
  display: flex;
  justify-content: flex-end;
`;

export const MovieData = styled.div`
  // background-color: green;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;

  div {
    display: flex;
    justify-content: flex-start;

    h1 {
      width: fit-content;
      flex-grow: 0;
    }

    div {
      display: flex;
      justify-content: flex-start;
      gap: 0.5em;
      align-items: center;
      flex-grow: 1;
      margin-left: 2em;

      svg {
        width: fit-content;
        height: 1.5em;
        width: auto;
      }
    }
  }

  p {
    font-size: 0.7em;
    width: 80%;
  }

  button {
    width: 6em;
    height: 3em;
    border-radius: 10px;
    background-color: #49cb8c;
    border: none;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1);
    transition: 0.5s linear;
  }

  button > svg {
    color: white;
    height: 2em;
    width: auto;
  }
`;

export const MoviesContainer = styled.div`
  // background-color: blue;
  flex-grow: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;
