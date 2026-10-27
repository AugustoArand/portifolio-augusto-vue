<template>
  <section id="stacks" class="stacks-section">
    <div class="container">
      <h2 class="section-label section-header">// stacks</h2>

      <div class="stack-groups">
        <div v-for="group in stackGroups" :key="group.label" class="stack-group">
          <h3 class="group-label mono">{{ group.cleanLabel }}</h3>
          <ul class="group-list">
            <li v-for="stack in group.stacks" :key="stack.name" class="stack-item">
              <span>{{ stack.name }}</span>
              <span class="stack-level mono" :title="`Nível: ${stack.level}%`">{{ stack.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { usePortfolioData } from '../composables/usePortfolioData.js'

export default {
  name: 'StacksSection',
  setup() {
    const { portfolioData } = usePortfolioData()
    // Remove o emoji do início do rótulo ("⚡ Frontend" → "frontend")
    const stackGroups = computed(() =>
      portfolioData.value.stacks.map((g) => ({
        ...g,
        cleanLabel: g.label.replace(/^[^\p{L}]+/u, '').toLowerCase(),
      }))
    )
    return { stackGroups }
  },
}
</script>

<style scoped>
.stacks-section {
  padding: 3rem 0 6rem;
}

.section-header {
  margin-bottom: 2.5rem;
}

.stack-groups {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2.5rem 2rem;
}

.group-label {
  font-size: 0.75rem;
  font-weight: 400;
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.group-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.stack-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  color: var(--color-text);
}

.stack-level {
  font-size: 0.6875rem;
  color: var(--color-text-muted);
}
</style>
