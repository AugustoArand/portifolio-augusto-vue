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
          title: 'Dose Diária de CPRE-FL - Cap. 02 PRINCIPIOS FUNDAMENTAIS DA ENGENHARIA DE REQUISITOS',
          excerpt: 'A principal proposta de valor do CPRE-FL é padronizar a comunicação. Muitos projetos falham não por incompetência técnica na programação, mas porque o problema a ser resolvido foi mal compreendido ou mal documentado. ',
          date: '10 Dez 2025',
          category: 'CPRE-FL',
          readingTime: '5 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7404692249500151808/?skipRedirect=true'
        },
        {
          id: 2,
          title: 'Dose Diária de CTFL Tester Foundation - Cap. 06 - Ferramentas de Teste',
          excerpt: 'Neste artigo exploramos as principais ferramentas de teste segundo o CTFL Foundation Level',
          date: '29 Out 2025',
          category: 'CTFL-FL',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/pulse/dose-diária-de-ctfl-tester-foundation-cap-06-teste-arandiba-e7fff/'
        },
        {
          id: 3,
          title: 'Dose Diária de CTFL Tester Foundation - Cap. 04 - Análise e Modelagem de Teste',
          excerpt: 'Nesta etapa crucial do ciclo de vida de testes, o foco é em compreender, estruturar e desenhar a estratégia de teste',
          date: '22 Out 2025',
          category: 'CTFL-FL',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/pulse/dose-diária-de-ctfl-tester-foundation-cap-04-análise-arandiba-4y5bf/'
        },
        {
          id: 4,
          title: 'Dose Diária de CTFL Agile Tester - Cap. 02 - Principios Fundamentais, Práticas e Processos do Teste Ágil',
          excerpt: 'Neste artigo será abordado o tópico 2.1. Atividades de Teste e Desenvolvimento, e o tópico 2.2. Produtos de Trabalho',
          date: '06 Out 2025',
          category: 'CTFL-AT',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7381144621973766146/?skipRedirect=true'
        },
        {
          id: 5,
          title: 'Dose Diária de CTFL Tester Foundation- Cap. 02 - Tipos de Teste.',
          excerpt: 'No CTFL Syllabus os níveis de teste são etapas completamente distintas dentro do processo de teste de software, dado que cada uma tem seus objetivos específicos, cargos responsáveis e o artefatos gerados em cada uma delas. ',
          date: '09 Set 2025',
          category: 'CTFL-FL',
          readingTime: '5 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7371207686669012992/?skipRedirect=true'
        },
        {
          id: 6,
          title: 'Dose Diária CTFL Tester Foundation - Cap. 02',
          excerpt: 'Os testes ao longo do SDLC (Software Development Life Cycle), descrevem os tipos de atividades realizadas em cada estágio de um projeto, sua lógica, cronologia e entre outros.',
          date: '02 Set 2025',
          category: 'CTFL-FL',
          readingTime: '5 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7368838098832568320/?skipRedirect=true'
        },
        
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
