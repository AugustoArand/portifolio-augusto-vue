<template>
  <div id="app">
    <HeaderComponent />
    <main>
      <AboutSection />
      <ProjectsSection />
      <StacksSection />
      <ArticlesSection />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import StacksSection from './components/StacksSection.vue'
import ArticlesSection from './components/ArticlesSection.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    AboutSection,
    ProjectsSection,
    StacksSection,
    ArticlesSection,
    FooterComponent
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
