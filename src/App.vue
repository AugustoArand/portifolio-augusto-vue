<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#42b983',
        borderRadius: 8,
      },
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
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    ArrowUpOutlined,
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
#app {
  min-height: 100vh;
}

.back-to-top {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background-color: #42b983;
  color: white;
  text-align: center;
  font-size: 24px;
  box-shadow: 0 4px 12px rgba(66, 185, 131, 0.4);
  transition: all 0.3s;
}

.back-to-top:hover {
  background-color: #34a870;
  transform: scale(1.1);
}
</style>
