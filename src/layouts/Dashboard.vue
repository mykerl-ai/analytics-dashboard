<template>
  <div class="dashboard">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>
<style scoped>
.app {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 40px;
  background-color: #f9fafb;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.leaderboards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .main-content {
    padding: 20px;
  }
}
</style>
