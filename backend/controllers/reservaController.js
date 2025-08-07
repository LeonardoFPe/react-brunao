const Reserva = require('../models/Reserva');

// GET todas as reservas
exports.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET reserva por ID
exports.getReservaById = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) return res.status(404).json({ message: 'Reserva não encontrada' });
    res.json(reserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST criar nova reserva
exports.createReserva = async (req, res) => {
  const { nome, data, pessoas } = req.body;
  const novaReserva = new Reserva({ nome, data, pessoas });

  try {
    const reservaSalva = await novaReserva.save();
    res.status(201).json(reservaSalva);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT atualizar reserva existente
exports.updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) return res.status(404).json({ message: 'Reserva não encontrada' });

    // Atualiza os campos se existirem no body
    if (req.body.nome) reserva.nome = req.body.nome;
    if (req.body.data) reserva.data = req.body.data;
    if (req.body.pessoas) reserva.pessoas = req.body.pessoas;

    const reservaAtualizada = await reserva.save();
    res.json(reservaAtualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE remover reserva
exports.deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) return res.status(404).json({ message: 'Reserva não encontrada' });

    await reserva.remove();
    res.json({ message: 'Reserva deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
