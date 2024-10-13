<template>
  <main class="main boards">
    <Header title="People" />
    <Filters />
    <div class="activity-chart">
      <h3>People</h3>
      <table class="user-table">
        <thead>
          <tr>
            <th class="hidden">#</th>
            <th>User</th>
            <th>Total Score</th>
            <th class="hidden">Email</th>
            <th class="hidden">Joined Date</th>
            <th class="hidden">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, i) in paginatedUsers" :key="i">
            <td class="hidden">{{ i + 1 }}</td>
            <td>
              <div class="user-flex">
                <Avatar :profilepic="itemImages[user.name]" />
                <span class="user-name">{{ user.name }}</span>
              </div>
            </td>
            <td>{{ user.score }}</td>
            <td class="hidden">{{ user.email }}</td>
            <td class="hidden">{{ user.joinedDate }}</td>
            <td class="hidden">
              <span
                :class="user.increase ? 'status-increase' : 'status-decrease'"
              >
                <Arrow :position="user.increase ? 'up' : 'down'" />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination
        :total-items="userBoard.length"
        :items-per-page="itemsPerPage"
        v-model:current-page="currentPage"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import Avatar from "../components/Avatar.vue";
import Arrow from "../components/vectors/arrow.vue";
import Filters from "../components/Filters.vue";
import Header from "../components/Header.vue";
import Pagination from "../components/Pagination.vue";

// Define types for user items
interface User {
  name: string;
  score: string;
  email: string;
  joinedDate: string;
  increase: boolean;
  image: () => Promise<{ default: string }>; // Lazy load image function
}

const itemsPerPage = ref<number>(5); // Number of items to display per page
const currentPage = ref<number>(1);

// Data for user leaderboard
const userBoard = ref<User[]>([
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

const itemImages = ref<{ [key: string]: string }>({});

// Paginated users based on current page
const paginatedUsers = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value;
  return userBoard.value.slice(start, start + itemsPerPage.value);
});

// Lazy loading images
const loadImages = async () => {
  const imagePromises = userBoard.value.map(async (item) => {
    const image = await item.image();
    itemImages.value[item.name] = image.default;
  });
  await Promise.all(imagePromises);
};

onMounted(async () => {
  await loadImages();
});
</script>

<style scoped>
.main {
  width: 100%;
  margin-top: 5px;
}

.boards {
  display: grid;
  gap: 10px;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th,
.user-table td {
  padding: 10px;
  border: 1px solid #eaeaea;
  text-align: left;
  font-size: 14px;
}

.user-table th {
  background-color: #f5f5f5;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
}

.user-flex {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-name {
  font-size: 14px;
  font-weight: 600;
  color: #000;
}

.status-increase {
  color: green;
}

.status-decrease {
  color: red;
}

.activity-chart {
  background-color: #ffffff;
  padding: 20px 20px;
  margin-top: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.activity-chart h3 {
  font-size: 14px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 15px;
}

.hidden {
  display: table-cell;
}

@media (max-width: 768px) {
  .hidden {
    display: none;
  }
}
</style>
