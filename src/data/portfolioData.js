// Fonte de verdade de todos os dados do portfólio.
// As imagens/ícones são referenciados por "imageKey" / "iconKey" e resolvidos
// pelo composable usePortfolioData (que importa os assets locais).
// Para adicionar projetos novos pelo painel admin você pode usar "imageUrl"
// com uma URL externa — o composable dá preferência a imageUrl sobre imageKey.

export const defaultData = {
  about: {
    heroTitle: 'Augusto Santos',
    heroTagline: 'QA · Análise de Requisitos · CPRE-FL Certified',
    heroBio:
      'Apaixonado por motos e tecnologia, atualmente cursando <strong>Análise e Desenvolvimento de Sistemas</strong> e atuando como <strong>Estagiário QA</strong> na Tecsinapse. Certificado <strong>CPRE-FL</strong> pelo IREB.',
    heroTags: ['Testes Automatizados', 'Cloud', 'Javascript', 'DevOps', 'Ruby'],
    linkedinUrl: 'https://www.linkedin.com/in/augusto-arandiba-b26b90105/',
    githubUrl: 'https://github.com/AugustoArand',
    stats: [
      { value: '2+', label: 'Anos de experiência' },
      { value: '7', label: 'Projetos concluídos' },
      { value: '12+', label: 'Tecnologias' },
      { value: '1', label: 'Certificação CPRE-FL' },
    ],
    bioCards: [
      {
        title: 'Experiência em QA',
        text: 'Testes manuais, automatizados, funcionais, não funcionais, regressão e confirmação. Gestão de bugs com <strong>Jira</strong>, <strong>Azure DevOps</strong> e <strong>GitHub Actions</strong>.',
      },
      {
        title: 'Desenvolvimento Full-Stack',
        text: 'JavaScript, Node.js, React, Vue.js, Next.js, Prisma ORM, Ruby. Banco de dados: <strong>PostgreSQL</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong>.',
      },
      {
        title: 'Certificações',
        text: 'Certificação <strong>CPRE-FL</strong> (Engenharia de Requisitos — Nível Fundamental) pelo <strong>IREB</strong>. Aprendizado contínuo em CTFL.',
      },
    ],
  },

  projects: [
    {
      title: 'Sistema de Gerenciamento de Condomínios',
      description:
        'Sistema real desenvolvido para o gerenciamento dos espaços do condomínio e centralização de comunicados importantes.',
      tags: ['Vue.js', 'MongoDB', 'Express', 'Node.js'],
      link: 'https://agendamento-estrela-do-sol.vercel.app',
      repoUrl: 'https://github.com/AugustoArand',
      imageKey: 'sistemaCondominio',
      galleryKey: 'webCondominio',
    },
    {
      title: 'App Sistema de Gerenciamento de Condomínios',
      description:
        'Aplicativo o gerenciamento dos espaços do condomínio e centralização de comunicados importantes.',
      tags: ['Vue.js', 'Redis', 'Express', 'Node.js', 'MySQL'],
      link: '',
      repoUrl: '',
      imageKey: 'appCond01',
      galleryKey: 'appCondominio',
      galleryMode: 'portrait',
    },
    {
      title: 'Gerenciador de Exercícios',
      description:
        'Sistema de gerenciamento de atividades físicas com a biblioteca de geolocalização Leaflet.js.',
      tags: ['Javascript', 'CSS', 'HTML'],
      link: 'https://augustoarand.github.io/mapty-exercise/',
      repoUrl: 'https://github.com/AugustoArand/mapty-exercise',
      imageKey: 'mapty',
      galleryKey: 'gerenciamentoExercicios',
    },
    {
      title: 'Gerenciador e Consultor de Motos',
      description:
        'API REST desenvolvida para o gerenciamento de motos e consulta de informações técnicas.',
      tags: ['Fastify', 'Node.js', 'JavaScript'],
      link: 'https://api-fastify-harley-front.onrender.com',
      repoUrl: 'https://github.com/AugustoArand',
      imageKey: 'motoConsultor',
    },
    {
      title: 'Nexus Notes',
      description: 'Gerenciador de atividades e notas com integração IA, sistema de conexão de ideias, Kanban separado por espaços/projetos, Sistema de lembretes, checklists rápidos e anotações rápidas, biblioteca onde é possível importar pdf e realizar estudos e anotações',
      tags: ['Ruby on Rails 8', 'Vue.js', 'Vite',],
      link: '',
      repoUrl: '',
      imageKey: 'blocoNotas',
      galleryKey: 'nexusNotes',
    },
    {
      title: '[PRIVADO] Storm Ink',
      description: 'Portifolio de tatuagem desenvolvido em Vue.js + Nest.js + Vite',
      tags: ['Nest.Js', 'Vue.js', 'Node.js'],
      link: '',
      repoUrl: '',
      imageKey: 'tattoPortifolio',
    },
    {
      title: 'Pig Game',
      description: 'Um mini game desenvolvido através de JS, HTML e CSS.',
      tags: ['Javascript', 'CSS', 'HTML'],
      link: 'https://augustoarand.github.io/pig-game/',
      repoUrl: 'https://github.com/AugustoArand/pig-game',
      imageKey: 'pigGame',
    },
    {
      title: 'Guess My Number',
      description: 'Um mini game desenvolvido através de JS, HTML e CSS.',
      tags: ['Javascript', 'CSS', 'HTML'],
      link: 'https://augustoarand.github.io/guess-my-number/',
      repoUrl: 'https://github.com/AugustoArand/guess-my-number',
      imageKey: 'guessNumber',
    },
    {
      title: 'AirBNB Demo',
      description: 'Projeto desenvolvido em React + Next.js consumindo a API pública da Airbnb.',
      tags: ['React', 'Next.js'],
      link: '#',
      repoUrl: 'https://github.com/AugustoArand',
      imageKey: 'airBnbDemo',
    },
    {
      title: 'Simulador Conta Bancária',
      description: 'Desenvolvido em JS, CSS e HTML.',
      tags: ['Javascript', 'CSS', 'HTML'],
      link: 'https://augustoarand.github.io/Bank-App/',
      repoUrl: 'https://github.com/AugustoArand/Bank-App',
      imageKey: 'simuladorBanco',
    },
  ],

  stacks: [
    {
      label: '⚡ Frontend',
      stacks: [
        { name: 'Vue.js', iconKey: 'vue', level: 90 },
        { name: 'React', iconKey: 'react', level: 85 },
        { name: 'Javascript', iconKey: 'javascript', level: 80 },
      ],
    },
    {
      label: '🛠️ Backend',
      stacks: [
        { name: 'Node.js', iconKey: 'node', level: 88 },
        { name: 'Ruby on Rails', iconKey: 'ruby', level: 65 },
      ],
    },
    {
      label: '🧪 QA & Automação',
      stacks: [
        { name: 'Robot Framework', iconKey: 'robot', level: 75 },
        { name: 'Cypress', iconKey: 'cypress', level: 78 },
        { name: 'Postman', iconKey: 'postman', level: 92 },
        { name: 'Jmeter', iconKey: 'jmeter', level: 92 },
        { name: 'Playwright', iconKey: 'playwright', level: 40 },
      ],
    },
    {
      label: '🗄️ Banco de Dados & Gestão',
      stacks: [
        { name: 'PostgreSQL', iconKey: 'postgres', level: 80 },
        { name: 'MongoDB', iconKey: 'mongo', level: 92 },
        { name: 'Jira', iconKey: 'jira', level: 92 },
        { name: 'Github Actions', iconKey: 'github', level: 85 },
        { name: 'Grafana', iconKey: 'grafana', level: 70 },
        { name: 'Redis', iconKey: 'redis', level: 50 },

      ],
    },
  ],

  articles: [
    {
      id: 1,
      title:
        'QA Fullstack: O que é esperado de um QA em Tempos de Simbiose entre Dev e IA?',
      excerpt:
        'Mais um artigo de meus devaneios de fim de semana, onde gostaria de deixar uma reflexão também.',
      date: '13 Fev 2026',
      category: 'Qualidade de Software',
      readingTime: '5 min',
      link: 'https://www.linkedin.com/posts/augusto-arandiba-b26b90105_mais-um-artigo-de-meus-devaneios-de-fim-de-activity-7441322726947991552-yHT1?utm_source=share&utm_medium=member_desktop&rcm=ACoAABqxc04BaZOpDNFb1PA22h--uhox89C3GII',
    },
    {
      id: 2,
      title:
        'Entre a Angústia de Heidegger e o Front-end: O que a filosofia ensina sobre aprender o novo.',
      excerpt:
        'Você já sentiu que o destino te lançou em um projeto para o qual você não se sentia pronto, mas que acabou te transformando?',
      date: '13 Fev 2026',
      category: 'Dev',
      readingTime: '4 min',
      link: 'https://www.linkedin.com/posts/augusto-arandiba-b26b90105_voc%C3%AA-j%C3%A1-sentiu-que-o-destino-te-lan%C3%A7ou-activity-7427915010812616704-e9YM?utm_source=share&utm_medium=member_desktop&rcm=ACoAABqxc04BaZOpDNFb1PA22h--uhox89C3GII',
    },
    {
      id: 3,
      title:
        'Dose Diária de CPRE-FL - Cap. 02 PRINCIPIOS FUNDAMENTAIS DA ENGENHARIA DE REQUISITOS',
      excerpt:
        'A principal proposta de valor do CPRE-FL é padronizar a comunicação. Muitos projetos falham não por incompetência técnica.',
      date: '10 Dez 2025',
      category: 'CPRE-FL',
      readingTime: '5 min',
      link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7404692249500151808/?skipRedirect=true',
    },
    {
      id: 4,
      title: 'Dose Diária de CTFL Tester Foundation - Cap. 06 - Ferramentas de Teste',
      excerpt:
        'Neste artigo exploramos as principais ferramentas de teste segundo o CTFL Foundation Level',
      date: '29 Out 2025',
      category: 'CTFL-FL',
      readingTime: '4 min',
      link: 'https://www.linkedin.com/pulse/dose-diária-de-ctfl-tester-foundation-cap-06-teste-arandiba-e7fff/',
    },
    {
      id: 5,
      title: 'Dose Diária de CTFL Tester Foundation - Cap. 04 - Análise e Modelagem de Teste',
      excerpt:
        'Nesta etapa crucial do ciclo de vida de testes, o foco é em compreender, estruturar e desenhar a estratégia.',
      date: '22 Out 2025',
      category: 'CTFL-FL',
      readingTime: '4 min',
      link: 'https://www.linkedin.com/pulse/dose-diária-de-ctfl-tester-foundation-cap-04-análise-arandiba-4y5bf/',
    },
    {
      id: 6,
      title: 'Dose Diária de CTFL Agile Tester - Cap. 02 - Principios do Teste Ágil',
      excerpt:
        'Atividades de Teste e Desenvolvimento no contexto ágil e seus produtos de trabalho.',
      date: '06 Out 2025',
      category: 'CTFL-AT',
      readingTime: '4 min',
      link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7381144621973766146/?skipRedirect=true',
    },
    {
      id: 7,
      title: 'Dose Diária de CTFL Tester Foundation - Cap. 02 - Tipos de Teste.',
      excerpt:
        'Os níveis de teste no CTFL Syllabus são etapas completamente distintas dentro do processo de teste.',
      date: '09 Set 2025',
      category: 'CTFL-FL',
      readingTime: '5 min',
      link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7371207686669012992/?skipRedirect=true',
    },
    {
      id: 8,
      title: 'Dose Diária CTFL Tester Foundation - Cap. 02',
      excerpt:
        'Os testes ao longo do SDLC descrevem os tipos de atividades realizadas em cada estágio do projeto.',
      date: '02 Set 2025',
      category: 'CTFL-FL',
      readingTime: '5 min',
      link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7368838098832568320/?skipRedirect=true',
    },
  ],

  contact: {
    name: 'Augusto Santos',
    role: 'QA · Full-Stack Developer · Test Automation',
    email: 'augustoarandiba@gmail.com',
    phone: '+55 (71) 98490-9210',
    location: 'Bahia, Brasil',
    githubUrl: 'https://github.com/AugustoArand',
    linkedinUrl: 'https://www.linkedin.com/in/augusto-arandiba-b26b90105/',
  },
}
