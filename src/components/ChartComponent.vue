<template>
  <div class="card">
    <Chart
      type="line"
      :data="chartData"
      :options="chartOptions"
      class="chart"
    />
  </div>
</template>

<script setup>
import Chart from "primevue/chart";
import { ref, onMounted } from "vue";

onMounted(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

const setChartData = () => {
  return {
    labels: [
      "Point 1",
      "Point 2",
      "Point 3",
      "Point 4",
      "Point 5",
      "Point 6",
      "Point 7",
    ],
    datasets: [
      {
        data: [20, 50, 45, 60, 55, 70, 65], // Simulating the trajectory of the graph
        fill: true,
        tension: 0.4,
        borderColor: "#1B59F8", // Updated border color
        backgroundColor: "rgba(27, 89, 248, 0.2)", // Light blue fill
      },
    ],
  };
};

const setChartOptions = () => {
  return {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
    },
    scales: {
      x: {
        ticks: {
          display: false, // Hides x-axis labels
        },
        grid: {
          display: false, // Hides x-axis grid lines
        },
      },
      y: {
        ticks: {
          display: false, // Hides y-axis labels
        },
        grid: {
          display: false, // Hides y-axis grid lines
        },
      },
    },
    elements: {
      point: {
        radius: 0, // Removes point markers
      },
      line: {
        borderWidth: 2,
      },
    },
  };
};
</script>

<style scoped>
.chart {
  height: 50px; /* Small fixed height for the chart */
  width: 150px; /* Small fixed width for the chart */
  background: transparent; /* Removes any default background */
}
</style>
