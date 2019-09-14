import React from 'react';

export default props => {
  const aprovados = ['Paula', 'Roberta', 'Gustavo', 'Júlia'];
  
  const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>)
  }

  return (
    <ul>
      {gerarItens(aprovados)}
    </ul>
  )
};