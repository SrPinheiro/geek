/* eslint-disable @typescript-eslint/no-unused-vars */
// Hooks
import {useState, useRef, useEffect} from 'react'

// Styled Components
import { Container } from '../../Components/GlobalComponents/Container'
import { MainContent, MovieDataContainer, MoviesContainer, NavBar } from './Styles'

// Icons
import { BiSearchAlt } from 'react-icons/bi'
import ShowMovieData from '../../Components/Home/ShowMovieData/ShowMovieData';
import { MakeRequest } from '../../Hooks/Requests/MakeRequest';
import MovieList from '../../Components/MovieListComponent.tsx/MovieList';
import { Movie } from '../../Hooks/Requests/MakeRequest';
import MovieScroller from '../../Components/Home/MovieScroller/MovieScroller';

const Home = () => {

  // const [background] = useState<string>(`url(${process.env.PUBLIC_URL}/images/background.jpeg)`)
  const globalContainer = useRef<HTMLDivElement>(null)
  const [popularMovies, setPopularMovies] = useState<Movie[]>()

  const {response, setURL} = MakeRequest()

  useEffect(() => {
    if(response.category === "POPULAR" && response.data){
      setPopularMovies(response.data)
    }
  },[response])

  useEffect(() => {
    setURL({type: "POPULAR"})
  }, [setURL])


  return (
    <Container ref={globalContainer}>
      <NavBar>
        <BiSearchAlt />
      </NavBar>

      <MainContent>
        <MovieDataContainer>
          <ShowMovieData />
        </MovieDataContainer>

        <MoviesContainer>
          <MovieScroller title='Filmes Populares'>
          {popularMovies && <MovieList movies={popularMovies}/>}
          </MovieScroller>

          <MovieScroller title='Filmes Populares'>
          {popularMovies && <MovieList movies={popularMovies}/>}
          </MovieScroller>

          <MovieScroller title='Filmes Populares'>
          {popularMovies && <MovieList movies={popularMovies}/>}
          </MovieScroller>

          <MovieScroller title='Filmes Populares'>
          {popularMovies && <MovieList movies={popularMovies}/>}
          </MovieScroller>
        </MoviesContainer>

      </MainContent>

    </Container>
  )
}

export default Home
