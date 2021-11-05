import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { id, type, children } = this.props;
    return (
      <label htmlFor={ id }>
        { children }
        <input data-testid={ id } type={ type } />
      </label>
    );
  }
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
