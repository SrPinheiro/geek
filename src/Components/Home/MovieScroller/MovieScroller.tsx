import React from 'react'
import {SliderContainer, Title} from './styles'

type Props = {
  title: string,
  children: React.ReactNode
}

const MovieScroller = ({title, children}: Props) => {
  return (
    <SliderContainer>
      <Title>{title}</Title>
      {children}
    </SliderContainer>
  )
}

export default MovieScroller
