<template>
  <main class="main boards">
    <div class="activity-chart">
      <h3>User Leaderboard</h3>

      <div class="board-grid" v-for="(user, i) in userBoard" :key="i">
        <div class="user-flex">
          <Avatar :profilepic="itemImages[user.name]" />

          <div>
            <p class="user-name">{{ user.name }}</p>
            <span>{{ user.score }}</span>
          </div>
        </div>

        <div class="user-grid end">
          <p class="user-name">{{ i + 1 }}</p>
          <arrow :position="user.increase ? 'up' : 'down'" />
        </div>
      </div>
    </div>

    <div class="activity-chart">
      <h3>Group Leaderboard</h3>

      <div class="board-grid" v-for="(user, i) in groupBoard" :key="i">
        <div class="user-flex">
          <div>
            <p class="user-name">{{ user.name }}</p>
            <span>{{ user.score }}</span>
          </div>
        </div>

        <div class="user-grid end">
          <p class="user-name">{{ i + 1 }}</p>
          <arrow :position="user.increase ? 'up' : 'down'" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { UserItem, BoardItem, GroupItem } from "../types/UserItem";

// Define the store
const store = useStore();
import ChartComponent from "./ChartComponent.vue";
import Avatar from "./Avatar.vue";
import arrow from "./vectors/arrow.vue";

const boards = ref<BoardItem[]>([
  { label: "Active Users", value: "27" },
  { label: "Questions Answered", value: "3,298" },
  { label: "Av. Session Length", value: "2m 34s" },
  { label: "Starting Knowledge", value: "64%" },
  { label: "Current Knowledge", value: "86%" },
  { label: "Knowledge Gain", value: "+34%" },
]);

// Dynamically importing images for lazy loading
// Data for user leaderboard
const userBoard = ref<UserItem[]>([
  {
    name: "Jesse Thomas",
    score: "637 Points - 98% Correct",
    email: "jesse@example.com",
    joinedDate: "2022-01-15",
    increase: true,
    image: () => import("../assets/person1.png"),
  },
  {
    name: "Thisal Mathiyazhagan",
    score: "500 Points - 85% Correct",
    email: "thisal@example.com",
    joinedDate: "2021-05-10",
    increase: false,
    image: () => import("../assets/person2.png"),
  },
  {
    name: "Helen Chuang",
    score: "800 Points - 95% Correct",
    email: "helen@example.com",
    joinedDate: "2022-03-22",
    increase: true,
    image: () => import("../assets/person3.png"),
  },
  {
    name: "Lura Silverman",
    score: "450 Points - 75% Correct",
    email: "lura@example.com",
    joinedDate: "2023-07-30",
    increase: true,
    image: () => import("../assets/person4.png"),
  },
]);

const groupBoard = ref<GroupItem[]>([
  {
    name: "Houston Facility",
    score: "52 Points / User - 97% Correct",
    image: () => import("../assets/person1.png"),
    increase: true,
  },
  {
    name: "Test Group",
    score: "52 Points / User - 97% Correct",
    image: () => import("../assets/person2.png"),
    increase: false,
  },
  {
    name: "Sales Leadership",
    score: "52 Points / User - 97% Correct",
    image: () => import("../assets/person3.png"),
    increase: true,
  },
  {
    name: "Northeast Region",
    score: "52 Points / User - 97% Correct",
    image: () => import("../assets/person4.png"),
    increase: true,
  },
]);

const itemImages = ref<{ [key: string]: string }>({}); // Typing the object to store loaded images

// Lazy load images by dynamic import
const loadImages = async () => {
  const imagePromises = userBoard.value.map(async (item) => {
    const image = await item.image();
    itemImages.value[item.name] = image.default;
  });
  await Promise.all(imagePromises);
};

onMounted(async () => {
  await loadImages();

  //save user data to store
  store.dispatch("saveUserBoard", userBoard.value);
});
</script>

<style scoped>
.main {
  width: 100%;
  margin-top: 20px;
}
/* boardistics Section */
.boards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* flex-wrap: wrap; */
  gap: 20px;
}

.board-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.user-flex {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-flex span {
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  line-height: 14px;
}
.no-stretch {
  align-self: self-start; /* This item won't stretch and will align to the top */
}

.end {
  justify-self: self-end; /* This item won't stretch and will align to the top */
}

.user-grid {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-name {
  font-size: 14px;
  line-height: 18px;
  color: #000;
  font-weight: 600;
}

.label-fade {
  font-weight: 600;
  font-size: 17px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.7);
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
  .boards {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
