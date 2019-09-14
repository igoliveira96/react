import React from 'react';

import PlacarContainer from './PlacarContainer'

const dados = {
  partida: {
    estadio: 'Maracanã/RJ',
    data: '03/08/2019',
    horario: '19h'
  },
  casa: {
    nome: 'Vasco'
  },
  visitante: {
    nome: 'Flamengo'
  }
};

export default class App extends React.Component {
  // Método obrigatório
  render() {
    return (
      // express operator: ...
      <PlacarContainer  {...dados} tempo={92} />
    );
  }
}