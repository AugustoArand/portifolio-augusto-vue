<template>
  <section id="articles" class="articles-section">
    <div class="container">
      <div class="section-header">
        <p class="section-eyebrow">Conhecimento</p>
        <h2 class="section-title">Artigos & Publicações</h2>
        <p class="section-subtitle">Explorando QA, Engenharia de Requisitos e Desenvolvimento</p>
      </div>

      <div class="articles-grid">
        <!-- Large featured article -->
        <div class="article-card article-featured">
          <div class="article-top">
            <div class="article-meta">
              <span :class="['category-badge', `cat-${articles[0].category.toLowerCase().replace(/[^a-z]/g,'')}`]">
                {{ articles[0].category }}
              </span>
              <span class="article-date">
                <ClockCircleOutlined /> {{ articles[0].date }}
              </span>
            </div>
            <h3 class="article-title">{{ articles[0].title }}</h3>
            <p class="article-excerpt">{{ articles[0].excerpt }}</p>
          </div>
          <div class="article-footer">
            <span class="reading-time"><BookOutlined /> {{ articles[0].readingTime }}</span>
            <a :href="articles[0].link" target="_blank" class="read-link">
              Ler artigo <ArrowRightOutlined />
            </a>
          </div>
        </div>

        <!-- Side list -->
        <div class="article-list">
          <a
            v-for="article in articles.slice(1)"
            :key="article.id"
            :href="article.link"
            target="_blank"
            class="article-row"
          >
            <div class="row-left">
              <span :class="['category-dot', `dot-${article.category.toLowerCase().replace(/[^a-z]/g,'')}`]"></span>
              <div>
                <div class="row-meta">
                  <span class="row-category">{{ article.category }}</span>
                  <span class="row-date">{{ article.date }}</span>
                </div>
                <p class="row-title">{{ article.title }}</p>
              </div>
            </div>
            <div class="row-time">
              <BookOutlined /> {{ article.readingTime }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ClockCircleOutlined, ArrowRightOutlined, BookOutlined } from '@ant-design/icons-vue'

export default {
  name: 'ArticlesSection',
  components: { ClockCircleOutlined, ArrowRightOutlined, BookOutlined },
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
          excerpt: 'A principal proposta de valor do CPRE-FL é padronizar a comunicação. Muitos projetos falham não por incompetência técnica.',
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
          excerpt: 'Nesta etapa crucial do ciclo de vida de testes, o foco é em compreender, estruturar e desenhar a estratégia.',
          date: '22 Out 2025',
          category: 'CTFL-FL',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/pulse/dose-diária-de-ctfl-tester-foundation-cap-04-análise-arandiba-4y5bf/'
        },
        {
          id: 5,
          title: 'Dose Diária de CTFL Agile Tester - Cap. 02 - Principios do Teste Ágil',
          excerpt: 'Atividades de Teste e Desenvolvimento no contexto ágil e seus produtos de trabalho.',
          date: '06 Out 2025',
          category: 'CTFL-AT',
          readingTime: '4 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7381144621973766146/?skipRedirect=true'
        },
        {
          id: 7,
          title: 'Dose Diária de CTFL Tester Foundation- Cap. 02 - Tipos de Teste.',
          excerpt: 'Os níveis de teste no CTFL Syllabus são etapas completamente distintas dentro do processo de teste.',
          date: '09 Set 2025',
          category: 'CTFL-FL',
          readingTime: '5 min',
          link: 'https://www.linkedin.com/analytics/post-summary/urn:li:activity:7371207686669012992/?skipRedirect=true'
        },
        {
          id: 8,
          title: 'Dose Diária CTFL Tester Foundation - Cap. 02',
          excerpt: 'Os testes ao longo do SDLC descrevem os tipos de atividades realizadas em cada estágio do projeto.',
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
  background: var(--color-bg-alt);
  padding: 6rem 0;
  border-top: 1px solid var(--color-border);
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

/* ─── Layout ────────────────────────────────────── */
.articles-grid {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 1.5rem;
}

/* ─── Featured card ─────────────────────────────── */
.article-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.article-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, #42b983, #5de0a1, transparent);
}

.article-card:hover {
  border-color: rgba(66,185,131,0.3);
}

.article-top { margin-bottom: 1.5rem; }

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.category-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.cat-dev     { background: rgba(168,85,247,0.15); border: 1px solid rgba(168,85,247,0.3); color: #c084fc; }
.cat-cpre    { background: var(--color-green-dim); border: 1px solid rgba(66,185,131,0.3); color: var(--color-green); }
.cat-ctflfl  { background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.3); color: #60a5fa; }
.cat-ctflat  { background: rgba(249,115,22,0.12); border: 1px solid rgba(249,115,22,0.3); color: #fb923c; }

.article-date {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.article-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--color-white);
  line-height: 1.35;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
}

.article-excerpt {
  font-size: 0.92rem;
  color: var(--color-text-muted);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.25rem;
  border-top: 1px solid var(--color-border);
}

.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.82rem;
  color: var(--color-text-muted);
}

.read-link {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--color-green);
  text-decoration: none;
  transition: gap 0.2s;
}

.read-link:hover { gap: 0.75rem; color: #5de0a1; }

/* ─── Article list ──────────────────────────────── */
.article-list {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.article-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
  transition: background 0.2s ease;
}

.article-row:last-child { border-bottom: none; }

.article-row:hover { background: rgba(66,185,131,0.05); }

.row-left {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  flex: 1;
  min-width: 0;
}

.category-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.45rem;
}

.dot-dev     { background: #c084fc; }
.dot-cprefl  { background: var(--color-green); }
.dot-ctflfl  { background: #60a5fa; }
.dot-ctflat  { background: #fb923c; }

.row-meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.25rem;
}

.row-category {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-green);
}

.row-date {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.row-title {
  font-size: 0.87rem;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-row:hover .row-title { color: var(--color-white); }

.row-time {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  color: var(--color-text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

/* ─── Responsive ────────────────────────────────── */
@media (max-width: 900px) {
  .articles-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .article-card { padding: 1.5rem; }
}
</style>
