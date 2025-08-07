import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import iconclose from '../../img/icons8-fechar-janela-48.png';

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 320px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #ffd130;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

// Componente React
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
      const response = await axios.post('http://localhost:5000/api/reservas', {
        nome,
        data,
        pessoas
      });

      setMensagem('✅ Reserva feita com sucesso!');
      setNome('');
      setData('');
      setPessoas('');
    } catch (error) {
      if (error.response) {
        setMensagem(`❌ Erro: ${error.response.data.message}`);
      } else {
        setMensagem('❌ Erro ao conectar com o servidor.');
      }
    }
  };

  return (
    <Overlay>
      <Modal>
        <CloseButton onClick={onClose} aria-label="Fechar formulário">
          <img src={iconclose} alt="Fechar" />
        </CloseButton>

        <h2>Reservar uma Mesa</h2>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <Input
            type="datetime-local"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Número de pessoas"
            value={pessoas}
            onChange={(e) => setPessoas(e.target.value)}
            min="1"
            required
          />
          <SubmitButton type="submit">Reservar</SubmitButton>
        </Form>

        {mensagem && <p>{mensagem}</p>}
      </Modal>
    </Overlay>
  );
}

export default ReservaForm;
