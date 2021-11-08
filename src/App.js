import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
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
      isDeleteButtonTrue: true,
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
      hasTrunfo: preventDefault.cardTrunfo,
    }));
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
        saveCards,
        isDeleteButtonTrue,
      },
      onInputChange,
      onSaveButtonClick,
      onRemoveButtonClick,
    } = this;

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
              visibleButtonDel={ !isDeleteButtonTrue }
              removeCard={ () => onRemoveButtonClick(cardName) }
            />
          </div>
        </main>
        <div className="cards">
          { onSaveButtonClick
            && saveCards.map((card) => (<Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardTrunfo={ card.cardTrunfo }
              cardRare={ card.cardRare }
              visibleButtonDel={ isDeleteButtonTrue }
              removeCard={ onRemoveButtonClick }
            />
            )) }
        </div>
      </div>
    );
  }
}

export default App;
