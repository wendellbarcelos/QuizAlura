import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Widget.Input type="text" placeholder="Diz ai seu nome para jogar!"></Widget.Input> 
            <Widget.ButtonLink>JOGAR</Widget.ButtonLink>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>Dá uma olhada nesse quizes incríveis que o pessoa da Imersão React fez:</p>
            <Widget.Link href="https://github.com/LucasKetelhut/aluraQuiz" target="_blank">LucasKetelhut/aluraQuiz</Widget.Link>
            <Widget.Link href="https://github.com/LeonardoT07/aluraquiz-coffee" target="_blank">LeonardoT07/aluraquiz-coffee</Widget.Link>
            <Widget.Link href="https://github.com/TheeDouglasAM3/pato-quiz-nextjs" target="_blank">TheeDouglasAM3/pato-quiz-nextjs</Widget.Link>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/wendellbarcelos" />
    </QuizBackground>
  );
}