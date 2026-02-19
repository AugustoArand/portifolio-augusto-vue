<template>
  <footer class="footer">
    <div class="footer-glow"></div>
    <div class="container footer-inner">
      <!-- Top row -->
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">AS</div>
          <div>
            <div class="footer-name">Augusto Santos</div>
            <div class="footer-role">QA · Full-Stack Developer</div>
            <a-tag color="green" style="margin-top: 0.5rem; font-size: 13px;">
              CPRE-FL Certified
            </a-tag>
          </div>
        </div>

        <div class="footer-links">
          <div class="link-group">
            <div class="link-group-title">Navegação</div>
            <a href="#about" @click.prevent="scrollTo('about')" class="footer-link">Sobre Mim</a>
            <a href="#projects" @click.prevent="scrollTo('projects')" class="footer-link">Projetos</a>
            <a href="#stacks" @click.prevent="scrollTo('stacks')" class="footer-link">Stacks</a>
            <a href="#articles" @click.prevent="scrollTo('articles')" class="footer-link">Artigos</a>
          </div>

          <div class="link-group">
            <div class="link-group-title">Contato</div>
            <a href="mailto:augustoarandiba@gmail.com" class="footer-link">
              <MailOutlined /> augustoarandiba@gmail.com
            </a>
            <a href="tel:+5511984909210" class="footer-link">
              <PhoneOutlined /> +55 (11) 98490-9210
            </a>
            <span class="footer-link no-hover">
              <EnvironmentOutlined /> Bahia, Brasil
            </span>
          </div>

          <div class="link-group">
            <div class="link-group-title">Redes Sociais</div>
            <a
              href="https://github.com/AugustoArand"
              target="_blank"
              class="footer-link social-link"
            >
              <GithubOutlined /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/augusto-arandiba-b26b90105/"
              target="_blank"
              class="footer-link social-link"
            >
              <LinkedinOutlined /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <span>© 2025 Augusto Arand. Todos os direitos reservados.</span>
        <div class="social-icons">
          <a href="https://github.com/AugustoArand" target="_blank" class="social-icon">
            <GithubOutlined />
          </a>
          <a href="https://www.linkedin.com/in/augusto-arandiba-b26b90105/" target="_blank" class="social-icon">
            <LinkedinOutlined />
          </a>
          <a href="mailto:augustoarandiba@gmail.com" class="social-icon">
            <MailOutlined />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons-vue'

export default {
  name: 'FooterComponent',
  components: { GithubOutlined, LinkedinOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}
</script>

<style scoped>
.footer {
  background: #040404;
  border-top: 1px solid var(--color-border);
  padding: 4rem 0 1.5rem;
  position: relative;
  overflow: hidden;
}

.footer-glow {
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 200px;
  background: radial-gradient(ellipse, rgba(66,185,131,0.12) 0%, transparent 70%);
  pointer-events: none;
}

.footer-inner { position: relative; z-index: 1; }

/* ─── Top ───────────────────────────────────────── */
.footer-top {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
}

.footer-brand {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.footer-logo {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #42b983, #2d9361);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1rem;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(66,185,131,0.25);
}

.footer-name {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.2;
}

.footer-role {
  font-size: 0.82rem;
  color: var(--color-text-muted);
  margin-top: 0.2rem;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.link-group-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-link:hover:not(.no-hover) {
  color: var(--color-green);
}

.no-hover { cursor: default; }

/* ─── Bottom ────────────────────────────────────── */
.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.social-icons {
  display: flex;
  gap: 0.75rem;
}

.social-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-icon:hover {
  border-color: var(--color-green);
  color: var(--color-green);
  background: var(--color-green-dim);
  transform: translateY(-2px);
}

/* ─── Responsive ────────────────────────────────── */
@media (max-width: 900px) {
  .footer-top { grid-template-columns: 1fr; gap: 2rem; }
  .footer-links { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 640px) {
  .footer-links { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
}
</style>
