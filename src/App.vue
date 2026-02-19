<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#42b983',
        borderRadius: 8,
        fontFamily: 'Inter, system-ui, sans-serif',
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
  background: var(--color-green);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  box-shadow: 0 4px 20px rgba(66, 185, 131, 0.4);
  transition: all 0.25s ease;
}

.back-to-top:hover {
  background: #5de0a1;
  transform: scale(1.1) translateY(-2px);
  box-shadow: 0 8px 28px rgba(66, 185, 131, 0.5);
}
</style>
