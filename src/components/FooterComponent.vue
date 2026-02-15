<template>
  <footer class="footer">
    <div class="container">
      <a-row :gutter="[32, 32]">
        <a-col :xs="24" :sm="24" :md="8">
          <a-space direction="vertical" size="middle">
            <a-typography-title :level="3" style="color: white; margin: 0;">
              Augusto Santos
            </a-typography-title>
            <a-tag color="green" style="font-size: 14px;">
              Profissional certificado no CPRE-FL
            </a-tag>
          </a-space>
        </a-col>
        
        <a-col :xs="24" :sm="12" :md="8">
          <a-typography-title :level="4" style="color: #42b983;">
            Contato
          </a-typography-title>
          <a-space direction="vertical" size="small" style="width: 100%;">
            <a-typography-text style="color: #ccc;">
              <MailOutlined style="margin-right: 8px;" />
              <a href="mailto:augustoarandiba@gmail.com" style="color: #ccc;">
                augustoarandiba@gmail.com
              </a>
            </a-typography-text>
            <a-typography-text style="color: #ccc;">
              <PhoneOutlined style="margin-right: 8px;" />
              <a href="tel:+5511984909210" style="color: #ccc;">
                +55 (11) 98490-9210
              </a>
            </a-typography-text>
            <a-typography-text style="color: #ccc;">
              <EnvironmentOutlined style="margin-right: 8px;" />
              Bahia, Brasil
            </a-typography-text>
          </a-space>
        </a-col>
        
        <a-col :xs="24" :sm="12" :md="8">
          <a-typography-title :level="4" style="color: #42b983; margin-bottom: 1rem;">
            Redes Sociais
          </a-typography-title>
          <div class="social-buttons">
            <a-tooltip title="GitHub" placement="top">
              <a 
                href="https://github.com/AugustoArand"
                target="_blank"
                class="social-btn github-btn"
              >
                <GithubOutlined />
              </a>
            </a-tooltip>
            <a-tooltip title="LinkedIn" placement="top">
              <a 
                href="https://www.linkedin.com/in/augusto-arandiba-b26b90105/"
                target="_blank"
                class="social-btn linkedin-btn"
              >
                <LinkedinOutlined />
              </a>
            </a-tooltip>
          </div>
        </a-col>
      </a-row>
      
      <a-divider style="border-color: #34495e; margin: 2rem 0 1rem;" />
      
      <div class="footer-bottom">
        <a-typography-text style="color: #ccc;">
          &copy; 2025 Augusto Arand. Todos os direitos reservados.
        </a-typography-text>
      </div>
    </div>
  </footer>
</template>

<script>
import { 
  GithubOutlined, 
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons-vue'

export default {
  name: 'FooterComponent',
  components: {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined
  }
}
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 3rem 0 1rem;
  margin-top: auto;
}

.footer-bottom {
  text-align: center;
  padding-top: 1rem;
}

.social-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.social-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  transition: all 0.3s ease;
  text-decoration: none;
}

.github-btn {
  background-color: #34495e;
}

.github-btn:hover {
  background-color: #42b983;
  transform: translateY(-3px);
  color: white;
}

.linkedin-btn {
  background-color: #0077b5;
}

.linkedin-btn:hover {
  background-color: #42b983;
  transform: translateY(-3px);
  color: white;
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 1rem;
  }
  
  .social-buttons {
    justify-content: center;
  }
}
</style>
