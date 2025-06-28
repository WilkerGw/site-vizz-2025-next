"use client";
import { useState } from 'react';
import styles from '../../styles/components/agendamento.module.css';
import { motion } from 'framer-motion';
import axios from 'axios';
// 1. Importando o useRouter para a navegação
import { useRouter } from 'next/navigation';
// 2. Importando um ícone para o botão
import { IoArrowBack } from 'react-icons/io5';

export default function AgendamentoForm() {
  // 3. Inicializando o router
  const router = useRouter();

  const [formData, setFormData] = useState({
    nomeCompleto: '',
    telefone: '',
    dataNascimento: '',
    horario: '11:00',
  });

  const [formState, setFormState] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ submitting: true, success: false, error: null });

    try {
      const response = await axios.post('/api/agendamento', formData);
      if (response.status === 201) {
        setFormState({ submitting: false, success: true, error: null });
        setFormData({
            nomeCompleto: '', telefone: '', dataNascimento: '', horario: '11:00',
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Ocorreu um erro. Tente novamente.";
      setFormState({ submitting: false, success: false, error: errorMessage });
    }
  };

  return (
    <motion.div
      className={styles.formContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 4. Adicionando o botão de voltar */}
      <button onClick={() => router.back()} className={styles.backButton}>
        <IoArrowBack size={22} />
        Voltar
      </button>

      <h1 className={styles.title}>Agende seu Exame de Vista</h1>
      <p className={styles.subtitle}>Garanta sua vaga para o nosso dia especial de exames!</p>
      
      {formState.success && (
        <div className={styles.successMessage}>
          Seu pedido de agendamento foi enviado com sucesso! Aguarde nosso contato de confirmação.
        </div>
      )}

      {formState.error && (
        <div className={styles.errorMessage}>
          {formState.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nomeCompleto">Nome Completo</label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" value={formData.nomeCompleto} onChange={handleChange} required />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone / WhatsApp</label>
            <input type="tel" id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input type="date" id="dataNascimento" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />
          </div>
        </div>
        
        <div className={styles.staticInfoGroup}>
          <span className={styles.staticLabel}>Data do Exame</span>
          <span className={styles.staticValue}>05 de Julho de 2025</span>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="horario">Escolha o Melhor Horário para Você</label>
          <select id="horario" name="horario" value={formData.horario} onChange={handleChange}>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="13:00">13:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton} disabled={formState.submitting}>
          {formState.submitting ? 'Enviando...' : 'Confirmar meu Horário'}
        </button>
      </form>
    </motion.div>
  );
}