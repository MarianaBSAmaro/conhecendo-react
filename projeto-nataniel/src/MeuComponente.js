import logo from './logo.svg';
import './App.css';
import React from 'react';

class MeuComponente extends React.Component {

    render(){
        return(
            <div>Meu Componente {this.props.minhaProp}</div>
        ) 
    }

}
export default MeuComponente