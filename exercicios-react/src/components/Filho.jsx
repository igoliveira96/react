import React from 'react';

export default props => {
  return (
    <div>
      <button
        // Comunicação indireta entre componentes
        onClick={() => props.notificarSaida('Shooping')}>
        Vou sair
      </button>
    </div>
  );
}