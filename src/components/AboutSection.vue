<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-card">
        <div class="about-left">
          <img 
            src="https://via.placeholder.com/300x300/42b983/ffffff?text=Augusto+Arand" 
            alt="Augusto Arand" 
            class="profile-image"
          />
          <p class="intro-text">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e eficientes.
            Sempre em busca de novos desafios e aprendizados.
          </p>
        </div>
        <div class="about-right">
          <h2>Sobre Mim</h2>
          <p>
            Olá! Sou Augusto Arand, desenvolvedor de software com experiência em diversas tecnologias 
            e frameworks modernos. Tenho paixão por transformar ideias em realidade através do código.
          </p>
          <p>
            Ao longo da minha carreira, trabalhei em projetos desafiadores que me permitiram 
            desenvolver habilidades tanto no front-end quanto no back-end, sempre focando em 
            entregar valor e qualidade.
          </p>
          <p>
            Acredito em código limpo, boas práticas e na importância da colaboração em equipe. 
            Estou sempre explorando novas tecnologias e metodologias para melhorar meu trabalho.
          </p>
          <div class="skills-highlight">
            <h3>Destaques:</h3>
            <ul>
              <li>🚀 Desenvolvimento Full Stack</li>
              <li>💡 Soluções criativas e eficientes</li>
              <li>🤝 Trabalho em equipe</li>
              <li>📚 Aprendizado contínuo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
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
