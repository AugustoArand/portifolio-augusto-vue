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

// ── Mapas de resolução ────────────────────────────────────────────────────────
export const imageMap = {
  sistemaCondominio: sistemaCondominioImage,
  mapty: maptyImage,
  motoConsultor: motoConsultorImage,
  pigGame: pigGameImage,
  guessNumber: guessNumberImage,
  airBnbDemo: airBnbDemoImage,
  simuladorBanco: simuladorBancoImage,
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
}

// ── Persistência ──────────────────────────────────────────────────────────────
const STORAGE_KEY = 'portfolio_data'

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function loadData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch (e) {
    console.warn('usePortfolioData: falha ao ler localStorage', e)
  }
  return deepClone(defaultData)
}

// ── Estado singleton (reativo em toda a app) ──────────────────────────────────
const state = reactive(loadData())

function saveToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error('usePortfolioData: falha ao salvar localStorage', e)
  }
}

// ── Dados resolvidos (com imagens/ícones reais) ───────────────────────────────
const portfolioData = computed(() => ({
  about: state.about,
  projects: state.projects.map((p) => ({
    ...p,
    image: p.imageUrl || imageMap[p.imageKey] || '',
  })),
  stacks: state.stacks.map((g) => ({
    ...g,
    stacks: g.stacks.map((s) => ({
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

    updateAbout(data) {
      Object.assign(state.about, data)
      saveToStorage()
    },

    updateProjects(projects) {
      state.projects = projects
      saveToStorage()
    },

    updateStacks(stacks) {
      state.stacks = stacks
      saveToStorage()
    },

    updateArticles(articles) {
      state.articles = articles
      saveToStorage()
    },

    updateContact(data) {
      Object.assign(state.contact, data)
      saveToStorage()
    },

    resetToDefault() {
      localStorage.removeItem(STORAGE_KEY)
      const fresh = deepClone(defaultData)
      state.about = fresh.about
      state.projects = fresh.projects
      state.stacks = fresh.stacks
      state.articles = fresh.articles
      state.contact = fresh.contact
    },

    imageMap,
    iconMap,
    iconLabels,
  }
}
