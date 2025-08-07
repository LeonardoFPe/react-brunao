const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  data: { type: Date, required: true },
  pessoas: { type: Number, required: true },
  criadoEm: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Reserva', reservaSchema);
