<template>
  <main class="main">
    <div @click="toggleSelect" class="select">
      <p class="label">
        {{ label }}: <span class="value">{{ value }}</span>
      </p>

      <div class="caret">
        <img :src="isSelect ? caretup : caretdown" alt="" />
      </div>

      <div v-show="isSelect" class="dropdown">
        <div
          v-for="opt in options"
          :key="opt"
          :class="selected === opt ? 'active' : undefined"
          class="dropdown-item"
        >
          {{ opt }}
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import caretdown from "../assets/caret-down.svg";
import caretup from "../assets/caret-up.svg";

const props = defineProps({ label: { type: String }, value: { type: String } });
const isSelect = ref(false);
const selected = ref("This Month");
const options = ref(["Last 7 Days", "This Month", "This Year ", "Custom"]);

const toggleSelect = () => {
  isSelect.value = !isSelect.value;
};
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
}
.select {
  z-index: 2;
  position: absolute;
  top: 0;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #eff0f6;
  padding: 10px 15px;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  justify-items: end;
  align-items: center;
  row-gap: 12px;
  width: 356px;
  box-shadow: 0px 5px 20px 0px #0000000d;
  cursor: pointer;
}

.label {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #1a1a21;
  width: 90%;
}

.value {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000;
}

.dropdown {
  border-top: 1px solid #eff0f6;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.dropdown-item {
  padding: 16px;
  border-radius: 11px;
  color: #000;
  font-size: 14px;
  line-height: 18px;
}

.dropdown-item:hover {
  background-color: #f2f7ff;
}

.active {
  background-color: #f2f7ff;
  font-weight: 600;
}
</style>
