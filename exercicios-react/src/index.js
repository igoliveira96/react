import React from 'react';
import ReactDOM from 'react-dom';

// import PrimeiroComponente from './components/PrimeiroComponente';
// import { CompA, CompB as B } from './components/DoisComponentes';
// import MultiElementos from './components/MultiElementos';
// import FamiliaSilva from './components/FamiliaSilva';
// import Familia from './components/Familia';
// import Membro from './components/Membro';
// import ComponenteComFuncao from './components/ComponenteComFuncao';
// import Pai from './components/Pai';
// import ComponenteClasse from './components/ComponenteClasse';
import Contador from './components/Contador';

const elemento = document.getElementById('root');
// ReactDOM.render(<h1>Olá React!</h1>, elemento);
ReactDOM.render(
  <div>
    {/* <PrimeiroComponente valor="Meu primeiro component!" /> */}
    
    {/* <CompA valor="Olá, eu sou A!" />
    <B valor="B na área!" /> */}
    
    {/* <MultiElementos /> */}

    {/* Relação entre componentes #1 */}
    {/* <FamiliaSilva /> */}

    {/* Relação entre componentes #2 */}
    {/* <Familia sobrenome="Goulart">
      <Membro nome="Igor" />
      <Membro nome="Melissa" />
    </Familia> */}

    {/* <ComponenteComFuncao /> */}

    {/* <Pai /> */}

    {/* <ComponenteClasse valor="Sou um componente de classe" /> */}

    <Contador numero={100} />
  </div>
  , elemento
);