<template>
  <section class="all-projects-page">
    <div class="section-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    
    <div class="projects-header">
      <button 
        class="back-btn"
        @click="$router.push('/')"
      >
        <LeftOutlined /> Voltar
      </button>
      <h1 class="page-title">
        <span class="title-gradient">Todos os Projetos</span>
      </h1>
      <p class="page-subtitle">
        <span> Qualquer dúvida, contate-me! </span>
      </p>
    </div>

    <div class="projects-container">
      <a-row :gutter="[32, 32]">
        <a-col 
          v-for="(project, index) in projects" 
          :key="project.title" 
          :xs="24" 
          :sm="12" 
          :lg="8"
          class="project-col"
        >
          <div class="project-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="project-image-container">
              <img :src="project.image" :alt="project.title" class="project-image" />
              <div class="project-overlay">
                <a 
                  :href="project.link" 
                  target="_blank"
                  class="view-project-btn"
                >
                  <EyeOutlined class="btn-icon" /> Ver Projeto
                </a>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-icon">
                <ProjectOutlined />
              </div>
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              
              <div class="project-tags">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag" 
                  class="tech-tag"
                >
                  {{ tag }}
                </span>
              </div>
              
              <a 
                :href="project.link" 
                target="_blank"
                class="project-link"
              >
                Acessar projeto <ArrowRightOutlined class="arrow-icon" />
              </a>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
import { ProjectOutlined, ArrowRightOutlined, EyeOutlined, LeftOutlined } from '@ant-design/icons-vue'
import maptyImage from '../assets/pics/mapty.PNG'
import pigGameImage from '../assets/pics/pig-game.PNG'
import guessNumberImage from '../assets/pics/guess-my-number.PNG'
import airBnbDemoImage from '../assets/pics/airbnb-demo.PNG'
import simuladorBancoImage from '../assets/pics/simulador-banco.png'
import motoConsultorImage from '../assets/pics//fastify-project.png'
import sistemaCondominioImage from '../assets/pics/cond-agend.png'

export default {
  name: 'AllProjects',
  components: {
    ProjectOutlined,
    ArrowRightOutlined,
    EyeOutlined,
    LeftOutlined
  },
  data() {
    return {
      projects: [
        {
          title: 'Sistema de Gerenciamento de Condomínios',
          description: 'Sistema real desenvolvido para o gerenciamento dos espaços do condominio e centralização de comunicados importantes',
          image: sistemaCondominioImage,
          tags: ['Vue.js', 'MongoDB', 'Express', 'Node.js'],
          link: 'https://agendamento-estrela-do-sol.vercel.app'
        },
        {
          title: 'Gerenciador de Exericios',
          description: 'Desenvolvido em JS | CSS | HTML | Leatflet.js',
          image: maptyImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/mapty-exercise/'
        },
        {
          title: 'Pig Game',
          description: 'Um mini game desenvolvido em através de JS, HTML e CSS',
          image: pigGameImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/pig-game/'
        },
        {
          title: 'Guess My Number',
          description: 'Um mini game desenvolvido em através de JS, HTML e CSS.',
          image: guessNumberImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/guess-my-number/'
        },
        {
          title: 'AirBNB Demo',
          description: 'Projeto desenvolvido em React + Next.js consumindo a API pública da própria Airbnb',
          image: airBnbDemoImage,
          tags: ['React', 'Next.js'],
          link: '#'
        },
        {
          title: 'Simulador Conta Bancária',
          description: 'Desenvolvido em JS | CSS e HTML',
          image: simuladorBancoImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/Bank-App/'
        },
        {
          title: 'Gerenciador e Consultor de Motos',
          description: 'API REST desenvolvida com Fastify e Node.js',
          image: motoConsultorImage,
          tags: ['Fastify', 'Node.js', 'JavaScript'],
          link: 'https://api-fastify-opv8.onrender.com'
        }
      ]
    }
  }
}
</script>

<style scoped>
.all-projects-page {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #0d3d2d 100%);
  padding: 2rem 0 5rem;
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
  background: rgba(66, 185, 131, 0.1);
  animation: float 22s infinite ease-in-out;
}

.shape-1 {
  width: 280px;
  height: 280px;
  top: -80px;
  right: -80px;
  animation-delay: 0s;
}

.shape-2 {
  width: 220px;
  height: 220px;
  bottom: -60px;
  left: 10%;
  animation-delay: 7s;
}

.shape-3 {
  width: 180px;
  height: 180px;
  top: 30%;
  left: -60px;
  animation-delay: 14s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(40px, 40px) rotate(90deg);
  }
  50% {
    transform: translate(0, 80px) rotate(180deg);
  }
  75% {
    transform: translate(-40px, 40px) rotate(270deg);
  }
}

.projects-header {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.back-btn {
  position: absolute;
  left: 2rem;
  top: 0;
  background: rgba(66, 185, 131, 0.2);
  color: #42b983;
  border: 1px solid rgba(66, 185, 131, 0.3);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-btn:hover {
  background: rgba(66, 185, 131, 0.3);
  transform: translateX(-5px);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
}

.page-title {
  margin-bottom: 1.5rem;
  margin-top: 3rem;
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

.page-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

.projects-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.project-col {
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

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(66, 185, 131, 0.4);
}

.project-image-container {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-image {
  transform: scale(1.15);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(66, 185, 131, 0.85) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project-btn {
  background: linear-gradient(135deg, #42b983 0%, #34a870 100%);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
}

.view-project-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 25px rgba(66, 185, 131, 0.6);
  background: linear-gradient(135deg, #34a870 0%, #2d9361 100%);
}

.btn-icon {
  font-size: 1.2rem;
}

.project-content {
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #42b983 0%, #34a870 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.project-card:hover .project-icon {
  transform: rotate(360deg);
}

.project-title {
  color: #2c3e50;
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.4;
  min-height: 3.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-description {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: linear-gradient(135deg, rgba(66, 185, 131, 0.15) 0%, rgba(52, 168, 112, 0.15) 100%);
  color: #42b983;
  border: 1px solid rgba(66, 185, 131, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  padding: 0.4rem 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: linear-gradient(135deg, #42b983 0%, #34a870 100%);
  color: white;
  transform: translateY(-2px);
}

.project-link {
  color: #42b983;
  font-weight: 700;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.project-link:hover {
  color: #34a870;
  gap: 1rem;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.project-link:hover .arrow-icon {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .all-projects-page {
    padding: 1rem 0 3rem;
  }
  
  .projects-header {
    padding: 0 1rem 3rem;
  }

  .back-btn {
    position: static;
    margin-bottom: 2rem;
  }

  .page-title {
    margin-top: 0;
  }
  
  .title-gradient {
    font-size: 2rem;
  }
  
  .page-subtitle {
    font-size: 1rem;
  }
  
  .projects-container {
    padding: 0 1rem;
  }
  
  .project-image-container {
    height: 200px;
  }

  .project-content {
    padding: 1.5rem;
  }
  
  .project-title {
    min-height: auto;
    font-size: 1.1rem;
  }
  
  .project-description {
    min-height: auto;
  }
}
</style>
