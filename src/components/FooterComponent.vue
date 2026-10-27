<template>
  <footer class="footer">
    <div class="container">
      <h2 class="footer-title">Vamos conversar<span class="accent">?</span></h2>

      <div class="footer-links mono">
        <a v-if="contact.email" :href="`mailto:${contact.email}`">{{ contact.email }}</a>
        <a :href="contact.linkedinUrl" target="_blank" rel="noopener">linkedin ↗</a>
        <a :href="contact.githubUrl" target="_blank" rel="noopener">github ↗</a>
      </div>

      <div class="footer-bottom mono">
        <span v-if="contact.location">{{ contact.location.toLowerCase() }}</span>
        <span>© {{ year }} {{ contact.name }} · feito com café e lofi</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { usePortfolioData } from '../composables/usePortfolioData.js'

export default {
  name: 'FooterComponent',
  setup() {
    const { portfolioData } = usePortfolioData()
    const contact = computed(() => portfolioData.value.contact || {})
    const year = new Date().getFullYear()
    return { contact, year }
  },
}
</script>

<style scoped>
.footer {
  padding: 6rem 0 3rem;
}

.footer-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: 2.5rem;
}

.accent { color: var(--color-accent); }

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 2rem;
  font-size: 0.875rem;
  margin-bottom: 3rem;
}

.footer-links a {
  border-bottom: 1px solid var(--color-accent);
  padding-bottom: 0.25rem;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.8125rem;
  color: var(--color-text-muted);
}
</style>
