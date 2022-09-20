import React, { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import WellDone from '../img/welldone.svg'
import './GameOver.css'
export const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div id="gameover">
        <h2>Game Over</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={WellDone} alt="fim do quizz"/>
        <button onClick={()=> dispatch({type:"NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

