import React from 'react'
import styled from 'styled-components'
import icon from '../assets/img/seta_play.png'
import FlashCard from './FlashCard.js'

export default function ListFlashCards(props){
    
  return(
    <ContainerQuestion>
      
        <PerguntaFechada >
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
        </PerguntaFechada>

        
        
       
    </ContainerQuestion>
    )

}

const ContainerQuestion = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-content: center;
margin-top: 58px;
button{
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
}

`

const QuestionButton = styled.button`

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
  
`
const PerguntaFechada = styled.button`
width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;}

`