import styled from 'styled-components'
import { useState } from 'react'
import Header from './Header.js'
import ListFlashCards from './ListFlashCards.js'
import Footer from './Footer.js'
import deck from './deck.js'
import GlobalStyle from './globalStyle.js'


export default function App() {
  const [answerNumber, setAnswerNumber] = useState(0)

  const questions = deck.length



  return (

    <Container>
      <GlobalStyle />
      <Header />
      <ListFlashCards
        deck={deck} answerNumber={answerNumber} setAnswerNumber={setAnswerNumber} />
      <Footer

        answerNumber={answerNumber} setAnswerNumber={setAnswerNumber}
        questions={questions}
      />
    </Container>

  )
}

const Container = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;


` 