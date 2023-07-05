import { useEffect, useRef } from 'react'
import { Container, MovieImage } from './styles'

type Props = {
  imageURL: string
}

const MovieBanner = ({imageURL}: Props) => {
  const image = useRef<HTMLImageElement>(null)
  const baseURL = "https://image.tmdb.org/t/p/w500/"

  useEffect(() => {
    image.current?.addEventListener('dragstart',(e) => {
      e.preventDefault()
    })
  }, [])
  return (
    <Container>
      <figure>
        <MovieImage ref={image}src={`${baseURL}${imageURL}`} alt="" />
      </figure>
    </Container>
  )
}

export default MovieBanner
