import {
  getAllReservas,
  createReserva,
  getReservaById,
  updateReserva,
  deleteReserva
} from '../models/reservaModel.js';

export function listarReservas(req, res) {
  res.json(getAllReservas());
}

export function criarReserva(req, res) {
  const { nome, data, pessoas } = req.body;
  if (!nome || !data || !pessoas) {
    return res.status(400).json({ message: 'Preencha todos os campos' });
  }

  const novaReserva = createReserva({ nome, data, pessoas });
  res.status(201).json(novaReserva);
}

export function atualizarReserva(req, res) {
  const id = Number(req.params.id);
  const reservaAtualizada = updateReserva(id, req.body);

  if (!reservaAtualizada) {
    return res.status(404).json({ message: 'Reserva não encontrada' });
  }

  res.json(reservaAtualizada);
}

export function apagarReserva(req, res) {
  const id = Number(req.params.id);
  const sucesso = deleteReserva(id);

  if (!sucesso) {
    return res.status(404).json({ message: 'Reserva não encontrada' });
  }

  res.json({ message: 'Reserva deletada com sucesso' });
}
