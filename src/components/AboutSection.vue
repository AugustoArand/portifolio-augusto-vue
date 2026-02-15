<template>
  <section id="about" class="about-section">
    <div class="section-background">
      <div class="floating-shapes">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
        <div class="shape shape-3"></div>
      </div>
    </div>
    
    <div class="about-container">
      <a-row :gutter="[48, 32]" align="middle">
        <a-col :xs="24" :md="8">
          <div class="about-left">
            <div class="profile-image-wrapper">
              <div class="image-glow"></div>
              <img 
                :src="profileImage" 
                alt="Augusto Arand"
                class="profile-image"
              />
            </div>
            <div class="intro-tags">
              <div class="intro-tag tag-blue">
                Estudante de Análise e Desenvolvimento de Sistemas
              </div>
              <div class="intro-tag tag-green">
                Entusiasta por Motos e Tecnologia
              </div>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :md="16">
          <div class="about-right">
            <h2 class="section-title">
              <span class="title-gradient">Sobre Mim</span>
            </h2>
            <div class="info-card">
              <div class="card-decoration"></div>
              <p class="bio-text">
                Apaixonado por motos e tecnologia, atualmente cursando <strong>Análise e Desenvolvimento de Sistemas</strong> no Centro Universitário Jorge Amado e atuando como <strong>Estagiário QA</strong> na Tecsinapse.
              </p>
              <p class="bio-text">
                Possuo experiência na execução de testes manuais, automatizados, funcionais e não funcionais, testes de regressão e confirmação. Experiência na gestão e reporte de bugs utilizando ferramentas como <strong>Jira</strong>, <strong>Azure DevOps</strong>, <strong>Github Actions</strong>. Experiência com testes automatizados utilizando <strong>Cypress, RobotFramework, Appium e Selenium</strong>.
              </p>
              <p class="bio-text">
                Experiência em programação full-stack com: <strong>JavaScript, Node.js, React, Vue.js, Next.js, Prisma ORM, Ruby, MongoDB e Postgres </strong>. Experiência em gestão e consulta de banco de dados relacionais (<strong>PostgreSQL, MySQL</strong>). Possuo também certificação <strong>CPRE-FL</strong> (Engenharia de Requisitos - Nível Fundamental) pelo IREB.
              </p>
              
              <div class="highlights">
                <h4 class="highlights-title">🎯 Destaques</h4>
                <div class="tags-container">
                  <div class="highlight-tag">QA</div>
                  <div class="highlight-tag">Automação</div>
                  <div class="highlight-tag">DevOps</div>
                  <div class="highlight-tag">CPRE-FL</div>
                </div>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </section>
</template>

<script>
import profileImage from '../assets/pics/profile-pic.png'

export default {
  name: 'AboutSection',
  data() {
    return {
      profileImage
    }
  }
}
</script>

<style scoped>
.about-section {
  position: relative;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0d3d2d 100%);
  padding: 5rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 25s infinite ease-in-out;
}

.shape-1 {
  width: 400px;
  height: 400px;
  top: -150px;
  left: -150px;
  animation-delay: 0s;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: -100px;
  right: -100px;
  animation-delay: 8s;
}

.shape-3 {
  width: 200px;
  height: 200px;
  top: 40%;
  left: 50%;
  animation-delay: 15s;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(60px, -60px) scale(1.1);
  }
  66% {
    transform: translate(-40px, 80px) scale(0.9);
  }
}

.about-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  position: relative;
  z-index: 1;
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-left {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.profile-image-wrapper {
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 1;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border: 6px solid rgba(255, 255, 255, 0.9);
  transition: transform 0.3s ease;
}

.profile-image-wrapper:hover {
  transform: scale(1.05) rotate(2deg);
}

.image-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  animation: glow 3s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% {
    transform: translate(0, 0);
    opacity: 0.5;
  }
  50% {
    transform: translate(10%, 10%);
    opacity: 0.8;
  }
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.intro-tags {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 350px;
}

.intro-tag {
  font-size: 0.95rem;
  padding: 1rem 1.5rem;
  text-align: center;
  border-radius: 15px;
  font-weight: 600;
  color: white;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  animation: slideUp 0.8s ease-out;
}

.intro-tag:nth-child(1) {
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.intro-tag:nth-child(2) {
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}

.tag-blue {
  background: rgba(66, 185, 131, 0.7);
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
  border: 1px solid rgba(66, 185, 131, 0.5);
}

.tag-blue:hover {
  background: rgba(66, 185, 131, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(66, 185, 131, 0.6);
}

.tag-green {
  background: rgba(52, 168, 112, 0.7);
  box-shadow: 0 4px 15px rgba(52, 168, 112, 0.4);
  border: 1px solid rgba(52, 168, 112, 0.5);
}

.tag-green:hover {
  background: rgba(52, 168, 112, 0.9);
  transform: translateY(-3px);
  box-shadow: 0 6px 25px rgba(52, 168, 112, 0.6);
}

.about-right {
  display: flex;
  flex-direction: column;
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section-title {
  margin-bottom: 2rem;
  text-align: left;
}

.title-gradient {
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 3rem;
  font-weight: 700;
  display: inline-block;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.info-card {
  position: relative;
  background: white;
  border-radius: 25px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
  transition: transform 0.3s ease;
  overflow: hidden;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
}

.card-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, #42b983 0%, #34a870 50%, #2d9361 100%);
}

.bio-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
}

.bio-text strong {
  color: #42b983;
  font-weight: 600;
}

.highlights {
  margin-top: 2rem;
  background: linear-gradient(135deg, rgba(66, 185, 131, 0.1) 0%, rgba(52, 168, 112, 0.1) 100%);
  padding: 1.5rem;
  border-radius: 15px;
  border: 2px solid rgba(66, 185, 131, 0.3);
}

.highlights-title {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.highlight-tag {
  flex: 0 0 auto;
  background: linear-gradient(135deg, #42b983 0%, #34a870 100%);
  color: white;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 20px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(66, 185, 131, 0.4);
  transition: all 0.3s ease;
  white-space: nowrap;
}

.highlight-tag:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(66, 185, 131, 0.6);
}


@media (max-width: 768px) {
  .about-section {
    padding: 3rem 0;
    min-height: auto;
  }
  
  .about-container {
    padding: 0 1rem;
  }
  
  .title-gradient {
    font-size: 2rem;
    text-align: center;
  }
  
  .section-title {
    text-align: center;
  }
  
  .profile-image-wrapper {
    max-width: 280px;
  }
  
  .info-card {
    padding: 1.5rem;
  }
  
  .bio-text {
    font-size: 1rem;
  }
}
</style>
