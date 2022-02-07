import './App.css';
import React from 'react';
import MeuComponente from './MeuComponente';

class App extends React.Component {
  render(){
    return <div className="App">
            <header className="App-header">
              <MeuComponente minhaProp="Minha props" />
            </header>
          </div>
  };
}

export default App;
