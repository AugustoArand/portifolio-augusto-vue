# Portfólio Augusto Arand - Vue.js

Portfólio pessoal criado com Vue.js e configurado para deploy automático no GitHub Pages.

![Portfolio Screenshot](https://github.com/user-attachments/assets/ae2022f1-d266-4fa5-9322-bcd732d29035)

## ✨ Características

- **Header com Navegação**: Menu com links para Sobre mim, Projetos, Stacks Conhecidas e Artigos
- **Seção Sobre Mim**: Card com imagem e texto à esquerda, campo de texto à direita
- **Seção de Projetos**: Carrossel interativo com navegação entre projetos
- **Seção de Stacks Conhecidas**: Cards com imagens, descrições e níveis de proficiência
- **Seção de Artigos**: Grid de artigos com links
- **Rodapé**: Informações de contato e links para redes sociais
- **Design Responsivo**: Adaptado para diferentes tamanhos de tela

## 🚀 Tecnologias Utilizadas

- **Vue.js 3** - Framework JavaScript progressivo
- **Vite** - Build tool moderna e rápida
- **CSS3** - Estilização com animações e transições
- **GitHub Actions** - CI/CD para deploy automático

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js 20.x ou superior
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/AugustoArand/portifolio-augusto-vue.git

# Entre no diretório
cd portifolio-augusto-vue

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173/portifolio-augusto-vue/`

### Build para Produção

```bash
# Crie a build de produção
npm run build

# Pré-visualize a build de produção
npm run preview
```

## 🌐 Deploy no GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages usando GitHub Actions.

### Configuração

1. No seu repositório GitHub, vá em **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Faça um push para a branch `main`

O workflow `.github/workflows/deploy.yml` será executado automaticamente e fará o deploy do site.

### Acesso ao Site

Após o deploy, o site estará disponível em:
```
https://augustoarand.github.io/portifolio-augusto-vue/
```

## 📁 Estrutura do Projeto

```
portifolio-augusto-vue/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow de deploy automático
├── public/                     # Arquivos públicos estáticos
├── src/
│   ├── assets/
│   │   └── main.css           # Estilos globais
│   ├── components/
│   │   ├── HeaderComponent.vue      # Cabeçalho com navegação
│   │   ├── AboutSection.vue         # Seção sobre mim
│   │   ├── ProjectsSection.vue      # Seção de projetos com carrossel
│   │   ├── StacksSection.vue        # Seção de stacks conhecidas
│   │   ├── ArticlesSection.vue      # Seção de artigos
│   │   └── FooterComponent.vue      # Rodapé
│   ├── App.vue                # Componente raiz
│   └── main.js                # Ponto de entrada
├── index.html                 # HTML principal
├── vite.config.js             # Configuração do Vite
└── package.json               # Dependências e scripts

```

## 🎨 Personalização

Para personalizar o portfólio com suas informações:

1. **Dados Pessoais**: Edite os componentes em `src/components/`
2. **Projetos**: Atualize o array `projects` em `ProjectsSection.vue`
3. **Stacks**: Modifique o array `stacks` em `StacksSection.vue`
4. **Artigos**: Edite o array `articles` em `ArticlesSection.vue`
5. **Contato**: Atualize as informações em `FooterComponent.vue`
6. **Cores e Estilos**: Modifique `src/assets/main.css` e os estilos dos componentes

## 📝 Licença

Este projeto está sob a licença ISC.

## 👤 Autor

**Augusto Arand**

- GitHub: [@AugustoArand](https://github.com/AugustoArand)

---

Desenvolvido com ❤️ usando Vue.js
