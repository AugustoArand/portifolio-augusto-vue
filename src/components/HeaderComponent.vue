<template>
  <a-affix :offset-top="0">
    <header class="header">
      <div class="header-background"></div>
      <div class="container">
        <a-row align="middle" justify="space-between">
          <a-col>
            <router-link to="/" class="logo-link">
              <div class="logo">
                <div class="logo-icon">AS</div>
                <div class="logo-text">
                  <h1>Augusto Santos</h1>
                  <p class="subtitle">
                    <span class="badge">QA</span>
                    <span class="separator">|</span>
                    <span class="badge">CPRE-FL Certified</span>
                    
                  </p>
                </div>
              </div>
            </router-link>
          </a-col>
          <a-col>
            <a-menu
              v-model:selectedKeys="selectedKeys"
              mode="horizontal"
              class="nav-menu"
            >
              <a-menu-item key="about">
                <router-link to="/#about">
                  <UserOutlined class="menu-icon" />
                  Sobre mim
                </router-link>
              </a-menu-item>
              <a-menu-item key="projects">
                <router-link to="/#projects">
                  <ProjectOutlined class="menu-icon" />
                  Projetos
                </router-link>
              </a-menu-item>
              <a-menu-item key="stacks">
                <router-link to="/#stacks">
                  <CodeOutlined class="menu-icon" />
                  Stacks
                </router-link>
              </a-menu-item>
              <a-menu-item key="articles">
                <router-link to="/#articles">
                  <FileTextOutlined class="menu-icon" />
                  Artigos
                </router-link>
              </a-menu-item>
            </a-menu>
          </a-col>
        </a-row>
      </div>
    </header>
  </a-affix>
</template>

<script>
import { ref } from 'vue'
import { UserOutlined, ProjectOutlined, CodeOutlined, FileTextOutlined } from '@ant-design/icons-vue'

export default {
  name: 'HeaderComponent',
  components: {
    UserOutlined,
    ProjectOutlined,
    CodeOutlined,
    FileTextOutlined
  },
  setup() {
    const selectedKeys = ref(['about'])
    
    return {
      selectedKeys
    }
  }
}
</script>

<style scoped>
.header {
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(66, 185, 131, 0.2);
  z-index: 1000;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(66, 185, 131, 0.05), 
    transparent
  );
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
}

.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: translateX(5px);
}

.logo-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #42b983 0%, #34a870 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
  transition: all 0.3s ease;
}

.logo:hover .logo-icon {
  transform: rotate(360deg);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.6);
}

.logo-text h1 {
  color: white;
  font-size: 1.5rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.logo-link {
  text-decoration: none;
}

.logo .subtitle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.25rem 0 0 0;
  font-size: 0.85rem;
}

.badge {
  background: rgba(66, 185, 131, 0.2);
  color: #42b983;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-weight: 600;
  border: 1px solid rgba(66, 185, 131, 0.3);
  transition: all 0.3s ease;
}

.badge:hover {
  background: rgba(66, 185, 131, 0.3);
  transform: translateY(-2px);
}

.separator {
  color: rgba(255, 255, 255, 0.3);
  font-weight: 300;
}

.nav-menu {
  background: transparent;
  border: none;
  display: flex;
  gap: 0.5rem;
}

:deep(.ant-menu-item) {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 10px;
  transition: all 0.3s ease;
  border-bottom: none;
  margin: 0 4px;
  padding: 0 1.2rem;
}

:deep(.ant-menu-item:hover) {
  color: #42b983 !important;
  background: rgba(66, 185, 131, 0.1);
  border-bottom: none;
}

:deep(.ant-menu-item-selected) {
  color: #42b983 !important;
  background: rgba(66, 185, 131, 0.15);
  border-bottom: 3px solid #42b983 !important;
}

:deep(.ant-menu-item a) {
  color: inherit;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

:deep(.ant-menu-item a:hover) {
  color: inherit;
}

.menu-icon {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

:deep(.ant-menu-item:hover) .menu-icon {
  transform: scale(1.2);
}

:deep(.ant-menu-horizontal) {
  border-bottom: none;
}

@media (max-width: 768px) {
  .header {
    padding: 0.75rem 0;
  }

  .container {
    padding: 0 1rem;
  }
  
  .logo {
    gap: 0.75rem;
  }

  .logo-icon {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .logo-text h1 {
    font-size: 1.2rem;
  }
  
  .logo .subtitle {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .separator {
    display: none;
  }

  .badge {
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
  }

  .nav-menu {
    gap: 0;
  }

  :deep(.ant-menu-item) {
    font-size: 0.85rem;
    padding: 0 0.8rem;
  }

  .menu-icon {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  :deep(.ant-menu-item a) {
    flex-direction: column;
    gap: 0.2rem;
    font-size: 0.75rem;
  }

  :deep(.ant-menu-item) {
    padding: 0 0.5rem;
  }
}
</style>
