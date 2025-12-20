<template>
  <section id="stacks" class="stacks-section">
    <h2>Stacks Conhecidas</h2>
    <div class="stacks-grid">
      <div v-for="stack in stacks" :key="stack.name" class="stack-card">
        <div class="stack-icon">
          <img :src="stack.icon" :alt="stack.name" />
        </div>
        <h3>{{ stack.name }}</h3>
        <p>{{ stack.description }}</p>
        <div class="stack-level">
          <div class="level-bar">
            <div class="level-fill" :style="{ width: stack.level + '%' }"></div>
          </div>
          <span class="level-text">{{ stack.level }}%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StacksSection',
  data() {
    return {
      stacks: [
        {
          name: 'Vue.js',
          description: 'Framework JavaScript progressivo para construção de interfaces de usuário.',
          icon: 'https://via.placeholder.com/80x80/42b983/ffffff?text=Vue',
          level: 90
        },
        {
          name: 'React',
          description: 'Biblioteca JavaScript para construção de interfaces de usuário.',
          icon: 'https://via.placeholder.com/80x80/61dafb/ffffff?text=React',
          level: 85
        },
        {
          name: 'Node.js',
          description: 'Ambiente de execução JavaScript server-side.',
          icon: 'https://via.placeholder.com/80x80/339933/ffffff?text=Node',
          level: 88
        },
        {
          name: 'TypeScript',
          description: 'Superset JavaScript tipado para desenvolvimento mais robusto.',
          icon: 'https://via.placeholder.com/80x80/3178c6/ffffff?text=TS',
          level: 82
        },
        {
          name: 'Python',
          description: 'Linguagem de programação versátil para web, data science e mais.',
          icon: 'https://via.placeholder.com/80x80/3776ab/ffffff?text=Python',
          level: 80
        },
        {
          name: 'Docker',
          description: 'Plataforma para desenvolvimento, envio e execução de aplicações em containers.',
          icon: 'https://via.placeholder.com/80x80/2496ed/ffffff?text=Docker',
          level: 75
        },
        {
          name: 'MongoDB',
          description: 'Banco de dados NoSQL orientado a documentos.',
          icon: 'https://via.placeholder.com/80x80/47a248/ffffff?text=Mongo',
          level: 78
        },
        {
          name: 'PostgreSQL',
          description: 'Sistema de gerenciamento de banco de dados relacional.',
          icon: 'https://via.placeholder.com/80x80/336791/ffffff?text=SQL',
          level: 80
        },
        {
          name: 'Git',
          description: 'Sistema de controle de versão distribuído.',
          icon: 'https://via.placeholder.com/80x80/f05032/ffffff?text=Git',
          level: 92
        }
      ]
    }
  }
}
</script>

<style scoped>
.stacks-section {
  background-color: white;
}

.stacks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.stack-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stack-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.stack-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.stack-icon img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.stack-card h3 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.stack-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.stack-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.level-bar {
  flex: 1;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 10px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  background: linear-gradient(90deg, #42b983, #34a870);
  border-radius: 10px;
  transition: width 0.5s ease;
}

.level-text {
  font-weight: 600;
  color: #42b983;
  font-size: 0.9rem;
  min-width: 45px;
}

@media (max-width: 768px) {
  .stacks-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .stack-card {
    padding: 1.5rem;
  }
}
</style>
