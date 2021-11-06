import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        data-testid="save-button"
        type="button"
        disabled={ disabled }
        onClick={ onClick }
      >
        Salvar
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
