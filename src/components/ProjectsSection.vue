<template>
  <section id="projects" class="projects-section">
    <h2>Projetos</h2>
    <div class="carousel-container">
      <button class="carousel-btn prev" @click="prevProject" :disabled="currentIndex === 0">
        ‹
      </button>
      <div class="carousel-content">
        <transition name="slide" mode="out-in">
          <div :key="currentIndex" class="project-card">
            <img :src="currentProject.image" :alt="currentProject.title" class="project-image" />
            <div class="project-info">
              <h3>{{ currentProject.title }}</h3>
              <p>{{ currentProject.description }}</p>
              <div class="project-tags">
                <span v-for="tag in currentProject.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
              <a :href="currentProject.link" target="_blank" class="project-link">Ver Projeto →</a>
            </div>
          </div>
        </transition>
      </div>
      <button class="carousel-btn next" @click="nextProject" :disabled="currentIndex === projects.length - 1">
        ›
      </button>
    </div>
    <div class="carousel-indicators">
      <span 
        v-for="(project, index) in projects" 
        :key="index" 
        class="indicator"
        :class="{ active: index === currentIndex }"
        @click="goToProject(index)"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      currentIndex: 0,
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'Plataforma de e-commerce completa com carrinho de compras, pagamentos e gestão de produtos. Desenvolvida com Vue.js e Node.js.',
          image: 'https://via.placeholder.com/600x400/42b983/ffffff?text=E-commerce',
          tags: ['Vue.js', 'Node.js', 'MongoDB'],
          link: '#'
        },
        {
          title: 'Sistema de Gestão',
          description: 'Sistema web para gestão empresarial com módulos de vendas, estoque e relatórios. Interface intuitiva e responsiva.',
          image: 'https://via.placeholder.com/600x400/3498db/ffffff?text=Sistema+Gestao',
          tags: ['React', 'Express', 'PostgreSQL'],
          link: '#'
        },
        {
          title: 'App Mobile',
          description: 'Aplicativo mobile multiplataforma para delivery de alimentos com rastreamento em tempo real e pagamento integrado.',
          image: 'https://via.placeholder.com/600x400/e74c3c/ffffff?text=App+Mobile',
          tags: ['React Native', 'Firebase', 'API REST'],
          link: '#'
        },
        {
          title: 'Dashboard Analytics',
          description: 'Dashboard interativo para visualização de dados e análise de métricas com gráficos e relatórios customizados.',
          image: 'https://via.placeholder.com/600x400/9b59b6/ffffff?text=Dashboard',
          tags: ['Vue.js', 'D3.js', 'Python'],
          link: '#'
        }
      ]
    }
  },
  computed: {
    currentProject() {
      return this.projects[this.currentIndex]
    }
  },
  methods: {
    nextProject() {
      if (this.currentIndex < this.projects.length - 1) {
        this.currentIndex++
      }
    },
    prevProject() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    goToProject(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.projects-section {
  background-color: #f5f5f5;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.carousel-content {
  flex: 1;
  overflow: hidden;
}

.project-card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.project-info {
  padding: 2rem;
}

.project-info h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.project-info p {
  margin-bottom: 1.5rem;
  color: #666;
  line-height: 1.6;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tag {
  background-color: #42b983;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.project-link {
  display: inline-block;
  color: #42b983;
  font-weight: 600;
  font-size: 1.1rem;
}

.carousel-btn {
  background-color: #42b983;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover:not(:disabled) {
  background-color: #34a870;
  transform: scale(1.1);
}

.carousel-btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
  opacity: 0.5;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ddd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background-color: #42b983;
  transform: scale(1.2);
}

.indicator:hover {
  background-color: #34a870;
}

/* Slide transition */
.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

@media (max-width: 768px) {
  .carousel-container {
    gap: 1rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }

  .project-image {
    height: 200px;
  }

  .project-info {
    padding: 1.5rem;
  }
}
</style>
