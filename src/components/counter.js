import { useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
const Counter = () => {
  const [dollars, setDollars] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);
  let result = btcPrice * dollars;
  const testingBts = /\D/.test(btcPrice);
  const testingDollars = /\D/.test(dollars);
 
  const clearForm = () => {
    setDollars(0);
    setBtcPrice(0);
  };
  return (
    <div className="counter">
      <h1>COUNTER</h1>
      <p>What is Bitcoin price today?</p>
      <input
        type="number"
        value={btcPrice}
        onChange={(event) => setBtcPrice(event.target.value)}
      />
      <p>How much $ do you have?</p>
      <input
        id="dollars"
        type="number"
        value={dollars}
        onChange={(event) => setDollars(event.target.value)}
      />
      {testingBts === false ? (
        <p>Numeric only available. (Allowed input:0-9 and '.')</p>
      ) : testingDollars === false ? (
        <p>Numeric only available. (Allowed input:0-9 and '.')</p>
      ) : null}
      <h4>
        You can buy {Math.floor(result * 10) / 10}
        <br />
        or to be precise {result.toFixed(7)}
      </h4>
      <Button onClick={clearForm} variant="success">
        Clean
      </Button>
    </div>
  );
};
export default Counter;
