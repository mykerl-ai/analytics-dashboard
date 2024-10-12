<template>
  <main>
    <header class="header">
      <h1>Reports</h1>
      <button class="download-btn btn">
        <img src="../assets/download.svg" alt="" /> <span>Download</span>
      </button>
    </header>
    <hr class="line" />
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 24px;
  color: #000000;
  font-weight: 700;
  line-height: 29px;
}

.download-btn {
  color: #4d4d4d;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s;
}
.btn {
  display: flex;
  align-items: center;
  gap: 8px;
}

.line {
  width: 100%;
  background-color: #000000;
}
</style>
