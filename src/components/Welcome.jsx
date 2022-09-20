import './Welcome.css'
import Quiz from '../img/quiz.svg'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

const Welcome = () => {

  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div id="welcome">
        <h2>Seja Bem Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="quiz"/>
    </div>
  )
}

export default Welcome