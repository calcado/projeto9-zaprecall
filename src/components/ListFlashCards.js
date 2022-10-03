import React from 'react'
import styled from 'styled-components'
import icon from '../assets/img/seta_play.png'
import FlashCard from './FlashCard.js'

export default function ListFlashCards(props){
  const deck = props.deck
   
  
  console.log(deck)
  return(
    <ContainerQuestion>
        {deck.map((obj, i) => (
        <FlashCard key = {i} index = {i+1} question ={obj.question} answer={obj.answer} /> ))}
        


        {/* <PerguntaFechada >
        <p>Pergunta 1</p>
        <img src={icon}/>
        </PerguntaFechada>

        <PerguntaFechada >
        <p>Pergunta 2</p>
        <img src={icon}/>
        </PerguntaFechada>

        <PerguntaFechada >
        <p>Pergunta 3</p>
        <img src={icon}/>
        </PerguntaFechada>

        <PerguntaFechada >
        <p>Pergunta 4</p>
        <img src={icon}/>
        </PerguntaFechada>

        <PerguntaFechada >
        <p>Pergunta 5</p>
        <img src={icon}/>
        </PerguntaFechada>

        <PerguntaFechada >
        <p>Pergunta 6</p>
        <img src={icon}/>
        </PerguntaFechada>

        <PerguntaFechada >
        <p>Pergunta 7</p>
        <img src={icon}/>
        </PerguntaFechada>

        <PerguntaFechada >
        <p>Pergunta 8</p>
        <img src={icon}/>
        </PerguntaFechada> */}
        
       
    </ContainerQuestion>
    )

}

const ContainerQuestion = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: center;
margin-top: 58px;
/* button{
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color :#FFFFFF ;
  margin-bottom: 25px;
  width : 300px;
  height: 65px;
  border-radius: 5px;
  padding:5px
  
  p{width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 14px;
    color: #333333;
    };
} */

`
