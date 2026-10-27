<template>
  <section id="articles" class="articles-section">
    <div class="container">
      <h2 class="section-label section-header">// escritos</h2>

      <ul class="article-list">
        <li v-for="article in visibleArticles" :key="article.id">
          <a :href="article.link" target="_blank" rel="noopener" class="article-row">
            <span class="row-date mono">{{ article.date.toLowerCase() }}</span>
            <span class="row-title">{{ article.title }}</span>
            <span class="row-meta mono">{{ article.category.toLowerCase() }} · {{ article.readingTime }}</span>
          </a>
        </li>
      </ul>

      <button
        v-if="articles.length > initialCount"
        type="button"
        class="toggle-btn mono"
        @click="showAll = !showAll"
      >
        {{ showAll ? 'mostrar menos ↑' : `ver todos (${articles.length}) ↓` }}
      </button>
    </div>
  </section>
</template>

<script>
import { computed, ref } from 'vue'
import { usePortfolioData } from '../composables/usePortfolioData.js'

export default {
  name: 'ArticlesSection',
  setup() {
    const { portfolioData } = usePortfolioData()
    const initialCount = 5
    const showAll = ref(false)
    const articles = computed(() => portfolioData.value.articles || [])
    const visibleArticles = computed(() =>
      showAll.value ? articles.value : articles.value.slice(0, initialCount)
    )
    return { articles, visibleArticles, showAll, initialCount }
  },
}
</script>

<style scoped>
.articles-section {
  padding: 3rem 0 6rem;
}

.section-header {
  margin-bottom: 2rem;
}

.article-list {
  list-style: none;
  border-top: 1px solid var(--color-border);
}

.article-list li {
  border-bottom: 1px solid var(--color-border);
}

.article-row {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem 2rem;
  padding: 1.5rem 0.75rem;
  color: var(--color-text);
  transition: background 0.25s ease;
}

.article-row:hover {
  background: var(--color-bg-raised);
  color: var(--color-text);
}

.row-date {
  width: 7.5rem;
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}

.row-title {
  flex: 1 1 360px;
  font-size: 1.125rem;
  line-height: 1.45;
}

.row-meta {
  font-size: 0.75rem;
  color: var(--color-accent);
}

.toggle-btn {
  margin-top: 1.5rem;
  min-height: 44px;
  padding: 0 0.75rem;
  background: transparent;
  border: none;
  color: var(--color-accent);
  font-size: 0.8125rem;
  cursor: pointer;
}

.toggle-btn:hover { color: var(--color-accent-soft); }
</style>
