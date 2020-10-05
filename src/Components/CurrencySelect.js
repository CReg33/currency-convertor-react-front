import React from "react";
class CurrencySelect extends React.Component {
  render() {
    return (
      <select value={this.props.value} onChange={this.props.onChange}>
        {this.props.list}
      </select>
    );
  }
}
export default CurrencySelect;
