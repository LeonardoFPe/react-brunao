import React, { useState } from 'react';
import Hamburguer from '../../img/hamburguer.jpg';
import ReservaForm from './ReservaForm';

function Header() {
  const [mostrarReserva, setMostrarReserva] = useState(false);

  return (
    <header>
      {/* ... seu conteúdo atual ... */}
      <button onClick={() => setMostrarReserva(true)}>RESERVE UMA MESA</button>
      {mostrarReserva && <ReservaForm onClose={() => setMostrarReserva(false)} />}
    </header>
  );
}

export default Header;
