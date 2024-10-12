<template>
  <div class="chart-wrapper">
    <!-- Y-Axis Labels -->
    <div class="y-axis">
      <div class="y-axis-label">400</div>
      <div class="y-axis-label">300</div>
      <div class="y-axis-label">200</div>
      <div class="y-axis-label">100</div>
      <div class="y-axis-label">0</div>
    </div>

    <!-- Bar Chart -->
    <div class="bar-chart">
      <div
        v-for="(item, index) in chartData"
        :key="index"
        class="bar-container"
      >
        <div class="progress-bar-vertical">
          <div
            class="progress-fill-vertical"
            :style="{ height: item.value + '%' }"
          ></div>
        </div>
        <div class="x-axis-label">{{ item.label }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [
        { label: "JAN", value: 75 },
        { label: "FEB", value: 50 },
        { label: "MAR", value: 90 },
        { label: "APR", value: 20 },
        { label: "MAY", value: 30 },
        { label: "JUN", value: 45 },
        { label: "JUL", value: 50 },
        { label: "AUG", value: 30 },
        { label: "SEP", value: 72 },
        { label: "OCT", value: 84 },
        { label: "NOV", value: 96 },
        { label: "DEC", value: 100 },
      ],
    };
  },
};
</script>

<style scoped>
.chart-wrapper {
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 20px; /* Space for X-axis labels */
  margin-top: 50px;
}

/* Y-Axis Labels */
.y-axis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 215px;
  margin-right: 10px;
}

.y-axis-label {
  text-align: right;
  font-size: 9.75px;
  line-height: 12.61px;
  font-weight: 600;
  color: #838383;
}

/* Bar Chart */
.bar-chart {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 200px;
  width: 100%;
}

/* Bar Container */
.bar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Vertical Progress Bar */
.progress-bar-vertical {
  width: 10px; /* Make the bars thinner */
  height: 200px;
  background-color: #f2f7ff;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
}

/* Vertical Fill */
.progress-fill-vertical {
  width: 100%;
  background: linear-gradient(
    356.64deg,
    rgba(27, 89, 248, 0.8) 48.49%,
    rgba(27, 89, 248, 0) 282.14%
  ); /* Customize bar color */
  border-radius: inherit;
  transition: height 0.3s ease;
  position: absolute;
  bottom: 0;
}

/* X-Axis Labels */
.x-axis-label {
  margin-top: 5px;
  font-size: 9px;
  text-align: center;
  color: #838383;
  line-height: 10.89px;
  font-weight: 500;
}
</style>
