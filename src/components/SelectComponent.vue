<template>
  <main class="main">
    <div @click="toggleSelect" class="select">
      <p class="label">
        {{ label }}:
        <span class="value">{{
          Array.isArray(value)
            ? value.length > 1
              ? "Multiple Selected"
              : ""
            : value
        }}</span>
      </p>

      <div class="caret">
        <img :src="isSelect ? caretup : caretdown" alt="" />
      </div>

      <div v-show="isSelect && !multi" class="dropdown">
        <div
          v-for="opt in options"
          :key="opt"
          :class="value === opt ? 'active' : undefined"
          class="dropdown-item"
          @click="updateValue(opt)"
        >
          {{ opt }}
        </div>
      </div>

      <div v-show="isSelect && multi" class="dropdown">
        <div
          v-for="opt in options"
          :key="opt"
          :class="value === opt ? 'active' : undefined"
          class="dropdown-item"
          @click="updateValue(opt)"
        >
          <div v-for="(value, key) in opt" :key="key">
            <p class="multi-cat">{{ key }}</p>

            <div class="sub-options"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import caretdown from "../assets/caret-down.svg";
import caretup from "../assets/caret-up.svg";

const props = defineProps({
  label: { type: String },
  value: { type: [String, Array] },
  options: { type: Array },
  multi: { type: Boolean },
});
const emit = defineEmits(["update"]);
const isSelect = ref(false);

const toggleSelect = () => {
  isSelect.value = !isSelect.value;
};

function updateValue(opt) {
  if (opt && typeof opt === "string") {
    emit("update", opt);
  }
}
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
  text-transform: capitalize;
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

.multi-cat {
  font-size: 12px;
  color: #9098a3;
  line-height: 14.52px;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
