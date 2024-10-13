<template>
  <div class="not-found-container">
    <h1 class="error-code">404</h1>
    <p class="error-message">Oops! Page Not Found</p>
    <p class="error-description">
      The page you're looking for doesn't exist or has been moved.
    </p>
    <router-link to="/" class="home-button">Go Home</router-link>
  </div>
</template>

<script setup>
// You can add any script logic here if needed.
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  font-family: "Arial", sans-serif;
}

.error-code {
  font-size: 8rem;
  font-weight: bold;
  color: #1976d2;
  margin: 0;
}

.error-message {
  font-size: 2rem;
  color: #333;
  margin: 0.5rem 0;
}

.error-description {
  font-size: 1.2rem;
  color: #666;
  margin: 0.5rem 0 2rem;
}

.home-button {
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #1976d2;
  border: none;
  border-radius: 20px;
  text-decoration: none;
  transition: background-color 0.3s, transform 0.3s;
}

.home-button:hover {
  background-color: #1565c0;
  transform: translateY(-2px);
}

.image-container {
  margin-top: 20px;
}

.lost-image {
  max-width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
</style>
