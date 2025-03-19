// pages/index.js
'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Exame() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    whatsapp: '',
    data: '',
    hora: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await axios.post('https://agendamento-backend-xoup.onrender.com/api/agendamento', formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response ? error.response.data.error : 'Erro desconhecido');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Agendamento</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome Completo:</label>
          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>WhatsApp:</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Data:</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hora:</label>
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Agendar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}