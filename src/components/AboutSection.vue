<template>
  <section id="about" class="about-section">
    <!-- Hero -->
    <div class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-left">
            <div class="avatar-ring">
              <img :src="profileImage" alt="Augusto Santos" class="avatar-img" />
            </div>
          </div>

          <div class="hero-right">
            <!-- <div class="hero-eyebrow">
              <span class="status-dot"></span>
              Disponível para novas oportunidades
            </div> -->

            <h1 class="hero-title">
              Olá, sou <span class="highlight">Augusto Santos</span>
            </h1>

            <p class="hero-tagline">
              QA · Desenvolvedor Full-Stack · CPRE-FL Certified
            </p>

            <p class="hero-bio">
              Apaixonado por motos e tecnologia, atualmente cursando <strong>Análise e Desenvolvimento de Sistemas</strong> e atuando como <strong>Estagiário QA</strong> na Tecsinapse. Certificado <strong>CPRE-FL</strong> pelo IREB.
            </p>

            <div class="hero-tags">
              <span class="tag">Testes Automatizados</span>
              <span class="tag">Cypress</span>
              <span class="tag">Robot Framework</span>
              <span class="tag">DevOps</span>
              <span class="tag">Node.js</span>
            </div>

            <div class="hero-actions">
              <a href="/#projects" @click.prevent="scrollTo('projects')" class="btn btn-primary">
                Ver Projetos
                <ArrowRightOutlined />
              </a>
              <a
                href="https://www.linkedin.com/in/augusto-arandiba-b26b90105/"
                target="_blank"
                class="btn btn-ghost"
              >
                <LinkedinOutlined />
                LinkedIn
              </a>
              <a
                href="https://github.com/AugustoArand"
                target="_blank"
                class="btn btn-ghost"
              >
                <GithubOutlined />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <!-- Stats row -->
        <div class="stats-row">
          <div class="stat-item" v-for="s in stats" :key="s.label">
            <span class="stat-value">{{ s.value }}</span>
            <span class="stat-label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Bio details card -->
    <div class="bio-section">
      <div class="container">
        <div class="bio-grid">
          <div class="bio-card experience-card">
            <div class="bio-card-icon"></div>
            <h3>Experiência em QA</h3>
            <p>Testes manuais, automatizados, funcionais, não funcionais, regressão e confirmação. Gestão de bugs com <strong>Jira</strong>, <strong>Azure DevOps</strong> e <strong>GitHub Actions</strong>.</p>
          </div>
          <div class="bio-card dev-card">
            <div class="bio-card-icon"></div>
            <h3>Desenvolvimento Full-Stack</h3>
            <p>JavaScript, Node.js, React, Vue.js, Next.js, Prisma ORM, Ruby. Banco de dados: <strong>PostgreSQL</strong>, <strong>MySQL</strong>, <strong>MongoDB</strong>.</p>
          </div>
          <div class="bio-card cert-card">
            <div class="bio-card-icon"></div>
            <h3>Certificações</h3>
            <p>Certificação <strong>CPRE-FL</strong> (Engenharia de Requisitos — Nível Fundamental) pelo <strong>IREB</strong>. Aprendizado contínuo em CTFL.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ArrowRightOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons-vue'
import profileImage from '../assets/pics/profile-pic.png'

export default {
  name: 'AboutSection',
  components: { ArrowRightOutlined, LinkedinOutlined, GithubOutlined },
  setup() {
    const scrollTo = (id) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    return { scrollTo }
  },
  data() {
    return {
      profileImage,
      stats: [
        { value: '3+',  label: 'Anos de experiência' },
        { value: '7',   label: 'Projetos concluídos' },
        { value: '12+', label: 'Tecnologias' },
        { value: '1',   label: 'Certificação CPRE-FL' },
      ]
    }
  }
}
</script>

<style scoped>
/* ─── Section shell ──────────────────────────────── */
.about-section {
  background: var(--color-bg);
  position: relative;
  overflow: hidden;
}

/* ─── Hero ───────────────────────────────────────── */
.hero {
  padding: 5rem 0 3rem;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  left: -200px;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(66,185,131,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(66,185,131,0.05) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Avatar */
.hero-left { display: flex; justify-content: center; }

.avatar-ring {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: conic-gradient(
    from 0deg,
    #42b983 0%,
    transparent 40%,
    transparent 60%,
    #42b983 100%
  );
  padding: 3px;
  flex-shrink: 0;
  animation: ring-spin 8s linear infinite;
}

@keyframes ring-spin {
  to { transform: rotate(360deg); }
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-bg);
  display: block;
}

/* Hero text */
.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: rgba(66,185,131,0.1);
  border: 1px solid rgba(66,185,131,0.25);
  color: var(--color-green);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  margin-bottom: 1.5rem;
  width: fit-content;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-green);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(66,185,131,0.6); }
  50%       { box-shadow: 0 0 0 6px rgba(66,185,131,0); }
}

.hero-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 0.75rem;
  letter-spacing: -0.03em;
  color: var(--color-white);
}

.highlight {
  background: linear-gradient(135deg, #42b983, #5de0a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-tagline {
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-text-muted);
  margin-bottom: 1.25rem;
  letter-spacing: 0.01em;
}

.hero-bio {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-muted);
  max-width: 580px;
  margin-bottom: 1.5rem;
}

.hero-bio strong {
  color: var(--color-text);
  font-weight: 600;
}

/* Tags */
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  border: 1px solid var(--color-border);
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition: all 0.2s ease;
  background: var(--color-bg-card);
}

.tag:hover {
  border-color: var(--color-green);
  color: var(--color-green);
  background: var(--color-green-dim);
}

/* Action buttons */
.hero-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}

.btn-primary {
  background: var(--color-green);
  color: white;
  box-shadow: 0 4px 20px rgba(66,185,131,0.3);
}

.btn-primary:hover {
  background: #5de0a1;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(66,185,131,0.45);
}

.btn-ghost {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

.btn-ghost:hover {
  border-color: var(--color-green);
  color: var(--color-green);
  background: var(--color-green-dim);
}

/* ─── Stats row ──────────────────────────────────── */
.stats-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-top: 4rem;
  position: relative;
  z-index: 1;
}

.stat-item {
  background: var(--color-bg-card);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  text-align: center;
  transition: background 0.2s ease;
}

.stat-item:hover { background: rgba(66,185,131,0.06); }

.stat-value {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-green);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  font-weight: 500;
}

/* ─── Bio section ────────────────────────────────── */
.bio-section {
  background: var(--color-bg-alt);
  padding: 4rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.bio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.bio-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.bio-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #42b983, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.bio-card:hover {
  border-color: rgba(66,185,131,0.3);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3);
}

.bio-card:hover::before { opacity: 1; }

.bio-card-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.bio-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: 0.75rem;
}

.bio-card p {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.bio-card p strong {
  color: var(--color-text);
  font-weight: 600;
}

/* ─── Responsive ─────────────────────────────────── */
@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2.5rem;
  }

  .hero-left { order: -1; }

  .avatar-ring {
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }

  .hero-eyebrow { margin: 0 auto 1.5rem; }
  .hero-bio { margin: 0 auto 1.5rem; }
  .hero-tags, .hero-actions { justify-content: center; }

  .stats-row { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .bio-grid { grid-template-columns: 1fr; }
  .hero { padding: 3rem 0 2rem; }
}

@media (max-width: 480px) {
  .stats-row { grid-template-columns: repeat(2, 1fr); }
  .stat-value { font-size: 2rem; }
}
</style>
