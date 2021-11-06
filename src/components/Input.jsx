import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, type, children, value, name, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { children }
        <input
          data-testid={ id }
          type={ type }
          value={ value }
          name={ name }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
