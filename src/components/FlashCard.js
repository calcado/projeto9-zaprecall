import styled from 'styled-components'
import play from '../assets/img/seta_play.png'
import turn from '../assets/img/seta_virar.png'

export default function FlashCard(props){
    const deck = [props.deck]
    console.log(deck)
    for(let i = 0;i<deck.length; i++){
    deck.map(()=> <button></button>)
    
        return (
        <>
        <PerguntaFechada onClick={setPergunta}>
        <p key={i}>Pergunta {deck[i]}</p>
        <img src={play}/>
        </PerguntaFechada>
        <PerguntaAberta>
        <p key={deck[i].question}>{deck.question}</p>
        <img src={turn}/>
        <p key={deck[i].answer}>{deck.answer}</p>   
        </PerguntaAberta>
        </>
    )
}
}

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

  