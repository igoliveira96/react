import React, { Component } from 'react';

export default class ComponenteClasse extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.valor || 'Valor padrão'}</h1>
      </div>
    );
  }
}