import React from 'react';

/**
 * Este componente é baseado em função
 */

// function primeiro() {
//   return <h1>Primeiro componente!</h1>;
// }
// export default primeiro;

// Retorno usando arrow function
// export default () => (
//   <h1>Retorno de html com Arrow!</h1>
// )

/**
 * -> props são as propriedades que o componente pode receber
 */
export default (props) => (
  <h1>{props.valor}</h1>
)