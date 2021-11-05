import React, { Component } from 'react';

class Select extends Component {
  render() {
    return (
      <select data-testid="rare-input">
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito Raro</option>
      </select>
    );
  }
}

export default Select;
