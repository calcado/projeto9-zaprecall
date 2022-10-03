import {useState} from 'react'
import styled, {css} from 'styled-components'
import play from '../assets/img/seta_play.png'
import turn from '../assets/img/seta_virar.png'
import certo from '../assets/img/icone_certo.png'
import quase from '../assets/img/icone_quase.png'
import erro from '../assets/img/icone_erro.png'






export default function FlashCard({index, question, answer}){
    const icons = [play, turn, certo, erro, quase]
    console.log(icons[0])  
    const [text, setText] = useState("Pergunta "+ index) 
    const [icon, setIcon] = useState(icons[0])  
    const [virado, setVirado] = useState(false)
    
    function virarCarta(){
        
        if(icon === icons[0]){
            setVirado(true)
            setText(question)
            setIcon(icons[1])
        }
        if(icon === icons[1]){
            setVirado(true)
            setText(answer)
            setIcon('')
        }
        

    }
    
     
        return (
        <FlashCardLayout onClick={(()=>virarCarta())} virado={virado}>
        <p key={''}>{text}</p>
        <img src={icon} alt="" />
        
        
        </FlashCardLayout>
    )

}

const FlashCardLayout = styled.button`

  display:flex;
  justify-content:${props => props.virado ? "flex-start" :"space-between"};
  align-items: ${props => props.virado ? "initial" :"center"};
  background-color:${props => props.virado ? "#FFFFD5": "#FFFFFF"} ;
  margin-bottom: 25px;
  width : 300px;
  min-height: ${props => props.virado ? "100px": "65px" } ;
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
    color: #333333;
    text-align: ${props => props.virado ? "left" :"center"};
    };
    img{
        position:${props => props.virado ? "absolute": "initial"  }; 
        bottom: 10px;
        right: 10px;
    }
    
    


`

// const PerguntaFechada = styled.button`
// width: 300px;
//     height: 65px;
//     background-color: #FFFFFF;
//     margin: 12px;
//     padding: 15px;
//     box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
//     border-radius: 5px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     p{font-family: 'Recursive';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 16px;
//     line-height: 19px;
//     color: #333333;}
//     img{
//         width: 20px;
//         height: 20px;
//     }
    

// ` 
 
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{position: absolute;
    bottom: 10px;
    right: 10px;}
    
`

  