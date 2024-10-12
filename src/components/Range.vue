<template>
  <div v-if="plain" class="main">
    <input
      type="range"
      :value="value || value == 0 ? value : modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :min="min"
      :max="max"
      :disabled="disabled"
      class="custom-style range"
    />
    <p class="rangenum">45%</p>
  </div>
  <div v-else>
    <!-- <input
      type="range"
      :value="value || value == 0 ? value : modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :min="min"
      :max="max"
      :disabled="disabled"
      class="range w-full bg-white rounded-full cursor-pointer"
    /> -->
    <div class="progress-bar">
      <div class="progress-fill"></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number],
    default: undefined,
  },
  max: {
    type: [String, Number],
    default: 100,
  },
  min: {
    type: [String, Number],
    default: 0,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "#587D76",
  },
  endColor: {
    type: String,
    default: "#D9EBCD",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  baseColor: {
    type: String,
  },
  baseEndColor: {
    type: String,
  },
});

defineEmits(["update:modelValue"]);

const rangeWidth = computed(() => {
  const value = props.value ? props.value : props.modelValue;
  const percentage = (value * 100) / Number(props.max);

  return `${percentage}%`;
});

const rangeColor = computed(() => {
  return props.color;
});

const rangeEndColor = computed(() => {
  return props.endColor;
});

const rangeBaseColor = computed(() => {
  return props.baseColor;
});

const rangeBaseEndColor = computed(() => {
  return props.baseEndColor;
});
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
}
.range {
  -webkit-appearance: none;
  background-image: linear-gradient(v-bind(rangeColor), v-bind(rangeEndColor));
  /* background-image: linear-gradient(var(--rangeColor), var(--rangeEndColor)); */
  background-size: v-bind(rangeWidth) 100%;
  background-repeat: no-repeat;
  height: 8px;
  border-radius: 4px;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.042);
  background: #fff;
  display: none;
}
.rangenum {
  font-size: 0.75rem; /* text-xs */
  position: absolute; /* absolute */
  top: 0; /* top-0 */
  left: 25%; /* left-1/4 */
  color: white; /* text-white */
  margin-top: 0.125rem; /* mt-0.5 */
}

.progress-bar {
  height: 10px;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.progress-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right,
    v-bind(rangeBaseColor),
    v-bind(rangeBaseEndColor)
  ); /* Background color for the empty portion */
  opacity: 20%; /* Set opacity on the pseudo-element */
  z-index: 1; /* Ensure it sits behind the progress-fill */
  border-radius: inherit;
}

.progress-fill {
  height: 100%;
  background-image: linear-gradient(v-bind(rangeColor), v-bind(rangeEndColor));
  width: v-bind(rangeWidth); /* Progress width */
  border-radius: inherit;
  position: relative;
  z-index: 2; /* Make sure progress-fill is above the background */
}

.custom-style {
  display: flex;
  height: 20px;
  /* padding-right: 521.148px; */
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid var(--Shades-100, #e7eceb);
  background-color: white;
  width: 100%;
  cursor: pointer;
  border-radius: 50%;

  /* background: #fff; */
}
</style>
