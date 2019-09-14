import React from 'react';

const CompA = props => (
  <h4>Primeiro diz: {props.valor}</h4>
);

const CompB = props => (
  <h4>Segundo diz: {props.valor}</h4>
);

export { CompA, CompB }

/**
 * O export default exporta um único elemento por padrão
 */