import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    const { id, name, value, onChange } = this.props;
    return (
      <select
        data-testid={ id }
        name={ name }
        value={ value }
        onChange={ onChange }
      >
        <option value="normal">Normal</option>
        <option value="raro">Raro</option>
        <option value="muito raro">Muito Raro</option>
      </select>
    );
  }
}

export default Select;

Select.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
