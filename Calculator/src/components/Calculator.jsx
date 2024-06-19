import DigitButton from "./DigitButton"

const Calculator = () => { 
 return (
    <>
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand">{previousOperand} {operation}</div>
                <div className="current-operand">{currentOperand}</div>
            </div>
            <button className="span-two">AC</button>
            <button>DEL </button>
            <OperationButton operation="" dispatch={dispatch} />
            <DigitButton digit="1" dispatch={dispatch} />
            <DigitButton digit="2" dispatch={dispatch} />
            <DigitButton digit="3" dispatch={dispatch} />
            <OperationButton operation="" dispatch={dispatch} />
            <DigitButton digit="4" dispatch={dispatch} />
            <DigitButton digit="5" dispatch={dispatch} />
            <DigitButton digit="6" dispatch={dispatch} />
            <OperationButton operation="" dispatch={dispatch} />
            <DigitButton digit="7" dispatch={dispatch} />
            <DigitButton digit="8" dispatch={dispatch} />
            <DigitButton digit="9" dispatch={dispatch} />
            <OperationButton operation="" dispatch={dispatch} />
            <OperationButton operation="" dispatch={dispatch} />
            <DigitButton digit="0" dispatch={dispatch} />
            <button className="span-two">=</button>
            
        </div>
    </>
 )
}

export default Calculator