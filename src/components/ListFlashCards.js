import React from 'react'
import styled from 'styled-components'
import FlashCard from './FlashCard.js'

export default function ListFlashCards({ deck, answerNumber, setAnswerNumber }) {

  return (
    <ContainerQuestion>
      {deck.map((obj, i) => (
        <FlashCard key={i} index={i} question={obj.question} answer={obj.answer} answerNumber={answerNumber} setAnswerNumber={setAnswerNumber} />))}


    </ContainerQuestion>
  )

}

const ContainerQuestion = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: center;
margin-top: 58px;


`
