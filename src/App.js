import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <header className="header">
          <h1>Tryunfo</h1>
        </header>
        <main className="main">
          <div className="form">
            <Form />
          </div>
          <div className="preview">
            <h2>Preview</h2>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
