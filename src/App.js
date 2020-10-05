import React from "react";
import rates from "../src/rates";
import CurrencyInput from "../src/Components/CurrencyInput";
import CurrencySelect from "../src/Components/CurrencySelect";

class App extends React.Component {
  state = {
    curr1: "EUR",
    curr2: "USD",
    val1: 0.0,
    val2: 0.0,
  };

  render() {
    // Liste des currencies pour le menu déroulant
    const currencies = Object.keys(rates);
    const currencyList = currencies.map((curr) => {
      return <option value={curr}>{curr}</option>;
    });

    // calcul conversion de la devise 1 à la devise 2
    const valueNum = parseFloat(this.state.val1);
    let result = "";
    console.log("valueNum", valueNum);

    if (!Number.isNaN(valueNum)) {
      const fromRate = rates[this.state.curr1];
      const toRate = rates[this.state.curr2];
      const rate = toRate / fromRate;
      result = (valueNum * rate).toFixed(2);
    }
    console.log("result", result);

    // Switch devise 1 et devise 2 pour calculer dans l'autre sens
    const Switch = (a) => {
      this.setState({
        curr1: this.state.curr2,
        curr2: this.state.curr1,
        val1: a,
      });
    };

    return (
      <div className="App">
        <h1>
          <span role="img" aria-label="money">
            💰
          </span>{" "}
          Currency convertor{" "}
          <span role="img" aria-label="money">
            💰
          </span>
        </h1>
        <div className="NotNum">
          {isNaN(valueNum) && <p>Please enter a valid number.</p>}
        </div>
        <div className="Tab">
          <div className="Currencies">
            <div className="CurrencyTab">
              <CurrencyInput
                value={this.state.val1}
                placeholder="Amount to convert"
                onChange={(event) =>
                  this.setState({ val1: event.target.value })
                }
              />
              <CurrencySelect
                value={this.state.curr1}
                list={currencyList}
                onChange={(event) =>
                  this.setState({ curr1: event.target.value })
                }
              />
            </div>
            <span>=</span>
            <div className="CurrencyTab">
              <CurrencyInput value={result} placeholder="Converted amount" />
              <CurrencySelect
                value={this.state.curr2}
                list={currencyList}
                onChange={(event) =>
                  this.setState({ curr2: event.target.value })
                }
              />
            </div>
          </div>
          <div className="Switch">
            <button onClick={() => Switch(result)}>⮂</button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
