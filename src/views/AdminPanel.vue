<template>
  <div class="admin-root">

    <!-- ── Login ─────────────────────────────────────────────────────────── -->
    <div v-if="!loggedIn" class="login-wrap">
      <div class="login-card">
        <div class="login-logo">AS</div>
        <h2 class="login-title">Painel Admin</h2>
        <p class="login-sub">Portfólio · Augusto Santos</p>
        <form @submit.prevent="handleLogin">
          <div class="field">
            <label class="field-label">Senha</label>
            <a-input-password
              v-model:value="passwordInput"
              placeholder="Digite a senha"
              size="large"
              :status="loginError ? 'error' : ''"
            />
            <span v-if="loginError" class="field-error">Senha incorreta.</span>
          </div>
          <a-button type="primary" html-type="submit" block size="large" class="login-btn">
            Entrar
          </a-button>
        </form>
      </div>
    </div>

    <!-- ── Dashboard ─────────────────────────────────────────────────────── -->
    <div v-else class="dashboard">

      <!-- Header -->
      <div class="dash-header">
        <div class="dash-brand">
          <div class="dash-logo">AS</div>
          <div>
            <div class="dash-title">Painel Admin</div>
            <div class="dash-sub">Edite as informações do portfólio</div>
          </div>
        </div>
        <div class="dash-actions">
          <a-button @click="exportJSON" title="Exportar dados como JSON">
            <template #icon><DownloadOutlined /></template>
            Exportar JSON
          </a-button>
          <a-popconfirm
            title="Resetar todos os dados para o padrão original?"
            ok-text="Sim, resetar"
            cancel-text="Cancelar"
            @confirm="handleReset"
          >
            <a-button danger>
              <template #icon><ReloadOutlined /></template>
              Resetar Padrão
            </a-button>
          </a-popconfirm>
          <a-button @click="goToPortfolio">
            <template #icon><EyeOutlined /></template>
            Ver Portfólio
          </a-button>
          <a-button @click="logout">
            <template #icon><LogoutOutlined /></template>
            Sair
          </a-button>
        </div>
      </div>

      <!-- Tabs -->
      <div class="dash-body">
        <a-tabs v-model:activeKey="activeTab" type="card">

          <!-- ── SOBRE ──────────────────────────────────────────────────── -->
          <a-tab-pane key="about" tab="Sobre">
            <div class="tab-content">

              <section class="form-section">
                <h3 class="section-title">Hero</h3>
                <div class="form-grid">
                  <div class="field">
                    <label class="field-label">Nome</label>
                    <a-input v-model:value="aboutForm.heroTitle" placeholder="Augusto Santos" />
                  </div>
                  <div class="field">
                    <label class="field-label">Tagline</label>
                    <a-input v-model:value="aboutForm.heroTagline" placeholder="QA · Desenvolvedor..." />
                  </div>
                </div>
                <div class="field">
                  <label class="field-label">Bio <span class="hint">(HTML permitido: &lt;strong&gt;, &lt;em&gt;, etc.)</span></label>
                  <a-textarea v-model:value="aboutForm.heroBio" :rows="4" />
                </div>
                <div class="field">
                  <label class="field-label">URL LinkedIn</label>
                  <a-input v-model:value="aboutForm.linkedinUrl" placeholder="https://linkedin.com/in/..." />
                </div>
                <div class="field">
                  <label class="field-label">URL GitHub</label>
                  <a-input v-model:value="aboutForm.githubUrl" placeholder="https://github.com/..." />
                </div>
              </section>

              <section class="form-section">
                <h3 class="section-title">Tags de Habilidades</h3>
                <div class="tags-editor">
                  <a-tag
                    v-for="(tag, i) in aboutForm.heroTags"
                    :key="i"
                    closable
                    @close="removeTag(i)"
                    class="editable-tag"
                  >{{ tag }}</a-tag>
                  <a-input
                    v-if="tagInputVisible"
                    ref="tagInputRef"
                    v-model:value="newTagValue"
                    size="small"
                    class="tag-input"
                    @blur="addTag"
                    @keyup.enter="addTag"
                  />
                  <a-tag v-else class="add-tag-btn" @click="showTagInput">
                    + Nova tag
                  </a-tag>
                </div>
              </section>

              <section class="form-section">
                <div class="section-row">
                  <h3 class="section-title">Estatísticas</h3>
                  <a-button size="small" @click="addStat">+ Adicionar</a-button>
                </div>
                <div class="list-items">
                  <div v-for="(stat, i) in aboutForm.stats" :key="i" class="list-item">
                    <a-input v-model:value="stat.value" placeholder="Valor (ex: 3+)" class="list-input-sm" />
                    <a-input v-model:value="stat.label" placeholder="Label (ex: Anos de exp.)" class="list-input-lg" />
                    <a-button type="text" danger @click="removeStat(i)"><DeleteOutlined /></a-button>
                  </div>
                </div>
              </section>

              <section class="form-section">
                <div class="section-row">
                  <h3 class="section-title">Cards de Bio</h3>
                  <a-button size="small" @click="addBioCard">+ Adicionar</a-button>
                </div>
                <div v-for="(card, i) in aboutForm.bioCards" :key="i" class="list-item-block">
                  <div class="list-item-block-header">
                    <a-input v-model:value="card.title" placeholder="Título do card" />
                    <a-button type="text" danger @click="removeBioCard(i)"><DeleteOutlined /></a-button>
                  </div>
                  <a-textarea
                    v-model:value="card.text"
                    :rows="3"
                    placeholder="Texto (HTML permitido)"
                  />
                </div>
              </section>

              <div class="save-row">
                <a-button type="primary" size="large" @click="saveAbout">
                  <template #icon><SaveOutlined /></template>
                  Salvar Seção Sobre
                </a-button>
              </div>
            </div>
          </a-tab-pane>

          <!-- ── PROJETOS ───────────────────────────────────────────────── -->
          <a-tab-pane key="projects" tab="Projetos">
            <div class="tab-content">
              <div class="section-row">
                <p class="section-info">
                  O primeiro projeto da lista é exibido em destaque. Arraste para reordenar ou use os botões ↑↓.
                </p>
                <a-button type="primary" @click="addProject">+ Novo Projeto</a-button>
              </div>

              <div v-for="(project, i) in projectsForm" :key="i" class="project-block">
                <div class="project-block-header">
                  <span class="project-index">{{ i + 1 }}{{ i === 0 ? ' ⭐ Destaque' : '' }}</span>
                  <div class="project-order-btns">
                    <a-button size="small" :disabled="i === 0" @click="moveProject(i, -1)">↑</a-button>
                    <a-button size="small" :disabled="i === projectsForm.length - 1" @click="moveProject(i, 1)">↓</a-button>
                  </div>
                  <a-popconfirm
                    title="Remover este projeto?"
                    ok-text="Sim"
                    cancel-text="Não"
                    @confirm="removeProject(i)"
                  >
                    <a-button type="text" danger size="small"><DeleteOutlined /> Remover</a-button>
                  </a-popconfirm>
                </div>

                <div class="form-grid">
                  <div class="field">
                    <label class="field-label">Título</label>
                    <a-input v-model:value="project.title" placeholder="Nome do projeto" />
                  </div>
                  <div class="field">
                    <label class="field-label">Link</label>
                    <a-input v-model:value="project.link" placeholder="https://..." />
                  </div>
                </div>
                <div class="field">
                  <label class="field-label">Descrição</label>
                  <a-textarea v-model:value="project.description" :rows="2" />
                </div>
                <div class="form-grid">
                  <div class="field">
                    <label class="field-label">Tags <span class="hint">(separadas por vírgula)</span></label>
                    <a-input
                      :value="project.tags.join(', ')"
                      @change="e => project.tags = e.target.value.split(',').map(t => t.trim()).filter(Boolean)"
                      placeholder="Vue.js, Node.js, MongoDB"
                    />
                  </div>
                  <div class="field">
                    <label class="field-label">
                      Imagem
                      <span v-if="project.imageKey" class="hint"> · ícone local: {{ project.imageKey }}</span>
                    </label>
                    <a-input v-model:value="project.imageUrl" placeholder="URL de imagem (deixe vazio para usar o ícone local)" />
                  </div>
                </div>
              </div>

              <div class="save-row">
                <a-button type="primary" size="large" @click="saveProjects">
                  <template #icon><SaveOutlined /></template>
                  Salvar Projetos
                </a-button>
              </div>
            </div>
          </a-tab-pane>

          <!-- ── STACKS ─────────────────────────────────────────────────── -->
          <a-tab-pane key="stacks" tab="Stacks">
            <div class="tab-content">
              <a-button @click="addStackGroup" style="margin-bottom:1.5rem">+ Novo Grupo</a-button>

              <div v-for="(group, gi) in stacksForm" :key="gi" class="stack-group-block">
                <div class="stack-group-header">
                  <a-input v-model:value="group.label" placeholder="Ex: ⚡ Frontend" class="group-label-input" />
                  <a-popconfirm
                    title="Remover este grupo?"
                    ok-text="Sim"
                    cancel-text="Não"
                    @confirm="removeStackGroup(gi)"
                  >
                    <a-button type="text" danger size="small"><DeleteOutlined /></a-button>
                  </a-popconfirm>
                </div>

                <div class="stack-items">
                  <div v-for="(stack, si) in group.stacks" :key="si" class="stack-item">
                    <img
                      v-if="resolveIcon(stack)"
                      :src="resolveIcon(stack)"
                      class="stack-preview-icon"
                      alt=""
                    />
                    <a-input v-model:value="stack.name" placeholder="Nome da stack" class="stack-name-input" />
                    <a-select
                      v-model:value="stack.iconKey"
                      placeholder="Ícone builtin"
                      class="stack-icon-select"
                      allow-clear
                    >
                      <a-select-option v-for="(label, key) in iconLabels" :key="key" :value="key">
                        {{ label }}
                      </a-select-option>
                    </a-select>
                    <a-input v-model:value="stack.iconUrl" placeholder="URL ícone (opcional)" class="stack-icon-url" />
                    <div class="stack-level-wrap">
                      <a-input-number v-model:value="stack.level" :min="0" :max="100" class="stack-level-input" />
                      <span class="stack-level-pct">%</span>
                    </div>
                    <a-button type="text" danger @click="removeStack(gi, si)"><DeleteOutlined /></a-button>
                  </div>

                  <a-button size="small" @click="addStack(gi)" style="margin-top:0.5rem">
                    + Stack
                  </a-button>
                </div>
              </div>

              <div class="save-row">
                <a-button type="primary" size="large" @click="saveStacks">
                  <template #icon><SaveOutlined /></template>
                  Salvar Stacks
                </a-button>
              </div>
            </div>
          </a-tab-pane>

          <!-- ── ARTIGOS ────────────────────────────────────────────────── -->
          <a-tab-pane key="articles" tab="Artigos">
            <div class="tab-content">
              <div class="section-row" style="margin-bottom:1.5rem">
                <p class="section-info">O primeiro artigo é exibido em destaque.</p>
                <a-button type="primary" @click="addArticle">+ Novo Artigo</a-button>
              </div>

              <div v-for="(article, i) in articlesForm" :key="i" class="article-block">
                <div class="article-block-header">
                  <span class="article-index">{{ i + 1 }}{{ i === 0 ? ' ⭐ Destaque' : '' }}</span>
                  <div class="project-order-btns">
                    <a-button size="small" :disabled="i === 0" @click="moveArticle(i, -1)">↑</a-button>
                    <a-button size="small" :disabled="i === articlesForm.length - 1" @click="moveArticle(i, 1)">↓</a-button>
                  </div>
                  <a-popconfirm
                    title="Remover este artigo?"
                    ok-text="Sim"
                    cancel-text="Não"
                    @confirm="removeArticle(i)"
                  >
                    <a-button type="text" danger size="small"><DeleteOutlined /> Remover</a-button>
                  </a-popconfirm>
                </div>

                <div class="field">
                  <label class="field-label">Título</label>
                  <a-input v-model:value="article.title" />
                </div>
                <div class="field">
                  <label class="field-label">Resumo (excerpt)</label>
                  <a-textarea v-model:value="article.excerpt" :rows="2" />
                </div>
                <div class="form-grid form-grid-4">
                  <div class="field">
                    <label class="field-label">Categoria</label>
                    <a-select v-model:value="article.category" style="width:100%">
                      <a-select-option value="Dev">Dev</a-select-option>
                      <a-select-option value="CPRE-FL">CPRE-FL</a-select-option>
                      <a-select-option value="CTFL-FL">CTFL-FL</a-select-option>
                      <a-select-option value="CTFL-AT">CTFL-AT</a-select-option>
                    </a-select>
                  </div>
                  <div class="field">
                    <label class="field-label">Data</label>
                    <a-input v-model:value="article.date" placeholder="13 Fev 2026" />
                  </div>
                  <div class="field">
                    <label class="field-label">Tempo de leitura</label>
                    <a-input v-model:value="article.readingTime" placeholder="4 min" />
                  </div>
                </div>
                <div class="field">
                  <label class="field-label">Link</label>
                  <a-input v-model:value="article.link" placeholder="https://..." />
                </div>
              </div>

              <div class="save-row">
                <a-button type="primary" size="large" @click="saveArticles">
                  <template #icon><SaveOutlined /></template>
                  Salvar Artigos
                </a-button>
              </div>
            </div>
          </a-tab-pane>

          <!-- ── CONTATO ────────────────────────────────────────────────── -->
          <a-tab-pane key="contact" tab="Contato">
            <div class="tab-content">
              <section class="form-section">
                <div class="form-grid">
                  <div class="field">
                    <label class="field-label">Nome</label>
                    <a-input v-model:value="contactForm.name" />
                  </div>
                  <div class="field">
                    <label class="field-label">Cargo / Role</label>
                    <a-input v-model:value="contactForm.role" />
                  </div>
                  <div class="field">
                    <label class="field-label">E-mail</label>
                    <a-input v-model:value="contactForm.email" />
                  </div>
                  <div class="field">
                    <label class="field-label">Telefone</label>
                    <a-input v-model:value="contactForm.phone" />
                  </div>
                  <div class="field">
                    <label class="field-label">Localização</label>
                    <a-input v-model:value="contactForm.location" />
                  </div>
                  <div class="field">
                    <label class="field-label">URL GitHub</label>
                    <a-input v-model:value="contactForm.githubUrl" />
                  </div>
                  <div class="field">
                    <label class="field-label">URL LinkedIn</label>
                    <a-input v-model:value="contactForm.linkedinUrl" />
                  </div>
                </div>
              </section>

              <div class="save-row">
                <a-button type="primary" size="large" @click="saveContact">
                  <template #icon><SaveOutlined /></template>
                  Salvar Contato
                </a-button>
              </div>
            </div>
          </a-tab-pane>

        </a-tabs>
      </div>

      <!-- Toast de sucesso -->
      <div v-if="savedMsg" class="saved-toast">✓ {{ savedMsg }}</div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import {
  SaveOutlined,
  DeleteOutlined,
  ReloadOutlined,
  DownloadOutlined,
  EyeOutlined,
  LogoutOutlined,
} from '@ant-design/icons-vue'
import { usePortfolioData, iconMap, iconLabels } from '../composables/usePortfolioData.js'

// Senha do painel admin — altere aqui para a senha desejada
const ADMIN_PASSWORD = 'admin123'
const SESSION_KEY = 'admin_session'

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export default {
  name: 'AdminPanel',
  components: {
    SaveOutlined,
    DeleteOutlined,
    ReloadOutlined,
    DownloadOutlined,
    EyeOutlined,
    LogoutOutlined,
  },

  setup() {
    const router = useRouter()
    const { portfolioData, updateAbout, updateProjects, updateStacks, updateArticles, updateContact, resetToDefault } =
      usePortfolioData()

    // ── Auth ────────────────────────────────────────────────────────────────
    const loggedIn = ref(sessionStorage.getItem(SESSION_KEY) === '1')
    const passwordInput = ref('')
    const loginError = ref(false)

    function handleLogin() {
      if (passwordInput.value === ADMIN_PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, '1')
        loggedIn.value = true
        loginError.value = false
        initForms()
      } else {
        loginError.value = true
      }
    }

    function logout() {
      sessionStorage.removeItem(SESSION_KEY)
      loggedIn.value = false
      passwordInput.value = ''
    }

    // ── Tabs ────────────────────────────────────────────────────────────────
    const activeTab = ref('about')

    // ── Toast ───────────────────────────────────────────────────────────────
    const savedMsg = ref('')
    let toastTimer = null

    function showToast(msg) {
      savedMsg.value = msg
      clearTimeout(toastTimer)
      toastTimer = setTimeout(() => (savedMsg.value = ''), 2500)
    }

    // ── About form ──────────────────────────────────────────────────────────
    const aboutForm = reactive({
      heroTitle: '',
      heroTagline: '',
      heroBio: '',
      heroTags: [],
      linkedinUrl: '',
      githubUrl: '',
      stats: [],
      bioCards: [],
    })

    const tagInputVisible = ref(false)
    const newTagValue = ref('')
    const tagInputRef = ref(null)

    function showTagInput() {
      tagInputVisible.value = true
      nextTick(() => tagInputRef.value?.focus())
    }

    function addTag() {
      const val = newTagValue.value.trim()
      if (val && !aboutForm.heroTags.includes(val)) {
        aboutForm.heroTags.push(val)
      }
      tagInputVisible.value = false
      newTagValue.value = ''
    }

    function removeTag(i) {
      aboutForm.heroTags.splice(i, 1)
    }

    function addStat() {
      aboutForm.stats.push({ value: '', label: '' })
    }

    function removeStat(i) {
      aboutForm.stats.splice(i, 1)
    }

    function addBioCard() {
      aboutForm.bioCards.push({ title: '', text: '' })
    }

    function removeBioCard(i) {
      aboutForm.bioCards.splice(i, 1)
    }

    function saveAbout() {
      updateAbout(deepClone(aboutForm))
      showToast('Seção "Sobre" salva!')
    }

    // ── Projects form ───────────────────────────────────────────────────────
    const projectsForm = ref([])

    function addProject() {
      projectsForm.value.push({
        title: '',
        description: '',
        tags: [],
        link: '',
        imageKey: '',
        imageUrl: '',
      })
    }

    function removeProject(i) {
      projectsForm.value.splice(i, 1)
    }

    function moveProject(i, dir) {
      const arr = projectsForm.value
      const target = i + dir
      if (target < 0 || target >= arr.length) return
      ;[arr[i], arr[target]] = [arr[target], arr[i]]
    }

    function saveProjects() {
      updateProjects(deepClone(projectsForm.value))
      showToast('Projetos salvos!')
    }

    // ── Stacks form ─────────────────────────────────────────────────────────
    const stacksForm = ref([])

    function addStackGroup() {
      stacksForm.value.push({ label: '', stacks: [] })
    }

    function removeStackGroup(gi) {
      stacksForm.value.splice(gi, 1)
    }

    function addStack(gi) {
      stacksForm.value[gi].stacks.push({ name: '', iconKey: '', iconUrl: '', level: 80 })
    }

    function removeStack(gi, si) {
      stacksForm.value[gi].stacks.splice(si, 1)
    }

    function resolveIcon(stack) {
      if (stack.iconUrl) return stack.iconUrl
      return iconMap[stack.iconKey] || ''
    }

    function saveStacks() {
      updateStacks(deepClone(stacksForm.value))
      showToast('Stacks salvas!')
    }

    // ── Articles form ───────────────────────────────────────────────────────
    const articlesForm = ref([])

    function addArticle() {
      const maxId = articlesForm.value.reduce((m, a) => Math.max(m, a.id || 0), 0)
      articlesForm.value.push({
        id: maxId + 1,
        title: '',
        excerpt: '',
        date: '',
        category: 'Dev',
        readingTime: '5 min',
        link: '',
      })
    }

    function removeArticle(i) {
      articlesForm.value.splice(i, 1)
    }

    function moveArticle(i, dir) {
      const arr = articlesForm.value
      const target = i + dir
      if (target < 0 || target >= arr.length) return
      ;[arr[i], arr[target]] = [arr[target], arr[i]]
    }

    function saveArticles() {
      updateArticles(deepClone(articlesForm.value))
      showToast('Artigos salvos!')
    }

    // ── Contact form ────────────────────────────────────────────────────────
    const contactForm = reactive({
      name: '',
      role: '',
      email: '',
      phone: '',
      location: '',
      githubUrl: '',
      linkedinUrl: '',
    })

    function saveContact() {
      updateContact(deepClone(contactForm))
      showToast('Contato salvo!')
    }

    // ── Init: carrega dados atuais nos formulários ───────────────────────────
    function initForms() {
      const d = portfolioData.value
      Object.assign(aboutForm, deepClone(d.about))
      projectsForm.value = deepClone(d.projects)
      stacksForm.value = deepClone(d.stacks)
      articlesForm.value = deepClone(d.articles)
      Object.assign(contactForm, deepClone(d.contact))
    }

    if (loggedIn.value) initForms()

    // ── Reset ───────────────────────────────────────────────────────────────
    function handleReset() {
      resetToDefault()
      initForms()
      showToast('Dados resetados para o padrão!')
    }

    // ── Export JSON ─────────────────────────────────────────────────────────
    function exportJSON() {
      const data = JSON.stringify(portfolioData.value, null, 2)
      const blob = new Blob([data], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'portfolio-data.json'
      a.click()
      URL.revokeObjectURL(url)
    }

    function goToPortfolio() {
      router.push('/')
    }

    return {
      loggedIn,
      passwordInput,
      loginError,
      handleLogin,
      logout,
      activeTab,
      savedMsg,
      // about
      aboutForm,
      tagInputVisible,
      newTagValue,
      tagInputRef,
      showTagInput,
      addTag,
      removeTag,
      addStat,
      removeStat,
      addBioCard,
      removeBioCard,
      saveAbout,
      // projects
      projectsForm,
      addProject,
      removeProject,
      moveProject,
      saveProjects,
      // stacks
      stacksForm,
      addStackGroup,
      removeStackGroup,
      addStack,
      removeStack,
      resolveIcon,
      saveStacks,
      iconLabels,
      // articles
      articlesForm,
      addArticle,
      removeArticle,
      moveArticle,
      saveArticles,
      // contact
      contactForm,
      saveContact,
      // misc
      handleReset,
      exportJSON,
      goToPortfolio,
    }
  },
}
</script>

<style scoped>
/* ── Root ────────────────────────────────────────────────────────────────── */
.admin-root {
  min-height: 100vh;
  background: #0f1117;
  color: #e8eaf0;
  font-family: 'Inter', sans-serif;
}

/* ── Login ───────────────────────────────────────────────────────────────── */
.login-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
}

.login-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 2.5rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-logo {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #42b983, #2d8f63);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 800;
  color: white;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 24px rgba(66,185,131,0.3);
}

.login-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e8eaf0;
  margin-bottom: 0.25rem;
}

.login-sub {
  color: #8a94a6;
  font-size: 0.88rem;
  margin-bottom: 1.75rem;
}

.login-btn { margin-top: 1rem; }

/* ── Dashboard ───────────────────────────────────────────────────────────── */
.dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dash-header {
  background: rgba(255,255,255,0.03);
  border-bottom: 1px solid rgba(255,255,255,0.07);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 100;
}

.dash-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.dash-logo {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #42b983, #2d8f63);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
}

.dash-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e8eaf0;
  line-height: 1.2;
}

.dash-sub {
  font-size: 0.78rem;
  color: #8a94a6;
}

.dash-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.dash-body {
  flex: 1;
  padding: 2rem;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

/* ── Tab content ─────────────────────────────────────────────────────────── */
.tab-content {
  padding: 1.5rem 0;
}

.form-section {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #42b983;
  margin-bottom: 1.25rem;
}

.section-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 1rem;
}

.section-info {
  font-size: 0.85rem;
  color: #8a94a6;
  margin: 0;
}

/* ── Field ───────────────────────────────────────────────────────────────── */
.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.field-label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #8a94a6;
}

.hint {
  font-weight: 400;
  font-style: italic;
  color: #6b7280;
}

.field-error {
  font-size: 0.78rem;
  color: #ef4444;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.form-grid-4 {
  grid-template-columns: 1fr 1fr 1fr;
}

/* ── Tags editor ─────────────────────────────────────────────────────────── */
.tags-editor {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.editable-tag {
  font-size: 0.85rem;
}

.tag-input {
  width: 120px;
}

.add-tag-btn {
  cursor: pointer;
  border-style: dashed;
  font-size: 0.85rem;
}

/* ── List items ──────────────────────────────────────────────────────────── */
.list-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.list-input-sm { width: 100px; flex-shrink: 0; }
.list-input-lg { flex: 1; }

.list-item-block {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 0.75rem;
}

.list-item-block-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

/* ── Project blocks ──────────────────────────────────────────────────────── */
.project-block {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1rem;
}

.project-block-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.project-index {
  font-size: 0.78rem;
  font-weight: 700;
  color: #42b983;
  flex: 1;
}

.project-order-btns {
  display: flex;
  gap: 0.25rem;
}

/* ── Stack group blocks ──────────────────────────────────────────────────── */
.stack-group-block {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1rem;
}

.stack-group-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.group-label-input {
  flex: 1;
  font-weight: 700;
}

.stack-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stack-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.stack-preview-icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  border-radius: 4px;
  flex-shrink: 0;
}

.stack-name-input { width: 140px; flex-shrink: 0; }
.stack-icon-select { width: 160px; flex-shrink: 0; }
.stack-icon-url { flex: 1; min-width: 140px; }
.stack-level-wrap { display: flex; align-items: center; gap: 0.25rem; flex-shrink: 0; }
.stack-level-input { width: 70px; }
.stack-level-pct { color: #42b983; font-weight: 700; font-size: 0.85rem; }

/* ── Article blocks ──────────────────────────────────────────────────────── */
.article-block {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1rem;
}

.article-block-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.article-index {
  font-size: 0.78rem;
  font-weight: 700;
  color: #42b983;
  flex: 1;
}

/* ── Save row ────────────────────────────────────────────────────────────── */
.save-row {
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
  border-top: 1px solid rgba(255,255,255,0.07);
  margin-top: 1.5rem;
}

/* ── Toast ───────────────────────────────────────────────────────────────── */
.saved-toast {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: #42b983;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 24px rgba(66,185,131,0.4);
  z-index: 9999;
  animation: fadeInUp 0.3s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── Responsive ──────────────────────────────────────────────────────────── */
@media (max-width: 768px) {
  .dash-body { padding: 1rem; }
  .form-grid { grid-template-columns: 1fr; }
  .form-grid-4 { grid-template-columns: 1fr 1fr; }
  .stack-item { flex-direction: column; align-items: flex-start; }
  .stack-name-input,
  .stack-icon-select,
  .stack-icon-url { width: 100%; }
}
</style>
