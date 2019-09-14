import React, { Component } from 'react';

export default class Contador extends Component {

  state = {
    numero: this.props.numero
  }

  // Solução #1 para o this
  // constructor(props) {
  //   super(props);
  //   this.maisUm = this.maisUm.bind(this);
  // }
  
  /**
   * Solução #3 para resolver o problema do this
   * 
   * Transformar a função em uma função arrow
   */
  maisUm = () => {
    this.setState({ numero: this.state.numero + 1 });
  }
  
  menosUm = () => {
    this.setState({ numero: this.state.numero - 1 });
  }

  alterarNumero = diferenca => {
    this.setState({ numero: this.state.numero + diferenca });
  }

  render() {
    return (
      <div>
        <div>Número: {this.state.numero}</div>
        <button onClick={this.maisUm}>Inc</button>
        <button onClick={this.menosUm}>Dec</button>
        <button onClick={() => this.alterarNumero(10)}>Inc10</button>
        <button onClick={() => this.alterarNumero(-10)}>Dec10</button>
        {/* Solução #2 para o problema do this */}
        {/* <button onClick={() => this.maisUm}>Inc</button> */}
      </div>
    );
  }
}