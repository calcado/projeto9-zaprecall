import styled from 'styled-components'
import {useState} from 'react'

export default function Footer(props){



  function Unkown(){
    console.log("olá")
    props.setAnswerNumber(props.answerNumber + 1)
  }
  function Almost(){
    console.log("olá")
    props.setAnswerNumber(props.answerNumber + 1)
  } 
  function Zap(){
    console.log("olá")
    props.setAnswerNumber(props.answerNumber + 1)
  }

  return (
    <Foot>
      <Buttons>
        <Button1 onClick={Unkown}>Não lembrei</Button1>
        <Button2 onClick={Almost}>Quase não lembrei</Button2>
        <Button3 onClick={Zap}>Zap!</Button3>
      </Buttons>
      <span>{props.answerNumber} CONCLUÍDOS</span>
    </Foot>
)
}

const Foot = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;

`

const Buttons = styled.div`
display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;

`
const Button1 = styled.button`
background-color: #FF3030;
width: 85px;
height: 37px;
color: #FFFFFF;

`

const Button2 = styled.button`
background-color: #FF922E;
width: 85px;
height: 37px;
color: #FFFFFF;

`
const Button3 = styled.button`
background-color: #2FBE34;
width: 85px;
height: 37px;
color: #FFFFFF;


`

/* Você vai precisar trocar a cor dos botões e alguns textos!
  VERDE = "#2FBE34"
  AMARELO = "#FF922E"
  VERMELHO = "#FF3030"
  CINZA = "#333333" 
*/
// 