<template>
  <div class="bg-white p-6 shadow-lg rounded-lg">
    <h3 class="text-gray-700 font-semibold mb-4">Groups Leaderboard</h3>
    <div
      v-for="(group, index) in groups"
      :key="group.name"
      class="flex justify-between mb-2"
    >
      <span>{{ index + 1 }}. {{ group.name }}</span>
      <span>{{ group.points }} Points/User</span>
      <span>{{ group.correct }}% Correct</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        { name: "Houston Facility", points: 52, correct: 97 },
        { name: "Test Group", points: 52, correct: 95 },
        { name: "Sales Leadership", points: 52, correct: 94 },
        { name: "Northeast Region", points: 52, correct: 87 },
      ],
    };
  },
};
</script>
