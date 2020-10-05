import React from "react";
class CurrencyInput extends React.Component {
  render() {
    return (
      <input
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={this.props.onChange}
      />
    );
  }
}
export default CurrencyInput;
