<template>
  <main class="main topics">
    <div class="activity-chart">
      <h3>Weakest Topics</h3>

      <div v-for="weak in weakestTopics" :key="weak.label" class="topic-grid">
        <div class="img-box">
          <img loading="lazy" :src="weak.image" alt="" />
        </div>

        <div class="range-box">
          <h4>{{ weak.label }}</h4>
          <Range
            :value="weak.value"
            color="#FFBF1A"
            endColor="#FF4080"
            baseColor="#FFBF1A"
            baseEndColor="#FF4080"
          />
        </div>

        <div class="score-box">
          <p>{{ weak.value }}% <span>Correct</span></p>
        </div>
      </div>
    </div>

    <div class="activity-chart">
      <h3>Strongest Topics</h3>
      <div v-for="weak in strongestTopics" :key="weak.label" class="topic-grid">
        <div class="img-box">
          <img loading="lazy" :src="weak.image" alt="" />
        </div>

        <div class="range-box">
          <h4>{{ weak.label }}</h4>
          <Range
            :value="weak.value"
            color="#2FEA9B"
            endColor="#7FDD53"
            baseColor="#2FEA9B"
            baseEndColor="#7FDD53"
          />
        </div>

        <div class="score-box">
          <p>{{ weak.value }}% <span>Correct</span></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ChartComponent from "./ChartComponent.vue";
import Range from "./Range.vue";
import topic1 from "../assets/topic1.png";
import topic2 from "../assets/topic2.png";
import topic3 from "../assets/topic3.png";
import topic4 from "../assets/topic4.png";
import topic5 from "../assets/topic5.png";
import topic6 from "../assets/topic6.png";

// Define interfaces for topic items
interface TopicItem {
  label: string;
  value: string;
  image: string; // The image is a string URL
}

const weakestTopics = ref<TopicItem[]>([
  {
    label: "Food Safety",
    value: "74",
    image: topic1,
  },
  {
    label: "Compliance Basics Procedures",
    value: "52",
    image: topic2,
  },
  {
    label: "Company Networking",
    value: "36",
    image: topic3,
  },
]);

const strongestTopics = ref<TopicItem[]>([
  {
    label: "Covid Protocols",
    value: "85",
    image: topic5,
  },
  {
    label: "Cyber Security Basics",
    value: "92",
    image: topic4,
  },
  {
    label: "Social Media Policies",
    value: "89",
    image: topic6,
  },
]);
</script>

<style scoped>
.main {
  width: 100%;
  margin-top: 20px;
}
/* topicistics Section */
.topics {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* flex-wrap: wrap; */
  gap: 20px;
}
.topic-grid {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 20px;
}

.range-box {
  width: 60%;
}

.score-box p,
.range-box h4 {
  color: #000;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
}
.range-box h4 {
  margin-bottom: 10px;
}

.score-box span {
  color: rgba(0, 0, 0, 0.5);
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
}
.score-box {
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 4px;
}
.image-box {
  width: 49.45px;
  height: 32px;
  border-radius: 6px;
}

.image-box img {
  width: 100%;
  height: 100%;
}
.no-stretch {
  align-self: self-start; /* This item won't stretch and will align to the top */
}
.topic-card {
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
.topic-card:hover {
  transform: translateY(-5px);
}

.topic-card p {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  line-height: 16.94px;
  margin-bottom: 10px;
  font-weight: 500;
}

.topic-card h2 {
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

.activity-chart h3 {
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
  font-weight: 600;
  padding-bottom: 10px;
}

@media (max-width: 768px) {
  .topics {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
