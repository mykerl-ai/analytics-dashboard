<template>
  <main class="main stats">
    <section class="stat-grid">
      <div
        v-for="(stat, i) in stats"
        :key="stat.label"
        class="no-stretch stat-card"
      >
        <p>{{ stat.label }}</p>
        <h2>
          {{ stat.value }}<span v-show="i === 0" class="label-fade">/80</span>
        </h2>

        <div v-show="i > 2" style="width: 60%">
          <ChartComponent />
        </div>
      </div>
    </section>

    <div class="activity-chart">
      <div class="activity-head">
        <h3>Activity</h3>
        <div class="activity-select">
          <p>Month</p>
          <img src="../assets/caret-outline-down.svg" alt="" />
        </div>
      </div>
      <BarChart />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import ChartComponent from "./ChartComponent.vue";
import BarChart from "./BarChart.vue";
const stats = ref([
  {
    label: "Active Users",
    value: "27",
  },
  { label: "Questions Answered", value: "3,298" },
  { label: "Av. Session Length", value: "2m 34s" },
  { label: "Starting Knowledge", value: "64%" },
  { label: "Current Knowledge", value: "86%" },
  { label: "Knowledge Gain", value: "+34%" },
]);
</script>

<style scoped>
.main {
  width: 100%;
  margin-top: 70px;
}
/* Statistics Section */
.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* flex-wrap: wrap; */
  gap: 20px;
}
.stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.stat-card {
  background-color: #ffffff;
  padding: 16px;
  border-radius: 20px;
  border: 1px solid #eff0f6;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.label-fade {
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.7);
}
.stat-card:hover {
  transform: translateY(-5px);
}

.stat-card p {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 16.94px;
  margin-bottom: 10px;
  font-weight: 500;
}

.stat-card h2 {
  font-size: 24px;
  line-height: 29px;
  color: #000;
  font-weight: 700;
}

.activity-chart {
  background-color: #ffffff;
  padding: 25px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  /* flex: 2 1 400px; */
}

.activity-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.8px solid #e4e5e7;
}

.activity-select {
  display: flex;
  align-items: center;
  gap: 6px;
}

.activity-select p {
  font-size: 12px;
  line-height: 14.52px;
  color: #0f2552;
  font-weight: 600;
}
.activity-chart h3 {
  font-size: 14px;
  line-height: 16.94px;
  color: #4d4d4d;
  margin-bottom: 15px;
  font-weight: 600;
  /* padding-bottom: 8px; */
}
</style>
