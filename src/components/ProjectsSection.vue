<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-label">// projetos selecionados</h2>
        <router-link v-if="projects.length > displayedProjects.length" to="/projetos" class="view-all mono">
          ver todos ({{ projects.length }}) →
        </router-link>
      </div>

      <ul class="project-list">
        <li v-for="(project, index) in displayedProjects" :key="project.title">
          <button type="button" class="project-row" @click="openModal(project)">
            <span class="row-index mono">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="row-title">{{ project.title }}</span>
            <span class="row-tags mono">{{ (project.tags || []).slice(0, 3).join(' · ') }}</span>
            <span class="row-arrow" aria-hidden="true">→</span>
            <img
              v-if="project.image"
              :src="project.image"
              alt=""
              class="row-preview"
              loading="lazy"
            />
          </button>
        </li>
      </ul>
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
import ProjectModal from './ProjectModal.vue'

export default {
  name: 'ProjectsSection',
  components: { ProjectModal },
  setup() {
    const { portfolioData } = usePortfolioData()
    const projects = computed(() => portfolioData.value.projects)
    const displayedProjects = computed(() => projects.value.slice(0, 6))

    const modalVisible = ref(false)
    const selectedProject = ref(null)

    function openModal(project) {
      selectedProject.value = project
      modalVisible.value = true
    }

    return { projects, displayedProjects, modalVisible, selectedProject, openModal }
  },
}
</script>

<style scoped>
.projects-section {
  padding: 3rem 0 6rem;
}

.section-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 2rem;
}

.view-all {
  font-size: 0.8125rem;
}

.project-list {
  list-style: none;
  border-top: 1px solid var(--color-border);
}

.project-list li {
  border-bottom: 1px solid var(--color-border);
}

.project-row {
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem 1.5rem;
  padding: 1.75rem 0.75rem;
  background: transparent;
  border: none;
  color: var(--color-text);
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: background 0.25s ease;
}

.project-row:hover {
  background: var(--color-bg-raised);
}

.row-index {
  width: 2rem;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.row-title {
  flex: 1 1 320px;
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.row-tags {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.row-arrow {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  transition: transform 0.25s ease, color 0.25s ease;
}

.project-row:hover .row-arrow {
  transform: translateX(6px);
  color: var(--color-accent);
}

/* Prévia da imagem que aparece ao passar o mouse (só desktop) */
.row-preview {
  position: absolute;
  right: 4rem;
  top: 50%;
  width: 220px;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%) rotate(-2deg) scale(0.95);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 2;
}

.project-row:hover .row-preview {
  opacity: 1;
  transform: translateY(-50%) rotate(-2deg) scale(1);
}

@media (max-width: 900px), (hover: none) {
  .row-preview { display: none; }
}

@media (max-width: 640px) {
  .row-title { font-size: 1.25rem; }
  .row-arrow { display: none; }
}
</style>
