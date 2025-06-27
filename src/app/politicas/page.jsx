import React from "react";
import styles from "../../styles/components/politica.module.css";

const page = () => {
  return (
    <section className={styles.politicas}>
      <div className={styles.politicaPrivacidade}>
        <h2 className={styles.titulo}>Política de Privacidade – Ótica Vizz</h2>

        <p className={styles.paragrafo}>
          Na Ótica Vizz, respeitamos sua privacidade e nos comprometemos a
          proteger seus dados pessoais. Esta Política de Privacidade descreve
          como coletamos, usamos e protegemos as informações que você nos
          fornece ao utilizar nosso site.
        </p>

        <h3 className={styles.subtitulo}>1. Dados Coletados</h3>

        <h4 className={styles.topico}>
          1.1. Para Agendamento de Exames de Vista:
        </h4>
        <ul className={styles.lista}>
          <li>Nome completo</li>
          <li>Número de telefone</li>
        </ul>

        <h4 className={styles.topico}>1.2. Para Compras Online:</h4>
        <ul className={styles.lista}>
          <li>Nome completo</li>
          <li>Número de telefone</li>
          <li>
            Endereço completo (utilizado para entrega dos produtos adquiridos)
          </li>
          <li>
            Informações necessárias para a transação de pagamento (processadas
            por intermediadores de pagamento seguros)
          </li>
        </ul>

        <h3 className={styles.subtitulo}>2. Uso das Informações</h3>
        <p className={styles.paragrafo}>Utilizamos seus dados para:</p>
        <ul className={styles.lista}>
          <li>Entrar em contato para confirmar ou reagendar exames de vista</li>
          <li>Processar e entregar compras realizadas em nossa loja online</li>
          <li>
            Enviar informações sobre promoções e novidades, se você permitir
          </li>
        </ul>

        <h3 className={styles.subtitulo}>3. Armazenamento e Segurança</h3>
        <p className={styles.paragrafo}>
          Seus dados são armazenados com segurança e não são vendidos ou
          compartilhados com terceiros, exceto quando necessário para:
        </p>
        <ul className={styles.lista}>
          <li>Finalização de pagamentos (através de plataformas seguras)</li>
          <li>Cumprimento de obrigações legais</li>
        </ul>

        <h3 className={styles.subtitulo}>4. Cookies</h3>
        <p className={styles.paragrafo}>
          Nosso site pode utilizar cookies para melhorar sua experiência de
          navegação. Você pode configurar seu navegador para recusar cookies,
          caso prefira.
        </p>

        <h3 className={styles.subtitulo}>5. Seus Direitos</h3>
        <p className={styles.paragrafo}>
          Você pode solicitar a correção, atualização ou exclusão de seus dados
          a qualquer momento, entrando em contato pelos nossos canais oficiais.
        </p>

        <h3 className={styles.subtitulo}>6. Alterações nesta Política</h3>
        <p className={styles.paragrafo}>
          Esta Política pode ser atualizada a qualquer momento, sem aviso
          prévio. Recomendamos que você consulte esta página regularmente para
          estar ciente de eventuais alterações.
        </p>

        <h3 className={styles.subtitulo}>Dúvidas ou solicitações?</h3>
        <p className={styles.paragrafo}>Fale conosco:</p>
        <ul className={styles.lista}>
          <li>📞 WhatsApp: (11) 2362-8799</li>
          <li>📧 E-mail: oticasvizz@gmail.com</li>
        </ul>

        <p className={styles.paragrafo}>
          <strong>Última atualização:</strong> 3 de junho de 2025
        </p>
      </div>
      <div className={styles.termosUso}>
        <h2 className={styles.titulo}>Termos de Uso – Ótica Vizz</h2>

        <p className={styles.paragrafo}>
          Ao acessar e utilizar o site da Ótica Vizz, você concorda com os
          termos e condições descritos abaixo. Recomendamos a leitura atenta
          deste documento antes de realizar qualquer interação com nossos
          serviços online.
        </p>

        <h3 className={styles.subtitulo}>1. Uso do Site</h3>
        <p className={styles.paragrafo}>
          Este site destina-se à divulgação de produtos ópticos, venda online e
          agendamento de exames de vista. O usuário compromete-se a utilizar as
          informações e serviços de forma ética, responsável e dentro da
          legalidade.
        </p>

        <h3 className={styles.subtitulo}>2. Cadastro e Agendamento</h3>
        <p className={styles.paragrafo}>
          Para agendar exames de vista, solicitamos informações como nome e
          telefone. O usuário se compromete a fornecer dados verídicos e
          atualizados, sendo responsável por qualquer erro decorrente de
          informações incorretas.
        </p>

        <h3 className={styles.subtitulo}>3. Compras Online</h3>
        <p className={styles.paragrafo}>
          Ao realizar uma compra, o usuário concorda em fornecer informações
          necessárias para entrega e pagamento. Garantimos a segurança dos
          dados, conforme nossa <strong>Política de Privacidade</strong>.
        </p>

        <h3 className={styles.subtitulo}>4. Pagamentos e Entregas</h3>
        <p className={styles.paragrafo}>
          Os pagamentos são processados por plataformas seguras. O prazo de
          entrega pode variar conforme a localização do cliente e a modalidade
          de envio escolhida. A Ótica Vizz não se responsabiliza por atrasos
          causados por terceiros (ex: transportadoras).
        </p>

        <h3 className={styles.subtitulo}>5. Trocas e Devoluções</h3>
        <p className={styles.paragrafo}>
          O cliente tem direito à troca ou devolução em até 7 dias corridos após
          o recebimento, conforme o Código de Defesa do Consumidor. Para isso, o
          produto deve estar em perfeitas condições, sem uso e com embalagem
          original.
        </p>

        <h3 className={styles.subtitulo}>6. Propriedade Intelectual</h3>
        <p className={styles.paragrafo}>
          Todo o conteúdo do site (textos, imagens, logotipo, vídeos e layout) é
          de propriedade da Ótica Vizz e protegido por leis de direitos
          autorais. É proibida a reprodução total ou parcial sem autorização
          prévia.
        </p>

        <h3 className={styles.subtitulo}>7. Modificações dos Termos</h3>
        <p className={styles.paragrafo}>
          Reservamo-nos o direito de alterar estes Termos de Uso a qualquer
          momento. As alterações entram em vigor imediatamente após sua
          publicação. Recomendamos verificar esta página com frequência.
        </p>

        <h3 className={styles.subtitulo}>8. Dúvidas e Suporte</h3>
        <p className={styles.paragrafo}>
          Em caso de dúvidas, entre em contato conosco pelos nossos canais
          oficiais:
        </p>
        <ul className={styles.lista}>
          <li>📞 WhatsApp: (11) 2362-8799</li>
          <li>📧 E-mail: oticasvizz@gmail.com</li>
        </ul>

        <p className={styles.paragrafo}>
          <strong>Última atualização:</strong> 3 de junho de 2025
        </p>
      </div>
    </section>
  );
};

export default page;
