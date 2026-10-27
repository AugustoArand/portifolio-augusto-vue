<template>
  <section class="all-projects-page">
    <div class="container">
      <router-link to="/" class="back-link mono">← voltar</router-link>

      <div class="page-header">
        <h1 class="page-title">Todos os projetos</h1>
        <p class="page-subtitle mono">{{ projects.length }} trabalhos · qualquer dúvida, me chama</p>
      </div>

      <div class="projects-grid">
        <button
          v-for="(project, index) in projects"
          :key="project.title"
          type="button"
          class="project-card"
          @click="openModal(project)"
        >
          <div class="card-image">
            <img v-if="project.image" :src="project.image" :alt="project.title" loading="lazy" />
          </div>
          <div class="card-body">
            <span class="card-index mono">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-desc">{{ project.description }}</p>
            <span class="card-tags mono">{{ (project.tags || []).join(' · ') }}</span>
          </div>
        </button>
      </div>
    </div>

    <ProjectModal
      :visible="modalVisible"
      :project="selectedProject"
      @close="modalVisible = false"
    />
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { usePortfolioData } from '../composables/usePortfolioData.js'
import ProjectModal from '../components/ProjectModal.vue'

export default {
  name: 'AllProjects',
  components: { ProjectModal },
  setup() {
    const { portfolioData } = usePortfolioData()
    const projects = computed(() => portfolioData.value.projects)

    const modalVisible = ref(false)
    const selectedProject = ref(null)

    function openModal(project) {
      selectedProject.value = project
      modalVisible.value = true
    }

    return { projects, modalVisible, selectedProject, openModal }
  },
}
</script>

<style scoped>
.all-projects-page {
  padding: 9rem 0 4rem;
  min-height: 100vh;
}

.back-link {
  display: inline-block;
  font-size: 0.8125rem;
  margin-bottom: 3rem;
}

.page-header {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 4rem;
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1;
}

.page-subtitle {
  font-size: 0.8125rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem 2rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: transparent;
  border: none;
  padding: 0;
  color: var(--color-text);
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.card-image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  background: var(--color-bg-raised);
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(0.6);
  transition: filter 0.4s ease, transform 0.5s ease;
}

.project-card:hover .card-image img {
  filter: grayscale(0);
  transform: scale(1.03);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-index {
  font-size: 0.75rem;
  color: var(--color-accent);
}

.card-title {
  font-size: 1.25rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.project-card:hover .card-title { color: var(--color-accent); }

.card-desc {
  font-size: 0.9375rem;
  line-height: 1.6;
}

.card-tags {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}
</style>
