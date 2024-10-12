<template>
  <main>
    <section class="filters">
      <div v-for="(value, key) in filterData" :key="key" class="timeframe">
        <div>
          <SelectComponent
            :options="filterData[key].options"
            :multi="filterData[key].multi"
            :label="key"
            @update="($event) => (filterData[key].value = $event)"
            :value="filterData[key].value"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import SelectComponent from "./SelectComponent.vue";

const filterData = ref({
  timeframe: {
    value: "This Month",
    options: ["Last 7 Days", "This Month", "This Year ", "Custom"],
  },
  people: {
    value: [],
    multi: true,
    options: [
      { groups: ["All users", "Managers", "Trainers"] },

      { users: ["Adrian Lu", "Evelyn Hamilton"] },
    ],
  },
  topic: {
    value: "",
    options: [
      "Food Safety",
      "Covid Protocols",
      "Compliance Basics Procedures",
      "Cyber Security Basics",
      "Company Networking",
      "Social Media Policies",
    ],
  },
});
</script>

<style scoped>
/* Filters Section */
.filters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* justify-content: space-between; */
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 60px;
  margin: 20px 0;
}

.filters .timeframe {
  display: flex;
  flex-direction: column;
}

.filters .timeframe h3 {
  margin-bottom: 8px;
  font-size: 14px;
  color: #525f7f;
}

.filters select {
  padding: 10px 15px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 14px;
  color: #1f2937;
  width: 200px;
  background-color: #ffffff;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" viewBox="0 0 10 5"><path fill="%23525F7F" d="M0 0l5 5 5-5z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px 5px;
  cursor: pointer;
}

.filters .filters-selects {
  display: flex;
  gap: 20px;
}

.filters .filters-selects select {
  width: 180px;
}

.filters .avg-session {
  font-size: 14px;
  color: #525f7f;
}
</style>
