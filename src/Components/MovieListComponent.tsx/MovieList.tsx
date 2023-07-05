
// Styled Components
import MovieBanner from '../MovieBanner/MovieBanner'

// compoenents
import { ScrolledController } from '../ScrolledController/ScrolledController'

// types
import { Movie } from '../../Hooks/Requests/MakeRequest'

type Props = {
  movies: Movie[]
}

const MovieList = ({movies}: Props) => {



  return (
    <ScrolledController>
      {movies.map((movie)=> {
        return <MovieBanner key={movie.id} imageURL={movie.poster_path} />
      })}
    </ScrolledController>
  )
}

export default MovieList
