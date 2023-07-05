
// Styled Components
import {Container, Header, Title, Rating, Description, PlayButton, Content} from './Styles'

// Icons
import {AiFillStar} from 'react-icons/ai'
import {BiPlay} from 'react-icons/bi'

const ShowMovieData = () => {
  return (
    <Container>
      <Header>
        <Title>Title</Title>
        <Rating>
          {Array(5).fill(0).map((_, index) => (
            <AiFillStar key={index}/>
          ))}
        </Rating>
      </Header>
      <Content>
        <Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum beatae quas libero voluptas ab odio dolorem rerum, ipsam ipsa sequi dolores molestias eveniet architecto neque cum quia assumenda? Obcaecati, quas.</Description>
        <PlayButton title='Assistir trailer'><BiPlay/></PlayButton>
      </Content>

    </Container>
  )
}

export default ShowMovieData
