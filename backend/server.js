const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/seu_banco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/reservas', reservaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
