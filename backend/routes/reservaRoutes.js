import express from 'express';
import {
  listarReservas,
  criarReserva,
  atualizarReserva,
  apagarReserva
} from '../controllers/reservaController.js';

const router = express.Router();

router.get('/', listarReservas);
router.post('/', criarReserva);
router.patch('/:id', atualizarReserva);
router.delete('/:id', apagarReserva);

export default router;
