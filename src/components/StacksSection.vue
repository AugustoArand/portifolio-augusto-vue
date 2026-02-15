<template>
  <section id="stacks" class="stacks-section">
    <div class="section-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
    
    <div class="stacks-container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-gradient">Stacks Conhecidas</span>
        </h2>
        <p class="section-subtitle">Tecnologias e ferramentas que domino</p>
      </div>
      
      <a-row :gutter="[24, 24]">
        <a-col 
          v-for="(stack, index) in stacks" 
          :key="stack.name" 
          :xs="24" 
          :sm="12" 
          :md="8" 
          :lg="6"
          class="stack-col"
        >
          <div class="stack-card" :style="{ animationDelay: `${index * 0.05}s` }">
            <div class="card-glow"></div>
            <div class="stack-icon-wrapper">
              <img 
                :src="stack.icon" 
                :alt="stack.name"
                class="stack-icon"
              />
            </div>
            <h3 class="stack-name">{{ stack.name }}</h3>
            <p class="stack-description">{{ stack.description }}</p>
            <div class="stack-progress">
              <div class="progress-label">
                <span>Proficiência</span>
                <span class="progress-value">{{ stack.level }}%</span>
              </div>
              <div class="progress-bar">
                <div 
                  class="progress-fill" 
                  :style="{ width: stack.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
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
          description: 'Criação, gestão, consulta de banco de dados NoSQL.',
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
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d3d2d 100%);
  padding: 5rem 0;
  overflow: hidden;
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 18s infinite ease-in-out;
}

.shape-1 {
  width: 250px;
  height: 250px;
  top: 10%;
  right: 5%;
  animation-delay: 0s;
}

.shape-2 {
  width: 180px;
  height: 180px;
  bottom: 15%;
  left: 8%;
  animation-delay: 5s;
}

.shape-3 {
  width: 200px;
  height: 200px;
  top: 50%;
  right: 15%;
  animation-delay: 10s;
}

.shape-4 {
  width: 150px;
  height: 150px;
  bottom: 25%;
  right: 25%;
  animation-delay: 13s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(30px, -30px) rotate(90deg);
  }
  50% {
    transform: translate(0, 50px) rotate(180deg);
  }
  75% {
    transform: translate(-30px, 20px) rotate(270deg);
  }
}

.stacks-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  margin-bottom: 1rem;
}

.title-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3rem;
  font-weight: 700;
  display: inline-block;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.2rem;
  margin: 0;
}

.stack-col {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stack-card {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(66, 185, 131, 0.2) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.stack-card:hover .card-glow {
  opacity: 1;
}

.stack-card:hover {
  transform: translateY(-10px) rotate(2deg);
  box-shadow: 0 20px 60px rgba(66, 185, 131, 0.4);
}

.stack-icon-wrapper {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgba(66, 185, 131, 0.1) 0%, rgba(52, 168, 112, 0.1) 100%);
  border-radius: 20px;
  margin-bottom: 1.5rem;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
}

.stack-card:hover .stack-icon-wrapper {
  transform: scale(1.1) rotate(-5deg);
  background: linear-gradient(135deg, rgba(66, 185, 131, 0.2) 0%, rgba(52, 168, 112, 0.2) 100%);
}

.stack-icon {
  width: 70px;
  height: 70px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.stack-card:hover .stack-icon {
  transform: scale(1.1);
}

.stack-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.75rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.stack-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.stack-progress {
  width: 100%;
  position: relative;
  z-index: 1;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  color: #666;
  font-weight: 600;
}

.progress-value {
  color: #42b983;
  font-weight: 700;
  font-size: 1rem;
}

.progress-bar {
  width: 100%;
  height: 10px;
  background: rgba(66, 185, 131, 0.15);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b983 0%, #34a870 100%);
  border-radius: 10px;
  transition: width 1.5s ease-out;
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.4), 
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@media (max-width: 768px) {
  .stacks-section {
    padding: 3rem 0;
  }
  
  .stacks-container {
    padding: 0 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }
  
  .title-gradient {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .stack-card {
    padding: 1.5rem 1rem;
  }

  .stack-icon-wrapper {
    width: 80px;
    height: 80px;
  }

  .stack-icon {
    width: 55px;
    height: 55px;
  }

  .stack-name {
    font-size: 1.1rem;
  }

  .stack-description {
    font-size: 0.85rem;
  }
}
</style>
