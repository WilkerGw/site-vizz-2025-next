// pages/index.js
'use client';
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/components/appointment.module.css';

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
    <section id="agendamento" className={styles.agendamento}>
      <h1 className={styles.titleAgendamento}>Agende seu <span className={styles.span__agendamento}>Exame Gratuito</span>!</h1>
      <form onSubmit={handleSubmit} className={styles.form__agendamento}>
        <div>
          <label className={styles.label__agendamento}>Nome Completo:</label><br/>
          <input
            type="text"
            name="nomeCompleto"
            value={formData.nomeCompleto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label__agendamento}>WhatsApp:</label><br/>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label__agendamento}>Data:</label>
          <input
            type="date"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className={styles.label__agendamento}>Hora:</label>
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
    </section>
  );
}