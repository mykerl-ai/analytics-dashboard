<template>
  <div class="bg-white p-6 shadow-lg rounded-lg">
    <apexchart type="bar" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [
        {
          name: "Activity",
          data: [120, 200, 250, 300, 350, 400, 450, 500], // Example data
        },
      ],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        },
        colors: ["#1E3A8A"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded",
          },
        },
      },
    };
  },
};
</script>

<style scoped>
/* Style the chart container */
</style>
