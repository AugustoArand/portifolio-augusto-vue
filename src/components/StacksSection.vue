<template>
  <section id="stacks" class="stacks-section">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">Tecnologias</p>
        <h2 class="section-title">Stacks Conhecidas</h2>
        <p class="section-subtitle">Ferramentas e tecnologias que domino no dia a dia</p>
      </div>

      <!-- Category groups -->
      <div class="stack-groups">
        <div v-for="group in stackGroups" :key="group.label" class="stack-group">
          <div class="group-label">{{ group.label }}</div>
          <div class="group-cards">
            <div
              v-for="stack in group.stacks"
              :key="stack.name"
              class="stack-pill"
            >
              <img :src="stack.icon" :alt="stack.name" class="pill-icon" />
              <span class="pill-name">{{ stack.name }}</span>
              <span class="pill-level">{{ stack.level }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Marquee ticker -->
      <div class="ticker-wrap">
        <div class="ticker-track">
          <div
            v-for="stack in allStacks"
            :key="'a-' + stack.name"
            class="ticker-item"
          >
            <img :src="stack.icon" :alt="stack.name" class="ticker-icon" />
            {{ stack.name }}
          </div>
          <!-- Duplicate for seamless loop -->
          <div
            v-for="stack in allStacks"
            :key="'b-' + stack.name"
            class="ticker-item"
            aria-hidden="true"
          >
            <img :src="stack.icon" :alt="stack.name" class="ticker-icon" />
            {{ stack.name }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import vueIcon        from '../assets/pics/vue.png'
import reactIcon      from '../assets/pics/react.png'
import nodeIcon       from '../assets/pics/node.png'
import rubyIcon       from '../assets/pics/ruby.png'
import javascriptIcon from '../assets/pics/JS.jpg'
import robotIcon      from '../assets/pics/robotframework.png'
import cypressIcon    from '../assets/pics/cypress.png'
import postgresIcon   from '../assets/pics/postgres.jpg'
import mongoIcon      from '../assets/pics/mongodb.jpg'
import postmanIcon    from '../assets/pics/postman.png'
import jmeterIcon     from '../assets/pics/jmeter.png'
import jiraIcon       from '../assets/pics/jira.png'
import gitHubIcon     from '../assets/pics/github-logo.png'
import grafanaIcon    from '../assets/pics/grafana-icon.png'

export default {
  name: 'StacksSection',
  data() {
    return {
      stackGroups: [
        {
          label: '⚡ Frontend',
          stacks: [
            { name: 'Vue.js',      icon: vueIcon,        level: 90 },
            { name: 'React',       icon: reactIcon,      level: 85 },
            { name: 'Javascript',  icon: javascriptIcon, level: 80 },
          ]
        },
        {
          label: '🛠️ Backend',
          stacks: [
            { name: 'Node.js',     icon: nodeIcon,       level: 88 },
            { name: 'Ruby on Rails', icon: rubyIcon,     level: 65 },
          ]
        },
        {
          label: '🧪 QA & Automação',
          stacks: [
            { name: 'Robot Framework', icon: robotIcon,  level: 75 },
            { name: 'Cypress',         icon: cypressIcon, level: 78 },
            { name: 'Postman',         icon: postmanIcon, level: 92 },
            { name: 'Jmeter',          icon: jmeterIcon,  level: 92 },
          ]
        },
        {
          label: '🗄️ Banco de Dados & Gestão',
          stacks: [
            { name: 'PostgreSQL', icon: postgresIcon, level: 80 },
            { name: 'MongoDB',    icon: mongoIcon,    level: 92 },
            { name: 'Jira',       icon: jiraIcon,     level: 92 },
            { name: 'Github Actions',       icon: gitHubIcon,     level: 85 },
            { name: 'Grafana',       icon: grafanaIcon,     level: 70 },
          ]
        },
      ],
    }
  },
  computed: {
    allStacks() {
      return this.stackGroups.flatMap(g => g.stacks)
    }
  }
}
</script>

<style scoped>
.stacks-section {
  background: var(--color-bg);
  padding: 6rem 0;
  border-top: 1px solid var(--color-border);
  overflow: hidden;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-eyebrow {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: 0.75rem;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--color-white);
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--color-text-muted);
}

/* ─── Groups ────────────────────────────────────── */
.stack-groups {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.stack-group {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.5rem;
  transition: border-color 0.3s ease;
}

.stack-group:hover {
  border-color: rgba(66,185,131,0.25);
}

.group-label {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.group-cards {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

/* ─── Pill ──────────────────────────────────────── */
.stack-pill {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  border-radius: var(--radius-sm);
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  transition: all 0.25s ease;
  cursor: default;
}

.stack-pill:hover {
  border-color: rgba(66,185,131,0.4);
  background: var(--color-green-dim);
}

.pill-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
  flex-shrink: 0;
}

.pill-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-text);
  flex: 1;
}

.pill-level {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--color-green);
  font-family: var(--font-display);
}

/* ─── Ticker ────────────────────────────────────── */
.ticker-wrap {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  border-top: 1px solid var(--color-border);
  padding-top: 2rem;
}

.ticker-track {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: ticker 35s linear infinite;
}

.ticker-track:hover { animation-play-state: paused; }

@keyframes ticker {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.ticker-item {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.5rem 1.25rem;
  border-radius: 50px;
  border: 1px solid var(--color-border);
  background: var(--color-bg-card);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-muted);
  white-space: nowrap;
  transition: all 0.2s ease;
}

.ticker-item:hover {
  border-color: var(--color-green);
  color: var(--color-green);
  background: var(--color-green-dim);
}

.ticker-icon {
  width: 22px;
  height: 22px;
  object-fit: contain;
  border-radius: 3px;
}

/* ─── Responsive ────────────────────────────────── */
@media (max-width: 768px) {
  .stack-groups { grid-template-columns: 1fr; }
}
</style>
