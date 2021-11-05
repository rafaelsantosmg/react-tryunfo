import React, { Component } from 'react';
import './Form.css';
import Button from './Button';
import Input from './Input';
import Select from './Select';

export default class Form extends Component {
  render() {
    return (
      <form>
        <h2>Adicionar nova carta</h2>
        <Input id="name-input" type="text">Nome</Input>
        <Input id="description-input" type="textarea">Descrição</Input>
        <Input id="attr1-input" type="number">Attr01</Input>
        <Input id="attr2-input" type="number">Attr02</Input>
        <Input id="attr3-input" type="number">Attr03</Input>
        <Input id="image-input" type="text">Imagem</Input>
        <Select />
        <Input id="trunfo-input" type="checkbox">Super Trybe Trunfo</Input>
        <Button />
      </form>
    );
  }
}
