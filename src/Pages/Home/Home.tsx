// Hooks
import {useState} from 'react'
// styles
import styles from "./Home.module.css";

// Styled Components
import { Container } from '../../Components/GlobalComponents/Container'
import { MainContent, MovieData, MovieDataContainer, MoviesContainer, NavBar } from './Styles'

// Icons
import { BiSearchAlt } from 'react-icons/bi'
import {BiPlay} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'

type Props = {}

const Home = (props: Props) => {

  const [background, setBackground] = useState<string>(`url(${process.env.PUBLIC_URL}/images/background.jpeg)`)

  return (
    <Container backgroundImage={background}>
      <NavBar>
        <BiSearchAlt />
      </NavBar>

      <MainContent>
        <MovieDataContainer>
          <MovieData>
            <div>
              <h1>Title</h1>
              <div>
                {Array(5).fill(0).map((_, index) => (
                  <AiFillStar key={index}/>
                ))}
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt a rerum maxime similique sit laudantium? Nihil animi, aliquam adipisci nesciunt quidem eligendi blanditiis quia quas fuga cupiditate reprehenderit quaerat ipsum!</p>
            <button title='Assistir trailer'><BiPlay/></button>
          </MovieData>

        </MovieDataContainer>
        <MoviesContainer>

        </MoviesContainer>

      </MainContent>

    </Container>
  )
}

export default Home
