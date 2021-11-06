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
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name, checked } = target;
    const value = target.type === 'checkbox' ? checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    // Código
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
      },
      onInputChange,
      onSaveButtonClick,
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
          <div className="preview">
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
            />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
