
let reservas = [];
let idCounter = 1;

export function getAllReservas() {
  return reservas;
}

export function createReserva({ nome, data, pessoas }) {
  const novaReserva = {
    id: idCounter++,
    nome,
    data,
    pessoas
  };
  reservas.push(novaReserva);
  return novaReserva;
}

export function getReservaById(id) {
  return reservas.find(reserva => reserva.id === id);
}

export function updateReserva(id, dadosAtualizados) {
  const reservaIndex = reservas.findIndex(reserva => reserva.id === id);
  if (reservaIndex === -1) return null;

  reservas[reservaIndex] = {
    ...reservas[reservaIndex],
    ...dadosAtualizados,
    id 
  };
  return reservas[reservaIndex];
}

export function deleteReserva(id) {
  const reservaIndex = reservas.findIndex(reserva => reserva.id === id);
  if (reservaIndex === -1) return false;

  reservas.splice(reservaIndex, 1);
  return true;
}
