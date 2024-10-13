<template>
  <div>
    <!-- Sidebar -->

    <!-- Main Content -->
    <!-- Header -->
    <Header />

    <!-- Filters -->
    <Filters />

    <!-- Statistics -->
    <StatsCard />

    <!-- Topics -->
    <TopicsList />

    <!-- Leaderboards -->
    <Leaderboard />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Filters from "../components/Filters.vue";
import StatsCard from "../components/StatsCard.vue";
import TopicsList from "../components/TopicsList.vue";
import Leaderboard from "../components/Leaderboard.vue";

export default {
  components: {
    Header,
    Filters,
    StatsCard,
    TopicsList,
    Leaderboard,
  },
  data() {
    return {
      stats: [
        {
          title: "Active Users",
          value: "27/80",
          extra: "3,298 Questions Answered",
        },
        { title: "Average Session Length", value: "2m 34s", extra: "" },
        {
          title: "Knowledge Gain",
          value: "+34%",
          extra: "Current Knowledge: 86%",
        },
      ],
    };
  },
};
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
</style>
