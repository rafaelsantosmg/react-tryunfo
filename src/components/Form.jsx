/* eslint-disable react/jsx-no-useless-fragment */
import React, { Component } from 'react';
import './Form.css';
import PropTypes from 'prop-types';
import Button from './Button';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const inputCheckbox = (
      <label htmlFor="trunfo-input">
        Super Trybe Trunfo
        <input
          data-testid="trunfo-input"
          name="cardTrunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>);

    return (
      <form onSubmit={ onSaveButtonClick }>
        <h2>Adicionar nova carta</h2>
        <Input
          id="name-input"
          name="cardName"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        >
          Nome
        </Input>

        <label htmlFor="description-input">
          Descrição
          <textarea
            data-testid="description-input"
            name="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
            cols="30"
            rows="3"
            maxLength="130"
          />
        </label>

        <Input
          id="attr1-input"
          name="cardAttr1"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        >
          Attr01
        </Input>

        <Input
          id="attr2-input"
          name="cardAttr2"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        >
          Attr02
        </Input>

        <Input
          id="attr3-input"
          name="cardAttr3"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        >
          Attr03
        </Input>

        <Input
          id="image-input"
          name="cardImage"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        >
          Imagem
        </Input>

        <Select
          id="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
          all={ false }
        />

        { !hasTrunfo ? inputCheckbox : <p>Você já tem um Super Trunfo em seu baralho</p> }

        <Button
          id="save-button"
          disabled={ isSaveButtonDisabled }
          btnType="submit"
          onClick={ () => {} }
        >
          Salvar
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
