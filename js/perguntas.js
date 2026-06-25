const questionario = [
  {
    id: 1,
    pergunta: "Você prefere um dia de trabalho focado em resolver bugs técnicos no computador ou em reuniões para alinhar projetos com a equipe?",
    opcoes: { "Resolver bugs": { dev: 3 }, "Reuniões": { adm: 3, vendas: 1 } }
  },
  {
    id: 2,
    pergunta: "Em um projeto, você prefere ser a pessoa que cria a estrutura lógica/código ou a que garante que todos estejam motivados e cumprindo prazos?",
    opcoes: { "Estrutura lógica": { dev: 3 }, "Motivação/Prazos": { adm: 3, enf: 1 } }
  },
  {
    id: 3,
    pergunta: "Você sente mais satisfação ao entregar um produto tecnológico perfeito ou ao resolver um problema direto de um cliente/paciente?",
    opcoes: { "Produto tecnológico": { dev: 3 }, "Resolver problema de alguém": { enf: 3, vendas: 1 } }
  },
  {
    id: 4,
    pergunta: "Diante de um desafio, você prefere investigar a causa raiz do problema ou usar sua capacidade de persuasão para negociar uma solução?",
    opcoes: { "Investigar": { dev: 3, adm: 1 }, "Persuadir/Negociar": { vendas: 3, enf: 1 } }
  },
  {
    id: 5,
    pergunta: "Você prefere trabalhar em um ambiente que exige aprendizado constante de novas tecnologias ou em um ambiente que exige empatia e cuidado com o próximo?",
    opcoes: { "Novas tecnologias": { dev: 3, adm: 1 }, "Empatia/Cuidado": { enf: 3 } }
  },
  {
    id: 6,
    pergunta: "Para você, o que é mais estimulante: o desafio de bater metas de vendas/resultados ou o desafio de organizar processos para que tudo funcione melhor?",
    opcoes: { "Bater metas": { vendas: 3 }, "Organizar processos": { adm: 3 } }
  },
  {
    id: 7,
    pergunta: "Você prefere criar um projeto do zero sozinho ou trabalhar ativamente na recepção e suporte às necessidades das pessoas?",
    opcoes: { "Criar sozinho": { dev: 3 }, "Suporte às pessoas": { enf: 3, vendas: 1 } }
  },
  {
    id: 8,
    pergunta: "Você se vê mais como uma pessoa que gosta de apresentar ideias e convencer outros, ou como alguém que prefere executar tarefas técnicas com precisão?",
    opcoes: { "Apresentar/Convencer": { vendas: 3 }, "Execução técnica": { dev: 3, adm: 1 } }
  },
  {
    id: 9,
    pergunta: "Quando alguém precisa de ajuda, você prefere ensinar uma nova ferramenta/processo ou oferecer suporte emocional e prático?",
    opcoes: { "Ensinar ferramenta": { adm: 3, dev: 1 }, "Suporte emocional": { enf: 3 } }
  },
  {
    id: 10,
    pergunta: "Você prefere trabalhar com metas financeiras e de crescimento de negócio, ou com a manutenção do bem-estar e da saúde de um grupo?",
    opcoes: { "Metas de negócio": { vendas: 3, adm: 2 }, "Bem-estar/Saúde": { enf: 3 } }
  }
];