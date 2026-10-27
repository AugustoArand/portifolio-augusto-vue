<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#C9B8FF',
        colorTextLightSolid: '#0B0A10',
        colorBgBase: '#0B0A10',
        borderRadius: 4,
        fontFamily: 'Inter Tight, system-ui, sans-serif',
      },
      algorithm: darkAlgorithm,
    }"
  >
    <a-layout id="app">
      <a-layout-header style="padding: 0; height: auto; line-height: normal;">
        <HeaderComponent />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer style="padding: 0;">
        <FooterComponent />
      </a-layout-footer>
      <a-back-top>
        <div class="back-to-top">
          <ArrowUpOutlined />
        </div>
      </a-back-top>
    </a-layout>
  </a-config-provider>
</template>

<script>
import { ArrowUpOutlined } from '@ant-design/icons-vue'
import { theme } from 'ant-design-vue'
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: { ArrowUpOutlined, HeaderComponent, FooterComponent },
  setup() {
    return { darkAlgorithm: theme.darkAlgorithm }
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  background: var(--color-bg);
}

.back-to-top {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--color-bg-raised);
  border: 1px solid var(--color-border);
  color: var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

.back-to-top:hover {
  border-color: var(--color-accent);
  transform: translateY(-2px);
}
</style>
