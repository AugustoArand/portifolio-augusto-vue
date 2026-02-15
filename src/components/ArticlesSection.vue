<template>
  <section id="articles" class="articles-section">
    <div class="section-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
        <div class="shape shape-4"></div>
      </div>
    </div>
    
    <div class="articles-container">
      <div class="section-header">
        <a-typography-title :level="2" class="section-title">
          <span class="title-gradient">Artigos</span>
        </a-typography-title>
        <p class="section-subtitle">Explorando conhecimento em Testes e Engenharia de Requisitos</p>
      </div>

      <a-row :gutter="[32, 32]">
        <a-col 
          v-for="(article, index) in articles" 
          :key="article.id" 
          :xs="24" 
          :sm="12" 
          :lg="8"
          class="article-col"
        >
          <div class="article-card" :style="{ animationDelay: `${index * 0.1}s` }">
            <div class="card-gradient"></div>
            <div class="card-content">
              <div class="article-header">
                <span class="article-date">
                  <ClockCircleOutlined />
                  {{ article.date }}
                </span>
                <span :class="['article-category', `category-${article.category.toLowerCase()}`]">
                  {{ article.category }}
                </span>
              </div>
              
              <h3 class="article-title">{{ article.title }}</h3>
              
              <p class="article-excerpt">{{ article.excerpt }}</p>
              
              <div class="article-footer">
                <span class="reading-time">
                  <BookOutlined />
                  {{ article.readingTime }}
                </span>
                <a 
                  :href="article.link" 
                  target="_blank" 
                  class="read-more"
                >
                  Ler artigo
                  <ArrowRightOutlined class="arrow-icon" />
                </a>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
import { ClockCircleOutlined, ArrowRightOutlined, BookOutlined } from '@ant-design/icons-vue'

export default {
  name: 'ArticlesSection',
  components: {
    ClockCircleOutlined,
    ArrowRightOutlined,
    BookOutlined
  },
  data() {
    return {
      articles: [

        {
          id: 1,
          title: 'Entre a Angústia de Heidegger e o Front-end: O que a filosofia ensina sobre aprender o novo.',
          excerpt: 'Você já sentiu que o destino te lançou em um projeto para o qual você não se sentia pronto, mas que acabou te transformando?',
          date: '13 Fev 2026',
          category: 'Dev',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/posts/augusto-arandiba-b26b90105_voc%C3%AA-j%C3%A1-sentiu-que-o-destino-te-lan%C3%A7ou-activity-7427915010812616704-e9YM?utm_source=share&utm_medium=member_desktop&rcm=ACoAABqxc04BaZOpDNFb1PA22h--uhox89C3GII'
        },
        {
          id: 2,
          title: 'Dose Diária de CPRE-FL - Cap. 02 PRINCIPIOS FUNDAMENTAIS DA ENGENHARIA DE REQUISITOS',
          excerpt: 'A principal proposta de valor do CPRE-FL é padronizar a comunicação. Muitos projetos falham não por incompetência técnica na programação, mas porque o problema a ser resolvido foi mal compreendido ou mal documentado.',
          date: '10 Dez 2025',
          category: 'CPRE-FL',
          readingTime: '5 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7404692249500151808/?skipRedirect=true'
        },
        {
          id: 3,
          title: 'Dose Diária de CTFL Tester Foundation - Cap. 06 - Ferramentas de Teste',
          excerpt: 'Neste artigo exploramos as principais ferramentas de teste segundo o CTFL Foundation Level',
          date: '29 Out 2025',
          category: 'CTFL-FL',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/pulse/dose-diária-de-ctfl-tester-foundation-cap-06-teste-arandiba-e7fff/'
        },
        {
          id: 4,
          title: 'Dose Diária de CTFL Tester Foundation - Cap. 04 - Análise e Modelagem de Teste',
          excerpt: 'Nesta etapa crucial do ciclo de vida de testes, o foco é em compreender, estruturar e desenhar a estratégia de teste',
          date: '22 Out 2025',
          category: 'CTFL-FL',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/pulse/dose-diária-de-ctfl-tester-foundation-cap-04-análise-arandiba-4y5bf/'
        },
        {
          id: 5,
          title: 'Dose Diária de CTFL Agile Tester - Cap. 02 - Principios Fundamentais, Práticas e Processos do Teste Ágil',
          excerpt: 'Neste artigo será abordado o tópico 2.1. Atividades de Teste e Desenvolvimento, e o tópico 2.2. Produtos de Trabalho',
          date: '06 Out 2025',
          category: 'CTFL-AT',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7381144621973766146/?skipRedirect=true'
        },
        {
          id: 7,
          title: 'Dose Diária de CTFL Tester Foundation- Cap. 02 - Tipos de Teste.',
          excerpt: 'No CTFL Syllabus os níveis de teste são etapas completamente distintas dentro do processo de teste de software, dado que cada uma tem seus objetivos específicos, cargos responsáveis e o artefatos gerados em cada uma delas.',
          date: '09 Set 2025',
          category: 'CTFL-FL',
          readingTime: '5 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7371207686669012992/?skipRedirect=true'
        },
        {
          id: 8,
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
  position: relative;
  padding: 5rem 0;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 50%, #0d3d2d 100%);
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 20s infinite ease-in-out;
}

.shape-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  left: -100px;
  animation-delay: 0s;
}

.shape-2 {
  width: 200px;
  height: 200px;
  top: 50%;
  right: -50px;
  animation-delay: 5s;
}

.shape-3 {
  width: 150px;
  height: 150px;
  bottom: -50px;
  left: 30%;
  animation-delay: 10s;
}

.shape-4 {
  width: 250px;
  height: 250px;
  top: 20%;
  right: 20%;
  animation-delay: 15s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(50px, 50px) rotate(90deg);
  }
  50% {
    transform: translate(0, 100px) rotate(180deg);
  }
  75% {
    transform: translate(-50px, 50px) rotate(270deg);
  }
}

.articles-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  margin-bottom: 1rem;
}

.title-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3rem;
  font-weight: 700;
  display: inline-block;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin: 0;
}

.article-col {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.article-card {
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, #42b983 0%, #34a870 50%, #2d9361 100%);
  transition: height 0.3s ease;
}

.article-card:hover .card-gradient {
  height: 100%;
  opacity: 0.05;
}

.article-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 60px rgba(66, 185, 131, 0.4);
}

.card-content {
  position: relative;
  z-index: 1;
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.article-date {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #888;
  font-size: 0.9rem;
}

.article-category {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-cpre-fl {
  background: linear-gradient(135deg, #42b983 0%, #34a870 100%);
  color: white;
}

.category-ctfl-fl {
  background: linear-gradient(135deg, #34a870 0%, #2d9361 100%);
  color: white;
}

.category-ctfl-at {
  background: linear-gradient(135deg, #42b983 0%, #2d9361 100%);
  color: white;
}

.article-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 5.2rem;
}

.article-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #888;
  font-size: 0.9rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #42b983;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.read-more:hover {
  color: #34a870;
  gap: 10px;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.read-more:hover .arrow-icon {
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .articles-section {
    padding: 3rem 0;
  }

  .articles-container {
    padding: 0 1rem;
  }

  .section-header {
    margin-bottom: 2.5rem;
  }

  .title-gradient {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .article-card {
    padding: 1.5rem;
  }

  .article-title {
    font-size: 1.1rem;
  }
}
</style>
