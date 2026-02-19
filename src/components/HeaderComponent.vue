<template>
  <a-affix :offset-top="0">
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <div class="header-inner container">
        <router-link to="/" class="logo-link">
          <div class="logo">
            <div class="logo-icon">AS</div>
            <div class="logo-text">
              <span class="logo-name">Augusto Santos</span>
              <div class="logo-badges">
                <span class="badge">QA</span>
                <span class="badge badge-outline">CPRE-FL</span>
              </div>
            </div>
          </div>
        </router-link>

        <nav class="nav">
          <a
            v-for="item in navItems"
            :key="item.key"
            :href="item.href"
            class="nav-item"
            :class="{ active: activeSection === item.key }"
            @click.prevent="scrollTo(item.href)"
          >
            <component :is="item.icon" class="nav-icon" />
            {{ item.label }}
          </a>
        </nav>

        <a
          href="https://www.linkedin.com/in/augusto-arandiba-b26b90105/"
          target="_blank"
          class="cta-btn"
        >
          Contato
          <ArrowRightOutlined />
        </a>
      </div>
    </header>
  </a-affix>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { UserOutlined, ProjectOutlined, CodeOutlined, FileTextOutlined, ArrowRightOutlined } from '@ant-design/icons-vue'

export default {
  name: 'HeaderComponent',
  components: { UserOutlined, ProjectOutlined, CodeOutlined, FileTextOutlined, ArrowRightOutlined },
  setup() {
    const isScrolled = ref(false)
    const activeSection = ref('about')

    const navItems = [
      { key: 'about',    label: 'Sobre mim', href: '/#about',    icon: 'UserOutlined'    },
      { key: 'projects', label: 'Projetos',  href: '/#projects', icon: 'ProjectOutlined' },
      { key: 'stacks',   label: 'Stacks',    href: '/#stacks',   icon: 'CodeOutlined'    },
      { key: 'articles', label: 'Artigos',   href: '/#articles', icon: 'FileTextOutlined' },
    ]

    const scrollTo = (href) => {
      const id = href.replace('/#', '')
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const onScroll = () => {
      isScrolled.value = window.scrollY > 20

      const sections = ['about', 'projects', 'stacks', 'articles']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          activeSection.value = id
          break
        }
      }
    }

    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { isScrolled, activeSection, navItems, scrollTo }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  background: rgba(8, 8, 8, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255,255,255,0.06);
  transition: all 0.3s ease;
  z-index: 1000;
}

.header.scrolled {
  background: rgba(8, 8, 8, 0.92);
  border-bottom-color: rgba(66, 185, 131, 0.15);
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;
  padding-bottom: 1rem;
  gap: 2rem;
}

/* Logo */
.logo-link { text-decoration: none; }

.logo {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  transition: opacity 0.2s ease;
}

.logo:hover { opacity: 0.85; }

.logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #42b983, #2d9361);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 0 20px rgba(66,185,131,0.3);
}

.logo-name {
  display: block;
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-white);
  line-height: 1.2;
}

.logo-badges {
  display: flex;
  gap: 0.4rem;
  margin-top: 0.25rem;
}

.badge {
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: var(--color-green);
  color: white;
  letter-spacing: 0.03em;
}

.badge-outline {
  background: transparent;
  border: 1px solid var(--color-green);
  color: var(--color-green);
}

/* Nav */
.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.nav-item:hover {
  color: var(--color-white);
  background: rgba(255,255,255,0.06);
}

.nav-item.active {
  color: var(--color-green);
  background: var(--color-green-dim);
}

.nav-icon {
  font-size: 0.9rem;
}

/* CTA */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.25rem;
  border-radius: 50px;
  background: var(--color-green);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
  flex-shrink: 0;
  box-shadow: 0 4px 16px rgba(66,185,131,0.25);
}

.cta-btn:hover {
  background: #5de0a1;
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 6px 24px rgba(66,185,131,0.4);
}

/* ─── Mobile ─────────────────────────────────────── */
@media (max-width: 900px) {
  .cta-btn { display: none; }
}

@media (max-width: 768px) {
  .header-inner { padding: 0.75rem 1rem; gap: 1rem; }

  .logo-name { font-size: 1rem; }

  .nav { gap: 0; }
  .nav-item { padding: 0.4rem 0.65rem; font-size: 0.8rem; }
  .nav-item span:not(.nav-icon) { display: none; }
}

@media (max-width: 480px) {
  .logo-badges { display: none; }
}
</style>
