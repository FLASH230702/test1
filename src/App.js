import React, { useState } from 'react';
import './index.css';
import moment from 'moment';

const App = () => {
  const time = moment().format('HH:MM')
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');
  const [clearLabel, setClearLabel] = useState('AC');

  const handleNumberClick = (num) => {
    if (display === '0' || currentValue === '') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
    setCurrentValue(currentValue + num);
    setClearLabel('C');
  };

  const handleOperatorClick = (op) => {
    if (operator !== '') {
      evaluateExpression();
    }
    setOperator(op);
    setPreviousValue(display);
    setCurrentValue('');
    setClearLabel('AC');
  };

  const evaluateExpression = () => {
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;
    switch (operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case 'x':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
      case '%':
        result = prev % current;
        break;
      case '^':
        result = prev * -1;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setPreviousValue(result.toString());
  };

  const handleEqualClick = () => {
    evaluateExpression();
    setCurrentValue('');
    setOperator('');
    setClearLabel('AC');
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentValue('');
    setPreviousValue('');
    setOperator('');
    setClearLabel('AC');
  };

  return (
    <div className="app">
      <div className="display">
        <p>{time}</p>
        <h3>{display}</h3>
      </div>
      <div className="buttons">
        <button className='gray' onClick={() => handleClearClick()}>{clearLabel}</button>
        <button className='gray'onClick={() => handleOperatorClick('^')}>+/-</button>
        <button className='gray' onClick={() => handleOperatorClick('%')}>%</button>
        <button className="orange" onClick={() => handleOperatorClick('÷')}>÷</button>
        <button className="dark-gray" onClick={() => handleNumberClick('7')}>7</button>
        <button className="dark-gray" onClick={() => handleNumberClick('8')}>8</button>
        <button className="dark-gray" onClick={() => handleNumberClick('9')}>9</button>
        <button className="orange" onClick={() => handleOperatorClick('x')}>x</button>
        <button className="dark-gray" onClick={() => handleNumberClick('4')}>4</button>
        <button className="dark-gray" onClick={() => handleNumberClick('5')}>5</button>
        <button className="dark-gray" onClick={() => handleNumberClick('6')}>6</button>
        <button className="orange" onClick={() => handleOperatorClick('-')}>-</button>
        <button className="dark-gray" onClick={() => handleNumberClick('1')}>1</button>
        <button className="dark-gray" onClick={() => handleNumberClick('2')}>2</button>
        <button className="dark-gray" onClick={() => handleNumberClick('3')}>3</button>
        <button className="orange" onClick={() => handleOperatorClick('+')}>+</button>
        <button className="dark-gray yo" onClick={() => handleNumberClick('0')}>0</button>
        <button className="dark-gray" onClick={() => handleNumberClick('.')}>.</button>
        <button className="orange" onClick={() => handleEqualClick()}>=</button>
      </div>
    </div>
  );
};

export default App;
