import { reactive, computed } from 'vue'
import { defaultData } from '../data/portfolioData.js'

// ── Imports de imagens de projetos ───────────────────────────────────────────
import maptyImage from '../assets/pics/mapty.PNG'
import pigGameImage from '../assets/pics/pig-game.PNG'
import guessNumberImage from '../assets/pics/guess-my-number.PNG'
import airBnbDemoImage from '../assets/pics/airbnb-demo.PNG'
import simuladorBancoImage from '../assets/pics/simulador-banco.png'
import motoConsultorImage from '../assets/pics/fastify-project.png'
import sistemaCondominioImage from '../assets/pics/cond-agend.png'
import blocoNotasImage from '../assets/pics/bloco-de-notas.png'
import tattoPortifolioImage from '../assets/pics/estudio-tatto.png'

// ── Imports de ícones de stacks ──────────────────────────────────────────────
import vueIcon from '../assets/pics/vue.png'
import reactIcon from '../assets/pics/react.png'
import nodeIcon from '../assets/pics/node.png'
import rubyIcon from '../assets/pics/ruby.png'
import javascriptIcon from '../assets/pics/JS.jpg'
import robotIcon from '../assets/pics/robotframework.png'
import cypressIcon from '../assets/pics/cypress.png'
import postgresIcon from '../assets/pics/postgres.jpg'
import mongoIcon from '../assets/pics/mongodb.jpg'
import postmanIcon from '../assets/pics/postman.png'
import jmeterIcon from '../assets/pics/jmeter.png'
import jiraIcon from '../assets/pics/jira.png'
import gitHubIcon from '../assets/pics/github-logo.png'
import grafanaIcon from '../assets/pics/grafana-icon.png'
import redisIcon from '../assets/pics/Redis-Logo.png'
import playwrightIcon from '../assets/pics/playwright-logo.png'

// ── Mapas de resolução ────────────────────────────────────────────────────────
export const imageMap = {
  sistemaCondominio: sistemaCondominioImage,
  mapty: maptyImage,
  motoConsultor: motoConsultorImage,
  pigGame: pigGameImage,
  guessNumber: guessNumberImage,
  airBnbDemo: airBnbDemoImage,
  simuladorBanco: simuladorBancoImage,
  blocoNotas: blocoNotasImage,
  tattoPortifolio: tattoPortifolioImage,
}

export const iconMap = {
  vue: vueIcon,
  react: reactIcon,
  node: nodeIcon,
  ruby: rubyIcon,
  javascript: javascriptIcon,
  robot: robotIcon,
  cypress: cypressIcon,
  postgres: postgresIcon,
  mongo: mongoIcon,
  postman: postmanIcon,
  jmeter: jmeterIcon,
  jira: jiraIcon,
  github: gitHubIcon,
  grafana: grafanaIcon,
  redis: redisIcon,
  playwright: playwrightIcon,
}

// ── Labels legíveis para os iconKeys (usado no admin) ────────────────────────
export const iconLabels = {
  vue: 'Vue.js',
  react: 'React',
  node: 'Node.js',
  ruby: 'Ruby',
  javascript: 'JavaScript',
  robot: 'Robot Framework',
  cypress: 'Cypress',
  postgres: 'PostgreSQL',
  mongo: 'MongoDB',
  postman: 'Postman',
  jmeter: 'JMeter',
  jira: 'Jira',
  github: 'GitHub Actions',
  grafana: 'Grafana',
  playwright: 'Playwright',
  redis: 'Redis',
}

// ── Configuração da API ───────────────────────────────────────────────────────
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

async function apiFetch(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`Erro na API: ${res.status}`)
  return res.json()
}

// ── Estado singleton (reativo em toda a app) ──────────────────────────────────
const state = reactive({ ...defaultData, _loaded: false })

async function loadFromApi() {
  try {
    const data = await apiFetch('/portfolio')
    Object.assign(state, data)
  } catch (err) {
    console.warn('usePortfolioData: API indisponível, usando dados padrão', err.message)
  } finally {
    state._loaded = true
  }
}

// Carrega os dados ao inicializar
loadFromApi()

// ── Dados resolvidos (com imagens/ícones reais) ───────────────────────────────
const portfolioData = computed(() => ({
  about: state.about,
  projects: (state.projects || []).map((p) => ({
    ...p,
    image: p.imageUrl || imageMap[p.imageKey] || '',
  })),
  stacks: (state.stacks || []).map((g) => ({
    ...g,
    stacks: (g.stacks || []).map((s) => ({
      ...s,
      icon: s.iconUrl || iconMap[s.iconKey] || '',
    })),
  })),
  articles: state.articles,
  contact: state.contact,
}))

// ── Composable exportado ──────────────────────────────────────────────────────
export function usePortfolioData() {
  return {
    portfolioData,
    state,

    async updateAbout(data) {
      const updated = await apiFetch('/portfolio/about', {
        method: 'PUT',
        body: JSON.stringify(data),
      })
      Object.assign(state.about, updated)
    },

    async updateProjects(projects) {
      const updated = await apiFetch('/portfolio/projects', {
        method: 'PUT',
        body: JSON.stringify(projects),
      })
      state.projects = updated
    },

    async updateStacks(stacks) {
      const updated = await apiFetch('/portfolio/stacks', {
        method: 'PUT',
        body: JSON.stringify(stacks),
      })
      state.stacks = updated
    },

    async updateArticles(articles) {
      const updated = await apiFetch('/portfolio/articles', {
        method: 'PUT',
        body: JSON.stringify(articles),
      })
      state.articles = updated
    },

    async updateContact(data) {
      const updated = await apiFetch('/portfolio/contact', {
        method: 'PUT',
        body: JSON.stringify(data),
      })
      Object.assign(state.contact, updated)
    },

    async resetToDefault() {
      const data = await apiFetch('/portfolio/reset', { method: 'POST' })
      Object.assign(state, data)
    },

    imageMap,
    iconMap,
    iconLabels,
  }
}
