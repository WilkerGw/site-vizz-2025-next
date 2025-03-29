"use client";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/components/appointment.module.css";
import Faixa from "./Faixa";

export default function Exame() {
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    whatsapp: "",
    data: "2025-04-03", // Data fixa
    hora: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "whatsapp") {
      // Remover caracteres não numéricos
      const numericValue = value.replace(/\D/g, "");
      // Formatar o número de WhatsApp
      let formattedValue = "";
      if (numericValue.length > 0)
        formattedValue = `(${numericValue.slice(0, 2)})`;
      if (numericValue.length > 2)
        formattedValue += ` ${numericValue.slice(2, 7)}`;
      if (numericValue.length > 7)
        formattedValue += `-${numericValue.slice(7, 11)}`;
      setFormData({
        ...formData,
        whatsapp: formattedValue,
        whatsappRaw: numericValue, // Valor não formatado para enviar ao backend
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validateForm = () => {
    if (!formData.nomeCompleto.split(" ").filter((word) => word).length >= 2) {
      setMessage("O nome completo deve conter pelo menos duas palavras.");
      return false;
    }
    if (!/^(\(?\d{2}\)?\s?)?(\d{4,5}\-\d{4})$/.test(formData.whatsapp)) {
      setMessage("O número de WhatsApp deve estar no formato (xx) xxxx-xxxx.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setConfirmation(null);
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://agendamento-backend-xoup.onrender.com/api/agendamento",
        {
          ...formData,
          whatsapp: formData.whatsappRaw, // Enviar o valor não formatado
        }
      );
      setMessage(response.data.message);
      setConfirmation({
        whatsapp: formData.whatsapp,
        data: formData.data,
        hora: formData.hora,
      });
    } catch (error) {
      setMessage(
        error.response ? error.response.data.error : "Erro desconhecido"
      );
    } finally {
      setLoading(false);
    }
  };

  const availableHours = [];
  for (let hour = 10; hour <= 17; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      if ((hour === 10 && minute < 30) || (hour === 17 && minute > 15))
        continue;
      availableHours.push(
        `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`
      );
    }
  }

  // Função para formatar a data no formato dd/mm/yyyy
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0"); // Usar UTC para evitar problemas de fuso horário
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // Mês começa em 0, então adicionamos 1
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <section id="agendamento" className={styles.agendamento}>
      <div className={styles.agendamentoContainer}>
        <div className={styles.formContainer}>
          {loading && (
            <div className={styles.loadingOverlay}>
              <div className={styles.spinner}></div>
            </div>
          )}
          <h1 className={styles.titleAgendamento}>
            Agende seu{" "}
            <span className={styles.span__agendamento}>Exame Gratuito</span>
          </h1>
          <form onSubmit={handleSubmit} className={styles.form__agendamento}>
            <div>
              <label className={styles.label__agendamento}>
                Nome Completo:
              </label>
              <br />
              <input
                className={styles.input__agendamento}
                type="text"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className={styles.label__agendamento}>WhatsApp:</label>
              <br />
              <input
                className={styles.input__agendamento}
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                maxLength="15" // Máximo de caracteres para o formato (xx) xxxx-xxxx
              />
            </div>
            <div>
              <label className={styles.label__agendamento}>
                Data:{formatDate(formData.data)}.
              </label>
              <br />
              <input
                className={styles.input__agendamento}
                type="text"
                name="data"
                value={formatDate(formData.data)}
                readOnly
              />
            </div>
            <div>
              <label className={styles.label__agendamento}>Horário:</label>
              <br />
              <select
                className={styles.input__agendamento}
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                required
              >
                <option value="">Selecione a hora</option>
                {availableHours.map((hour) => (
                  <option key={hour} value={hour}>
                    {hour}
                  </option>
                ))}
              </select>
            </div>
            <button className={styles.button__agendamento} type="submit">
              Agendar
            </button>
          </form>
          {message && (
            <p style={{ color: message.includes("sucesso") ? "green" : "red" }}>
              {message}
            </p>
          )}
          {confirmation && (
            <div>
              <p>Confirmação de número de WhatsApp: {confirmation.whatsapp}</p>
              <p>Data do exame: {formatDate(confirmation.data)}</p>
              <p>Hora do exame: {confirmation.hora}</p>
            </div>
          )}
        </div>
        <div className={styles.imgAgendamento__container}>
          <img
            src="./images/homem-fone.png"
            alt=""
            className={styles.img__agendamento}
          />
        </div>
      </div>
      <Faixa />
    </section>
  );
}
