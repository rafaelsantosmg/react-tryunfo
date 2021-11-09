import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FilterCard from './components/FilterCard';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCards: [],
      filterCards: {
        name: '',
        rare: 'todas',
        isTrunfo: false,
      },
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.saveValidate = this.saveValidate.bind(this);
    this.onRemoveButtonClick = this.onRemoveButtonClick.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.searchCard = this.searchCard.bind(this);
  }

  handleFilter({ target }) {
    const { name, checked } = target;
    const { filterCards } = this.state;
    const value = target.type === 'checkbox' ? checked : target.value;
    this.setState({
      filterCards: {
        ...filterCards,
        [name]: value,
      },
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
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
    } = this.state;
    const cardObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((preventDefault) => ({
      saveCards: preventDefault.saveCards.concat(cardObj),
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      isSaveButtonDisabled: true,
      cardTrunfo: false,
      hasTrunfo: preventDefault.cardTrunfo === false
        ? preventDefault.hasTrunfo : preventDefault.cardTrunfo,
    }));
  }

  onInputChange({ target }) {
    const { name, checked } = target;
    const value = target.type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({
        isSaveButtonDisabled: this.saveValidate(),
      });
    });
  }

  onRemoveButtonClick(cardName) {
    const { saveCards } = this.state;
    this.setState(() => ({
      saveCards: saveCards.filter((card) => card.cardName !== cardName),
      cardTrunfo: false,
      hasTrunfo: false,
    }));
  }

  saveValidate() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxCardAttr = 90;
    const maxAttr = 210;
    if (!cardName || !cardDescription || !cardImage || !cardRare) return true;
    if (Number(cardAttr1) > maxCardAttr || Number(cardAttr1) < 0) return true;
    if (Number(cardAttr2) > maxCardAttr || Number(cardAttr2) < 0) return true;
    if (Number(cardAttr3) > maxCardAttr || Number(cardAttr3) < 0) return true;
    if (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > maxAttr) return true;
    return false;
  }

  searchCard() {
    const {
      saveCards,
      filterCards: {
        name,
        rare,
        isTrunfo,
      },
    } = this.state;
    return saveCards.filter((card) => (name === ''
      ? saveCards : card.cardName.includes(name)))
      .filter((card) => (rare === 'todas' ? saveCards : card.cardRare === rare))
      .filter((card) => (card.cardTrunfo === isTrunfo ? saveCards : !isTrunfo));
  }

  render() {
    const {
      state: {
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
        filterCards,
      },
      onInputChange,
      onSaveButtonClick,
      onRemoveButtonClick,
      handleFilter,
      searchCard,
    } = this;
    const renderCards = searchCard();
    return (
      <div className="page">
        <header className="header">
          <h1>Tryunfo</h1>
        </header>
        <main className="main">
          <div className="form">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              cardRare={ cardRare }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ onInputChange }
              onSaveButtonClick={ onSaveButtonClick }
            />
          </div>
          <div className="preview-card">
            <h2>Preview</h2>
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardTrunfo={ cardTrunfo }
              cardRare={ cardRare }
              visibleButtonDel={ false }
              removeCard={ () => { } }
            />
          </div>
        </main>
        <div className="cards">
          { onSaveButtonClick
            && renderCards.map((card) => (<Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardTrunfo={ card.cardTrunfo }
              cardRare={ card.cardRare }
              visibleButtonDel
              removeCard={ () => onRemoveButtonClick(card.cardName) }
            />
            )) }
        </div>
        <div>
          <FilterCard
            filterName={ filterCards.name }
            handleFilter={ handleFilter }
            filterRare={ filterCards.rare }
            isTrunfo={ filterCards.isTrunfo }
            searchCard={ () => searchCard }
          />
        </div>
      </div>
    );
  }
}

export default App;
