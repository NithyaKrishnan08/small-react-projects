import { useState } from 'react';
import * as math from 'mathjs';
import "../styles/calculator.css";

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const handleChange = (e) => {
    if (/^[0-9+\-*/.() ]*$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const clear = () => {
    setInputValue('');
  };

  const calculate = () => {
    try {
      if (!inputValue) return;

      const result = math.evaluate(inputValue);
          
      if (result === Infinity || result === -Infinity) {
        setInputValue('Cannot divide by zero');
      } else if (isNaN(result)) {
        setInputValue('Invalid expression');
      } else {
        setInputValue(math.format(result, { precision: 14 }));
      }
    } catch (error) {
      setInputValue('Error');
    }
  };

  return (
    <form className="calculator" name="calc">
      <input type="text" className="value" value={inputValue} onChange={handleChange} />
      <span className="num clear" onClick={() => clear()}>
        c
      </span>
      <span onClick={() => display("/")}>/</span>
      <span onClick={() => display("*")}>*</span>
      <span onClick={() => display("7")}>7</span>
      <span onClick={() => display("8")}>8</span>
      <span onClick={() => display("9")}>9</span>
      <span onClick={() => display("-")}>-</span>
      <span onClick={() => display("4")}>4</span>
      <span onClick={() => display("5")}>5</span>
      <span onClick={() => display("6")}>6</span>
      <span className="plus" onClick={() => display("+")}>
        +
      </span>
      <span onClick={() => display("1")}>1</span>
      <span onClick={() => display("2")}>2</span>
      <span onClick={() => display("3")}>3</span>
      <span onClick={() => display("0")}>0</span>
      <span onClick={() => display("00")}>00</span>
      <span onClick={() => display(".")}>.</span>
      <span className="num equal" onClick={() => calculate()}>
        =
      </span>
    </form>
  );
};

export default Calculator;