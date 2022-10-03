import { useState } from 'react'
import styled from 'styled-components'
import play from '../assets/img/seta_play.png'
import turn from '../assets/img/seta_virar.png'
import certo from '../assets/img/icone_certo.png'
import quase from '../assets/img/icone_quase.png'
import erro from '../assets/img/icone_erro.png'

export default function FlashCard({ index, question, answer, answerNumber, setAnswerNumber }) {
    const icons = [play, turn, certo, erro, quase]
    const [text, setText] = useState("Pergunta " + (index + 1))
    const [icon, setIcon] = useState(icons[0])
    const [virado, setVirado] = useState(false)
    const [color, setColor] = useState("#333333")


    function Unkown(index) {
        setText("Pergunta " + (index + 1))
        const newNumber = answerNumber + 1
        setAnswerNumber(newNumber)
        setVirado(false)
        setIcon(icons[3])
        setColor("#FF3030")

    }
    function Almost(index) {
        setText("Pergunta " + (index + 1))
        const newNumber = answerNumber + 1
        setAnswerNumber(newNumber)
        setVirado(false)
        setIcon(icons[4])
        setColor("#FF922E")
    }
    function Zap(index) {
        setText("Pergunta " + (index + 1))
        const newNumber = answerNumber + 1
        setAnswerNumber(newNumber)
        setVirado(false)
        setIcon(icons[2])
        setColor("#2FBE34")
    }


    function virarCarta() {

        if (icon === icons[0]) {
            setVirado(true)
            setText(question)
            setIcon(icons[1])
        }
        if (icon === icons[1]) {
            setVirado(true)
            setText(answer)
            setIcon('')
        }

    }

    return (
        <FlashCardLayout onClick={(() => virarCarta())} virado={virado} icon={icon} color={color}>
            <p key={''}>{text}</p>
            <img src={icon} alt="" />

            <Buttons icon={icon}>
                <Button1 onClick={() => Unkown(index)}>Não lembrei</Button1>
                <Button2 onClick={() => Almost(index)}>Quase não lembrei</Button2>
                <Button3 onClick={() => Zap(index)}>Zap!</Button3>
            </Buttons>

        </FlashCardLayout>
    )

}

const FlashCardLayout = styled.button`

  display:flex;
  flex-direction: ${props => props.icon === "" ? "column" : "initial"};
  justify-content:${props => props.virado ? "flex-start" : "space-between"};
  align-items: ${props => props.virado ? "initial" : "center"};
  background-color:${props => props.virado ? "#FFFFD5" : "#FFFFFF"} ;
  margin-bottom: 25px;
  width : 300px;
  min-height: ${props => props.virado ? "100px" : "65px"} ;
  border-radius: 5px;
  padding:15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  margin: 12px;
  position:relative;
  p{font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: ${props => props.color !== "#333333" ? "line-through" : "none"};
    color: ${props => props.color};
    text-align: ${props => props.virado ? "left" : "center"};
    };
    img{
        position:${props => props.virado ? "absolute" : "initial"}; 
        bottom: 10px;
        right: 10px;
    }
    
`
const Buttons = styled.div`
display: ${props => props.icon === "" ? "flex" : "none"};

    width: 100%;
    justify-content: space-between;
    margin-top: 25px;
    
`
const Button1 = styled.button`
background-color: #FF3030;
width: 85px;
height: 37px;
border-radius: 5px;
color: #FFFFFF;

`

const Button2 = styled.button`
background-color: #FF922E;
width: 85px;
height: 37px;
border-radius: 5px;
color: #FFFFFF;

`
const Button3 = styled.button`
background-color: #2FBE34;
width: 85px;
height: 37px;
border-radius: 5px;
color: #FFFFFF;

`

  