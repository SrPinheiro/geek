import {styled} from 'styled-components'


export const Container = styled.div`

`

export const MovieImage = styled.img`
  height: 13em;
  width: 10em;
  object-fit: cover;
  no-select: none;

  &:hover{
    transform: scale(1.3);
    transition: .5s ease-in-out;
  }
`
