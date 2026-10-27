<template>
  <section id="about" class="about-section">
    <div class="container">
      <!-- Hero -->
      <div class="hero">
        <div class="hero-text">
          <p class="hero-tagline mono">{{ portfolioData.about.heroTagline }}</p>
          <h1 class="hero-title">{{ portfolioData.about.heroTitle }}</h1>
          <p class="hero-bio" v-html="portfolioData.about.heroBio"></p>
          <div class="hero-links mono">
            <a :href="portfolioData.about.linkedinUrl" target="_blank" rel="noopener">linkedin ↗</a>
            <a :href="portfolioData.about.githubUrl" target="_blank" rel="noopener">github ↗</a>
          </div>
        </div>

        <figure class="hero-photo">
          <img :src="profileImage" :alt="portfolioData.about.heroTitle" />
          <figcaption class="mono">♪ now playing — lofi beats to deploy to</figcaption>
        </figure>
      </div>

      <!-- Stats row -->
      <div class="stats-row">
        <div class="stat-item" v-for="s in portfolioData.about.stats" :key="s.label">
          <span class="stat-value">{{ s.value }}</span>
          <span class="stat-label">{{ s.label }}</span>
        </div>
      </div>

      <!-- Bio cards -->
      <div class="bio-grid">
        <div
          v-for="(card, i) in portfolioData.about.bioCards"
          :key="i"
          class="bio-card"
        >
          <span class="bio-index mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ card.title }}</h3>
          <p v-html="card.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import profileImage from '../assets/pics/profile-pic.png'
import { usePortfolioData } from '../composables/usePortfolioData.js'

export default {
  name: 'AboutSection',
  setup() {
    const { portfolioData } = usePortfolioData()
    return { profileImage, portfolioData }
  },
}
</script>

<style scoped>
.about-section {
  padding: 0;
}

/* ─── Hero ───────────────────────────────────────── */
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 4rem;
  padding: 11rem 0 6rem;
}

.hero-text {
  flex: 999 1 520px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero-tagline {
  font-size: 0.8125rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.hero-title {
  font-size: clamp(3.5rem, 9vw, 7.5rem);
  font-weight: 300;
  line-height: 0.95;
  letter-spacing: -0.04em;
  /* Quebra "Augusto Santos" em duas linhas no desktop */
  max-width: 6.5ch;
}

.hero-bio {
  max-width: 560px;
  font-size: 1.125rem;
  line-height: 1.65;
}

.hero-bio :deep(strong) {
  color: var(--color-text);
  font-weight: 400;
}

.hero-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  font-size: 0.875rem;
}

.hero-links a {
  border-bottom: 1px solid var(--color-accent);
  padding-bottom: 0.25rem;
}

.hero-photo {
  flex: 1 1 240px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hero-photo img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-sm);
  filter: grayscale(1) contrast(1.05);
  transition: filter 0.6s ease;
}

.hero-photo:hover img { filter: grayscale(0); }

.hero-photo figcaption {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

/* ─── Stats row ──────────────────────────────────── */
.stats-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stat-item {
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-value {
  font-size: 2.75rem;
  font-weight: 300;
  line-height: 1;
  color: var(--color-text);
}

.stat-item:last-child .stat-value { color: var(--color-accent); }

.stat-label {
  font-size: 0.875rem;
  color: var(--color-text-muted);
}

/* ─── Bio cards ──────────────────────────────────── */
.bio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  padding: 6rem 0;
}

.bio-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.bio-index {
  font-size: 0.75rem;
  color: var(--color-accent);
}

.bio-card h3 {
  font-size: 1.25rem;
  font-weight: 500;
}

.bio-card p {
  font-size: 0.9375rem;
  line-height: 1.7;
}

.bio-card p :deep(strong) {
  color: var(--color-text);
  font-weight: 400;
}

@media (max-width: 640px) {
  .hero { padding: 8rem 0 4rem; gap: 3rem; }
  .hero-title { max-width: none; }
  .bio-grid { padding: 4rem 0; }
}
</style>
