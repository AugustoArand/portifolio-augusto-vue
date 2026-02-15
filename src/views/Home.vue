<template>
  <div>
    <AboutSection />
    <ProjectsSection />
    <StacksSection />
    <ArticlesSection />
  </div>
</template>

<script>
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import StacksSection from '../components/StacksSection.vue'
import ArticlesSection from '../components/ArticlesSection.vue'

export default {
  name: 'Home',
  components: {
    AboutSection,
    ProjectsSection,
    StacksSection,
    ArticlesSection
  },
  mounted() {
    console.log('Home component mounted')
  }
}
</script>
