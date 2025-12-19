<template>
  <section id="articles" class="articles-section">
    <h2>Artigos</h2>
    <div class="articles-grid">
      <article v-for="article in articles" :key="article.id" class="article-card">
        <div class="article-header">
          <span class="article-date">{{ article.date }}</span>
          <span class="article-category">{{ article.category }}</span>
        </div>
        <h3>{{ article.title }}</h3>
        <p>{{ article.excerpt }}</p>
        <div class="article-footer">
          <span class="reading-time">⏱ {{ article.readingTime }}</span>
          <a :href="article.link" target="_blank" class="read-more">Ler artigo →</a>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ArticlesSection',
  data() {
    return {
      articles: [
        {
          id: 1,
          title: 'Introdução ao Vue.js 3 e Composition API',
          excerpt: 'Descubra as novidades do Vue.js 3 e como a Composition API pode melhorar a organização do seu código.',
          date: '15 Nov 2024',
          category: 'Vue.js',
          readingTime: '5 min',
          link: '#'
        },
        {
          id: 2,
          title: 'Melhores Práticas em JavaScript Moderno',
          excerpt: 'Conheça as melhores práticas e padrões para escrever código JavaScript limpo e eficiente.',
          date: '08 Nov 2024',
          category: 'JavaScript',
          readingTime: '7 min',
          link: '#'
        },
        {
          id: 3,
          title: 'Deploy Automatizado com GitHub Actions',
          excerpt: 'Aprenda a configurar CI/CD para seus projetos usando GitHub Actions de forma simples e eficaz.',
          date: '01 Nov 2024',
          category: 'DevOps',
          readingTime: '10 min',
          link: '#'
        },
        {
          id: 4,
          title: 'Performance Web: Otimizando Aplicações Vue',
          excerpt: 'Técnicas avançadas para melhorar a performance de suas aplicações Vue.js e proporcionar melhor experiência ao usuário.',
          date: '25 Out 2024',
          category: 'Performance',
          readingTime: '8 min',
          link: '#'
        },
        {
          id: 5,
          title: 'Arquitetura de Micro Frontends',
          excerpt: 'Entenda o conceito de micro frontends e como aplicar essa arquitetura em projetos escaláveis.',
          date: '18 Out 2024',
          category: 'Arquitetura',
          readingTime: '12 min',
          link: '#'
        },
        {
          id: 6,
          title: 'TypeScript: Além do Básico',
          excerpt: 'Explore recursos avançados do TypeScript para criar aplicações mais robustas e type-safe.',
          date: '10 Out 2024',
          category: 'TypeScript',
          readingTime: '9 min',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style scoped>
.articles-section {
  background-color: #f5f5f5;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.article-card {
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.article-date {
  color: #999;
  font-size: 0.9rem;
}

.article-category {
  background-color: #42b983;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.article-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  line-height: 1.4;
}

.article-card p {
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.reading-time {
  color: #999;
  font-size: 0.9rem;
}

.read-more {
  color: #42b983;
  font-weight: 600;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #34a870;
}

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .article-card {
    padding: 1.5rem;
  }

  .article-card h3 {
    font-size: 1.2rem;
  }
}
</style>
