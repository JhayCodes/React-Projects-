import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculator from './components/Calculator'
import DigitButton from './components/DigitButton'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'

}
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
      currentOperand: `${currentOperand || ""}${payload.digit}`
      }

    case ACTIONS.CHOOSE_OPERATION:
      return state

    case ACTIONS.CLEAR:
      return state

    case ACTIONS.DELETE_DIGIT:
      return state

    case ACTIONS.EVALUATE:
      return state
  }
}

function App() {
  const [(currentOperand, previousOperand, operation), dispatch] = userReducer(reducer)
  return (
    <>
      <Calculator />
    </>
  )
}

export default App
