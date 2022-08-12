import "./main.css"
import React, { useState } from 'react'

const Calculator = (props) => {
    let [stringNumber, setStringNumber] = useState('')
    let [number, setNumber] = useState('');
    let [action, setAction] = useState('')
    let [top, setTop] = useState('');
    const clickBtn = (e) => setStringNumber(stringNumber + e.target.textContent);
    const oper = e => {
        setAction(e.target.textContent);
        setNumber(stringNumber);
        setTop(stringNumber + e.target.textContent);    
        setStringNumber('');
    }
    const equal = () => {
        switch (action) {
            case "+":
                setStringNumber(parseFloat(number) + parseFloat(stringNumber))
                break;
            case "-":
                setStringNumber(parseFloat(number) - parseFloat(stringNumber))
                break;
            case "*":
                setStringNumber(parseFloat(number) * parseFloat(stringNumber))
                break;
            case "/":
                setStringNumber(parseFloat(number) / parseFloat(stringNumber))
                break;
            case "%":
                setStringNumber(parseFloat(number) % parseFloat(stringNumber))
                break;
        
            default:
                break;
        }
        setNumber('');
        setTop('');
    }
    const clear = () => {
        setStringNumber('');
        setNumber('');

    }
    return(
        <div className="container">
            <div className="out">
                <div className="out-small">{top}</div>
                <div>{stringNumber}</div>
            </div>
            <div className="input">
                <button onClick={clear}>AC</button>
                <button onClick={oper}>+/-</button>
                <button onClick={oper}>%</button>
                <button onClick={oper}>/</button>
                <button onClick={clickBtn}>7</button>
                <button onClick={clickBtn}>8</button>
                <button onClick={clickBtn}>9</button>
                <button onClick={oper}>*</button>
                <button onClick={clickBtn}>4</button>
                <button onClick={clickBtn}>5</button>
                <button onClick={clickBtn}>6</button>
                <button onClick={oper}>-</button>
                <button onClick={clickBtn}>1</button>
                <button onClick={clickBtn}>2</button>
                <button onClick={clickBtn}>3</button>
                <button onClick={oper}>+</button>
                <button onClick={clickBtn}>0</button>
                <button onClick={clickBtn}>.</button>
                <button onClick={equal}>=</button>
            </div>
        </div>
    )
}

export default Calculator;