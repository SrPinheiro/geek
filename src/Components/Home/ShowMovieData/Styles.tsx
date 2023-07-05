import { styled } from "styled-components";

export const Container = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
`;
export const Title = styled.h1`
  width: fit-content;
  flex-grow: 0;
`;

export const Rating = styled.div`
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
    color: gold
  }
`;

export const Description = styled.p`
  font-size .7em;
  width: 80%;
`;

export const PlayButton = styled.button`
  width: 6em;
  height: 3em;
  border-radius: 10px;
  background-color: #49cb8c;
  border: none;
  cursor: pointer;
  margin-top: 1.5em;

  svg {
    color: white;
    height: 2em;
    width: auto;
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.5s linear;
  }
`;

export const Content = styled.div``;
