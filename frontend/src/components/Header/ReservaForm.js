import React, { useState } from 'react';

function ReservaForm({ onClose }) {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !data || !pessoas) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, data, pessoas })
      });

      const resultado = await response.json();
      if (response.ok) {
        setMensagem('✅ Reserva feita com sucesso!');
        setNome(''); setData(''); setPessoas('');
      } else {
        setMensagem(`❌ Erro: ${resultado.message}`);
      }
    } catch {
      setMensagem('❌ Erro ao conectar com o servidor.');
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose} style={styles.closeButton}>X</button>
        <h2>Reservar uma Mesa</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text" placeholder="Seu nome" value={nome}
            onChange={(e) => setNome(e.target.value)} required style={styles.input}
          />
          <input
            type="datetime-local" value={data}
            onChange={(e) => setData(e.target.value)} required style={styles.input}
          />
          <input
            type="number" placeholder="Número de pessoas" value={pessoas}
            onChange={(e) => setPessoas(e.target.value)} min="1" required style={styles.input}
          />
          <button type="submit" style={styles.button}>Reservar</button>
        </form>
        {mensagem && <p>{mensagem}</p>}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
    justifyContent: 'center', alignItems: 'center', zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff', padding: 20, borderRadius: 8, width: 320,
    position: 'relative', boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
  },
  closeButton: {
    position: 'absolute', top: 10, right: 10, background: 'transparent',
    border: 'none', fontSize: 18, cursor: 'pointer'
  },
  form: { display: 'flex', flexDirection: 'column', gap: 12 },
  input: { padding: 8, fontSize: 16 },
  button: {
    padding: 10, fontSize: 16, backgroundColor: '#007bff',
    color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer'
  }
};

export default ReservaForm;
