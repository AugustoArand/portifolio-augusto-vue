<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="header-inner container">
      <router-link to="/" class="logo">
        augusto<span class="logo-dot">.</span>santos
      </router-link>

      <nav class="nav" aria-label="Navegação principal">
        <router-link
          v-for="item in navItems"
          :key="item.key"
          :to="{ path: '/', hash: `#${item.key}` }"
          class="nav-item"
          :class="{ active: activeSection === item.key }"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <span class="status">
        <span class="status-dot" aria-hidden="true"></span>
        disponível
      </span>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'HeaderComponent',
  setup() {
    const isScrolled = ref(false)
    const activeSection = ref('')

    const navItems = [
      { key: 'about',    label: 'sobre'    },
      { key: 'projects', label: 'projetos' },
      { key: 'stacks',   label: 'stacks'   },
      { key: 'articles', label: 'artigos'  },
    ]

    const onScroll = () => {
      isScrolled.value = window.scrollY > 20

      activeSection.value = ''
      for (const { key } of navItems) {
        const el = document.getElementById(key)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          activeSection.value = key
          break
        }
      }
    }

    onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
    onUnmounted(() => window.removeEventListener('scroll', onScroll))

    return { isScrolled, activeSection, navItems }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  border-bottom: 1px solid transparent;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.header.scrolled {
  background: rgba(11, 10, 16, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-color: var(--color-border);
}

.header-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  transition: padding 0.3s ease;
}

.scrolled .header-inner {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.logo {
  color: var(--color-text);
}

.logo:hover { color: var(--color-text); }

.logo-dot { color: var(--color-accent); }

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1.75rem;
}

.nav-item {
  color: var(--color-text-muted);
  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  color: var(--color-text);
  border-bottom-color: var(--color-accent);
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-muted);
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--color-accent);
}

@media (max-width: 640px) {
  .status { display: none; }
  .nav { gap: 0.25rem 1.1rem; }
}
</style>
