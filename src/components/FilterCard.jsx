import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import Button from './Button';

export default class FilterCard extends Component {
  render() {
    const { filterName, handleFilter, filterRare, isTrunfo, searchCard } = this.props;
    const inputCheckbox = (
      <label htmlFor="trunfo-filter">
        <input
          data-testid="trunfo-filter"
          name="isTrunfo"
          type="checkbox"
          checked={ isTrunfo }
          onChange={ handleFilter }
        />
        Super Trybe Trunfo
      </label>
    );
    return (
      <section className="filter-card">
        <Input
          id="name-filter"
          name="name"
          type="text"
          value={ filterName }
          onChange={ handleFilter }
        >
          Nome
        </Input>
        <Select
          id="rare-filter"
          name="rare"
          value={ filterRare }
          onChange={ handleFilter }
          all
        />
        { inputCheckbox }
        <Button
          id="searchButton"
          disabled={ false }
          btnType="button"
          onClick={ () => searchCard }
        >
          Buscar
        </Button>
      </section>
    );
  }
}

FilterCard.propTypes = {
  filterName: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filterRare: PropTypes.string.isRequired,
  isTrunfo: PropTypes.bool.isRequired,
  searchCard: PropTypes.func.isRequired,
};
