import {styled} from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 17em;
  gap: 3.5em;
  overflow-x: overlay;
  height: 17em;

  &::-webkit-scrollbar {
    background-color: transparent;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }


  *{
    user-select: none;
  }

`
