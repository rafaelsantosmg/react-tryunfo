import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { id, disabled, btnType, children, onClick } = this.props;
    return (
      <button
        data-testid={ id }
        type={ btnType === 'submit' ? 'submit' : 'button' }
        disabled={ disabled }
        onClick={ onClick }
      >
        { children }
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  btnType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
