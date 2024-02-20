import { useState } from "react";
import moment from "moment";


function App() {
  const time = moment().format('HH:MM');
  const [displayValue, setDisplayValue] = useState("0");
  const [clearLabel, setClearLabel] = useState("AC");


  const handleNum = (num) => {
    if (displayValue === "0" || clearLabel === "AC") {
      setClearLabel("C");
    }

    if (displayValue === "0") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  const reset = () => {
    if (clearLabel === "C") {
      setDisplayValue("0");
      setClearLabel("AC");
    }
    setDisplayValue("0");
  };

  const handleOper = ((e) => {

  });


  return (
    <div className="app">
      <div className="display">
        <p>{ time }</p>
        <h3>{ displayValue }</h3>
      </div>
      <div className="buttons">
        <table>
          <tr>
            <td><input onClick={reset} className="gray" type="button" value={clearLabel} /></td>
            <td><input onClick={() => handleOper('q')} className="gray" type="button" value="+/-" /></td>
            <td><input onClick={() => handleOper('%')} className="gray" type="button" value="%" /></td>
            <td><input onClick={() => handleOper('/')} className="orange" type="button" value="÷" /></td>
          </tr>
          <tr>
            <td><input onClick={() => handleNum(7)} className="dark-gray" type="button" value="7" /></td>
            <td><input onClick={() => handleNum(8)} className="dark-gray" type="button" value="8" /></td>
            <td><input onClick={() => handleNum(9)} className="dark-gray" type="button" value="9" /></td>
            <td><input onClick={() => handleOper('*')} className="orange" type="button" value="X" /></td>
          </tr>
          <tr>
            <td><input onClick={() => handleNum(4)} className="dark-gray" type="button" value="4" /></td>
            <td><input onClick={() => handleNum(5)} className="dark-gray" type="button" value="5" /></td>
            <td><input onClick={() => handleNum(6)} className="dark-gray" type="button" value="6" /></td>
            <td><input onClick={() => handleOper('-')} className="orange" type="button" value="-" /></td>
          </tr>
          <tr>
            <td><input onClick={() => handleNum(1)} className="dark-gray" type="button" value="1" /></td>
            <td><input onClick={() => handleNum(2)} className="dark-gray" type="button" value="2" /></td>
            <td><input onClick={() => handleNum(3)} className="dark-gray" type="button" value="3" /></td>
            <td><input onClick={() => handleOper('+')} className="orange" type="button" value="+" /></td>
          </tr>
          <tr>
            <td colSpan="2"><input onClick={() => handleNum(0)} className="dark-gray yo" type="button" value="0" /></td>
            <td><input className="dark-gray" type="button" value="." /></td>
            <td><input className="orange" type="button" value="+" /></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
