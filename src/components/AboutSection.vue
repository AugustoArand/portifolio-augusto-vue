<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-card">
        <div class="about-left">
          <img 
            :src="profileImage" 
            alt="Augusto Arand" 
            class="profile-image"
          />
          <p class="intro-text">
            Estudante de Análise e Desenvolvimento de Sistemas | Entusiasta por Motos e Tecnologia
          </p>
        </div>
        <div class="about-right">
          <h2>Sobre Mim</h2>
          <p>
            Apaixonado por motos e tecnologia, atualmente cursando Análise e Desenvolvimento de Sistemas no Centro Universitário Jorge Amado e atuando como Estagiário QA no Instituto Reconcavo de Tecnologia. Possuo experiência na execução de testes manuais, automatizados, funcionais e não funcionais, testes de regressão e confirmação. Experiênia na gestão e reporte de bugs utilizando Ferramentas como Jira e Azure DevOps. Experiênia com testes automatizados utilizando Cypress, RobotFramework, Appium e Selenium. Experiência em programação full-stack com: JavaScript, Node.js, Express, React, Next.js, Prisma ORM. Experiênia em gestão e consulta de banco de dados relacionais (PostgreSQL, MySQL). Possuo também certificação CPRE-FL (Engenharia de Requisitos - Nível Fundamental) pelo IREB.
          </p>
          <div class="skills-highlight">
            <h3>Destaques:</h3>
            <ul>
              <li> 🚀 QA | Automação | DevOps | CPRE-FL </li>
            
            </ul>
          </div>
        </div>
      </div>
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
  background-color: white;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-card {
  display: flex;
  gap: 3rem;
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-left {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.profile-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.intro-text {
  text-align: center;
  font-style: italic;
  color: #666;
}

.about-right {
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-right h2 {
  text-align: left;
  margin-bottom: 1rem;
}

.skills-highlight {
  margin-top: 1rem;
  padding: 1.5rem;
  background-color: white;
  border-radius: 8px;
  border-left: 4px solid #42b983;
}

.skills-highlight h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.skills-highlight ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skills-highlight li {
  color: #555;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .about-card {
    flex-direction: column;
    gap: 2rem;
  }

  .about-left,
  .about-right {
    flex: 1;
  }
}
</style>
