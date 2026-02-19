<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">Portfólio</p>
        <h2 class="section-title">Projetos em Destaque</h2>
        <p class="section-subtitle">
          Conheça alguns dos projetos que desenvolvi ao longo da minha jornada
        </p>
      </div>

      <!-- Featured project (first, larger) -->
      <div v-if="projects.length" class="featured-project" >
        <div class="featured-image-wrap">
          <img :src="projects[0].image" :alt="projects[0].title" class="featured-img" />
          <div class="featured-overlay">
            <a :href="projects[0].link" target="_blank" class="overlay-btn">
              <EyeOutlined /> Ver Projeto
            </a>
          </div>
        </div>
        <div class="featured-info">
          <span class="featured-tag">⭐ Destaque</span>
          <h3 class="featured-title">{{ projects[0].title }}</h3>
          <p class="featured-desc">{{ projects[0].description }}</p>
          <div class="project-tags">
            <span v-for="t in projects[0].tags" :key="t" class="tech-tag">{{ t }}</span>
          </div>
          <a :href="projects[0].link" target="_blank" class="featured-link">
            Acessar Projeto <ArrowRightOutlined />
          </a>
        </div>
      </div>

      <!-- Supporting projects grid -->
      <div class="projects-grid">
        <div
          v-for="(project, index) in displayedProjects"
          :key="project.title"
          class="project-card"
          :style="{ animationDelay: `${index * 0.08}s` }"
        >
          <div class="card-image-wrap">
            <img :src="project.image" :alt="project.title" class="card-img" />
            <div class="card-overlay">
              <a :href="project.link" target="_blank" class="overlay-icon-btn">
                <EyeOutlined />
              </a>
            </div>
          </div>
          <div class="card-body">
            <div class="project-tags">
              <span v-for="t in project.tags" :key="t" class="tech-tag">{{ t }}</span>
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.description }}</p>
            <a :href="project.link" target="_blank" class="card-link">
              Ver projeto <ArrowRightOutlined />
            </a>
          </div>
        </div>
      </div>

      <div v-if="projects.length > 4" class="view-all-wrap">
        <button class="view-all-btn" @click="$router.push('/projetos')">
          Ver todos os projetos ({{ projects.length }})
          <ArrowRightOutlined />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ArrowRightOutlined, EyeOutlined, ProjectOutlined } from '@ant-design/icons-vue'
import maptyImage from '../assets/pics/mapty.PNG'
import pigGameImage from '../assets/pics/pig-game.PNG'
import guessNumberImage from '../assets/pics/guess-my-number.PNG'
import airBnbDemoImage from '../assets/pics/airbnb-demo.PNG'
import simuladorBancoImage from '../assets/pics/simulador-banco.png'
import motoConsultorImage from '../assets/pics//fastify-project.png'
import sistemaCondominioImage from '../assets/pics/cond-agend.png'

export default {
  name: 'ProjectsSection',
  components: { ArrowRightOutlined, EyeOutlined, ProjectOutlined },
  data() {
    return {
      projects: [
        {
          title: 'Sistema de Gerenciamento de Condomínios',
          description: 'Sistema real desenvolvido para o gerenciamento dos espaços do condomínio e centralização de comunicados importantes.',
          image: sistemaCondominioImage,
          tags: ['Vue.js', 'MongoDB', 'Express', 'Node.js'],
          link: 'https://agendamento-estrela-do-sol.vercel.app'
        },
        {
          title: 'Gerenciador de Exercícios',
          description: 'Sistema de gerenciamento de atividades físicas com a biblioteca de geolocalização Leaflet.js.',
          image: maptyImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/mapty-exercise/'
        },
        {
          title: 'Gerenciador e Consultor de Motos',
          description: 'API REST desenvolvida para o gerenciamento de motos e consulta de informações técnicas.',
          image: motoConsultorImage,
          tags: ['Fastify', 'Node.js', 'JavaScript'],
          link: 'https://api-fastify-harley-front.onrender.com'
        },
        {
          title: 'Pig Game',
          description: 'Um mini game desenvolvido através de JS, HTML e CSS.',
          image: pigGameImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/pig-game/'
        },
        {
          title: 'Guess My Number',
          description: 'Um mini game desenvolvido através de JS, HTML e CSS.',
          image: guessNumberImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/guess-my-number/'
        },
        {
          title: 'AirBNB Demo',
          description: 'Projeto desenvolvido em React + Next.js consumindo a API pública da Airbnb.',
          image: airBnbDemoImage,
          tags: ['React', 'Next.js'],
          link: '#'
        },
        {
          title: 'Simulador Conta Bancária',
          description: 'Desenvolvido em JS, CSS e HTML.',
          image: simuladorBancoImage,
          tags: ['Javascript', 'CSS', 'HTML'],
          link: 'https://augustoarand.github.io/Bank-App/'
        },
      ]
    }
  },
  computed: {
    // Projects 1..4 for the supporting grid (after the featured [0])
    displayedProjects() { return this.projects.slice(1, 5) }
  }
}
</script>

<style scoped>
.projects-section {
  background: var(--color-bg-alt);
  padding: 6rem 0;
  border-top: 1px solid var(--color-border);
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-white);
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
  max-width: 520px;
  margin: 0 auto;
}

/* ─── Featured ─────────────────────────────────── */
.featured-project {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 2.5rem;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  margin-bottom: 2rem;
  transition: border-color 0.3s ease;
}

.featured-project:hover {
  border-color: rgba(66,185,131,0.3);
}

.featured-image-wrap {
  position: relative;
  overflow: hidden;
  min-height: 320px;
}

.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.featured-project:hover .featured-img { transform: scale(1.04); }

.featured-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8,8,8,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.featured-project:hover .featured-overlay { opacity: 1; }

.overlay-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  background: var(--color-green);
  color: white;
  border-radius: 50px;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.95rem;
  transition: transform 0.2s ease;
}

.overlay-btn:hover { transform: scale(1.05); color: white; }

.featured-info {
  padding: 2.5rem 2.5rem 2.5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.featured-tag {
  display: inline-flex;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  background: var(--color-green-dim);
  border: 1px solid rgba(66,185,131,0.3);
  color: var(--color-green);
  width: fit-content;
}

.featured-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.featured-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.featured-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  color: var(--color-green);
  text-decoration: none;
  font-size: 0.95rem;
  transition: gap 0.2s ease;
}

.featured-link:hover { gap: 0.9rem; color: #5de0a1; }

/* ─── Grid ─────────────────────────────────────── */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.project-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  animation: fadeInUp 0.6s ease-out both;
}

.project-card:hover {
  border-color: rgba(66,185,131,0.3);
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.4);
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}

.card-image-wrap {
  position: relative;
  overflow: hidden;
  height: 180px;
  background: var(--color-bg);
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .card-img { transform: scale(1.1); }

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8,8,8,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay { opacity: 1; }

.overlay-icon-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-green);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  text-decoration: none;
  transition: transform 0.2s;
}

.overlay-icon-btn:hover { transform: scale(1.15); color: white; }

.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.2rem 0.65rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  background: var(--color-bg-card);
  transition: all 0.2s ease;
}

.tech-tag:hover {
  border-color: var(--color-green);
  color: var(--color-green);
  background: var(--color-green-dim);
}

.card-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.4;
}

.card-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-green);
  text-decoration: none;
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--color-border);
  transition: gap 0.2s;
}

.card-link:hover { gap: 0.75rem; color: #5de0a1; }

/* ─── View All ─────────────────────────────────── */
.view-all-wrap {
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
}

.view-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 2.5rem;
  border-radius: 50px;
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: var(--font-body);
}

.view-all-btn:hover {
  border-color: var(--color-green);
  color: var(--color-green);
  background: var(--color-green-dim);
}

/* ─── Responsive ────────────────────────────────── */
@media (max-width: 1100px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 900px) {
  .featured-project { grid-template-columns: 1fr; }
  .featured-image-wrap { min-height: 240px; }
  .featured-info { padding: 1.5rem; }
  .featured-title { font-size: 1.4rem; }
}

@media (max-width: 640px) {
  .projects-grid { grid-template-columns: 1fr; }
  .featured-project { border-radius: var(--radius-lg); }
}
</style>
