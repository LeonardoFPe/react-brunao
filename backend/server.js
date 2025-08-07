import express from 'express';
import cors from 'cors';
import routerReservas from './routes/reservaRoutes.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/reservas', routerReservas);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
