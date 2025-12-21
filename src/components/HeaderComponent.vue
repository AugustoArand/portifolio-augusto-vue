<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="logo">
          <h1>Augusto Santos</h1>
        </div>
        <ul class="nav-links">
          <li><a href="#about">Sobre mim</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#stacks">Stacks Conhecidas</a></li>
          <li><a href="#articles">Artigos</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  color: white;
  font-size: 1.8rem;
  margin: 0;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: white;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #42b983;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
