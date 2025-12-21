<template>
  <section id="stacks" class="stacks-section">
    <h2>Stacks Conhecidas</h2>
    <div class="stacks-grid">
      <div v-for="stack in stacks" :key="stack.name" class="stack-card">
        <div class="stack-icon">
          <img :src="stack.icon" :alt="stack.name" />
        </div>
        <h3>{{ stack.name }}</h3>
        <p>{{ stack.description }}</p>
        <div class="stack-level">
          <div class="level-bar">
            <div class="level-fill" :style="{ width: stack.level + '%' }"></div>
          </div>
          <span class="level-text">{{ stack.level }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>



<script>

  import vueIcon from '../assets/pics/vue.png'
  import reactIcon from '../assets/pics/react.png'
  import nodeIcon from '../assets/pics/node.png'
  import rubyIcon from '../assets/pics/ruby.png'
  import javascriptIcon from '../assets/pics/JS.jpg'
  import robotIcon from '../assets/pics/robotframework.png'
  import cypressIcon from '../assets/pics/cypress.png'
  import postgresIcon from '../assets/pics/postgres.jpg'
  import mongoIcon from '../assets/pics/mongodb.jpg'
  import postmanIcon from '../assets/pics/postman.png'
  import jmeterIcon from '../assets/pics/jmeter.png'
  import jiraIcon from '../assets/pics/jira.png'

export default {
  name: 'StacksSection',
  data() {
    return {
      stacks: [
        {
          name: 'Vue.js',
          description: 'Framework JavaScript progressivo para construção de interfaces de usuário.',
          icon: vueIcon,
          level: 90
        },
        {
          name: 'React',
          description: 'Desenvolvimento de projetos web utilizando React e Next.js.',
          icon: reactIcon,
          level: 85
        },
        {
          name: 'Node.js',
          description: 'Desenvolvimento de APIs e RestAPIs, aplicações web com arquitetura MVC.',
          icon: nodeIcon,
          level: 88
        },
        {
          name: 'Ruby on Rails',
          description: 'Desenvolvimento fullstack com Ruby on Rails.',
          icon: rubyIcon,
          level: 65
        },
        {
          name: 'Javascript',
          description: 'Desenvolvimento de aplicações front e back end',
          icon: javascriptIcon,
          level: 80
        },
        {
          name: 'Robot Framework',
          description: 'Automações Front e Back End, Integração com Selenium e Appium',
          icon: robotIcon,
          level: 75
        },
        {
          name: 'Cypress',
          description: 'Automações Front e Back End, integração com Cypress Cloud e GitHub Actions',
          icon: cypressIcon,
          level: 78
        },
        {
          name: 'PostgreSQL',
          description: 'Consulta e Gerenciamento de Banco de Dados Relacionais',
          icon: postgresIcon,
          level: 80
        },
        {
          name: 'MongoDB',
          description: 'Criação, gestão, consulta de banco de dados NoSQL. ',
          icon: mongoIcon,
          level: 92
        },

        {
          name: 'Postman',
          description: 'Testes de APIs RESTful e automação de requisições.',
          icon: postmanIcon,
          level: 92
        },

        {
          name: 'Jmeter',
          description: 'Testes de carga e performance',
          icon: jmeterIcon,
          level: 92
        },

        {
          name: 'Jira',
          description: 'Gestão de projetos, criação de pipelines, gerenciamento e report de bugs.',
          icon: jiraIcon,
          level: 92
        }
      ]
    }
  }
}
</script>

<style scoped>
.stacks-section {
  background-color: white;
}

.stacks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stack-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stack-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.stack-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stack-icon img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.stack-card h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.stack-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.stack-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.level-bar {
  flex: 1;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b983, #34a870);
  border-radius: 10px;
  transition: width 0.5s ease;
}

.level-text {
  font-weight: 600;
  color: #42b983;
  font-size: 0.9rem;
  min-width: 45px;
}

@media (max-width: 768px) {
  .stacks-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .stack-card {
    padding: 1.5rem;
  }
}
</style>
