import styles from "./Servicos.module.css";

export default function Servicos() {
  const listaServicos = [
    {
      id: 1,
      nome: "Site One Page",
      descricao:
        "Site de página única com seções como Início, Sobre Nós, Serviços, Contato e botão para WhatsApp. Ideal para pequenos negócios e profissionais autônomos.",
      prazo: "3 a 7 dias",
      valor: "A partir de R$ 300",
    },
    {
      id: 2,
      nome: "Landing Page",
      descricao:
        "Página desenvolvida para divulgação de produtos, serviços ou campanhas, com foco em conversão de clientes e geração de contatos.",
      prazo: "5 a 10 dias",
      valor: "A partir de R$ 500",
    },
    {
      id: 3,
      nome: "Site Institucional",
      descricao:
        "Site com múltiplas páginas, como Home, Sobre Nós, Serviços, Portfólio e Contato. Ideal para empresas que desejam uma presença profissional na internet.",
      prazo: "7 a 15 dias",
      valor: "A partir de R$ 800",
    },
    {
      id: 4,
      nome: "Sistema Web Personalizado",
      descricao:
        "Sistemas sob medida com login, cadastro, painel administrativo, agendamentos, delivery, controle financeiro e outras funcionalidades.",
      prazo: "Sob consulta",
      valor: "Sob orçamento",
    },
  ];

  return (
    <section
      id="servicos"
      className={styles["servicos-section"]}
    >
      <h2 className={styles["servicos-title"]}>
        Serviços & Valores
      </h2>

      <div className={styles["table-container"]}>
        <table className={styles["servicos-table"]}>
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Descrição</th>
              <th>Prazo Médio</th>
              <th>Investimento</th>
            </tr>
          </thead>

          <tbody>
            {listaServicos.map((servico) => (
              <tr key={servico.id}>
                <td className={styles["service-name"]}>
                  {servico.nome}
                </td>

                <td className={styles["service-desc"]}>
                  {servico.descricao}
                </td>

                <td>{servico.prazo}</td>

                <td className={styles["service-price"]}>
                  {servico.valor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.observacao}>
        * Valores promocionais de lançamento. Os valores apresentados são
        iniciais e podem variar conforme a complexidade, funcionalidades e
        necessidades específicas de cada projeto.
      </p>
    </section>
  );
}