import React from 'react';
import { filhosComProps } from '../utils/utils';

export default props => (
  <div>
    <h1>Família</h1>
    {filhosComProps(props)}

    {
      // React.cloneElement(props.children, 
      //   { sobrenome: props.sobrenome }
      // )

      // React.cloneElement(props.children, 
      //   { ...props } // Faz um clone das propriedades recebidas
      // )

      /* {React.Children.map(props.children, filho => {
              return React.cloneElement(filho, { ...props })
            })} */
    }

    {/* {props.children} */}
  </div>
);