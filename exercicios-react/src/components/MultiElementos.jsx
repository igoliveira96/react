import React from 'react';

export default props => (
  // Solução mais utilizada
  // <div>
  //   <h1>Parte 1</h1>
  //   <h1>Parte 2</h1>
  // </div>

  // Outra solução para ter os elementos adjacentes
  <React.Fragment>
    <h1>Parte 1</h1>
    <h2>Parte 2</h2>
  </React.Fragment>
);