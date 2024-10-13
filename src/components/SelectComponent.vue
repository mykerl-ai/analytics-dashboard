<template>
  <main class="main">
    <div @click.self="toggleSelect" class="select">
      <p @click="toggleSelect" class="label">
        {{ label }}:
        <span class="value">{{
          Array.isArray(value)
            ? value.length > 1
              ? "Multiple Selected"
              : value[0]
            : value
        }}</span>
      </p>

      <div class="caret">
        <img
          :class="isSelect && multi ? 'hidden' : undefined"
          :src="isSelect ? caretup : caretdown"
          alt=""
        />
        <button
          @click="clearValue"
          v-show="multi && isSelect"
          role="clear"
          name="clear-btn"
          class="clear-btn"
        >
          Clear
        </button>
      </div>

      <div v-if="isSelect && !multi" class="dropdown">
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

      <div v-else-if="isSelect && multi" class="dropdown">
        <div class="list-flex">
          <div v-for="item in multiValue" :key="item" class="list-selection">
            <p>{{ item }}</p>
            <button @click="removeSingle(item)">
              <img src="../assets/clear-icon.svg" alt="" />
            </button>
          </div>
        </div>
        <div v-for="opt in options" :key="opt">
          <div v-for="(value, key) in opt" :key="key">
            <p class="multi-cat">{{ key }}</p>

            <div
              v-for="sub in value"
              :key="sub"
              class="sub-options multidropdown-item"
            >
              <div class="opt-flex">
                <label class="custom-checkbox">
                  <input
                    @change="updateValue(sub)"
                    :checked="multiValue.includes(sub)"
                    type="checkbox"
                  />
                  <span class="checkmark"></span>
                </label>

                <p>{{ sub }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      @click="isSelect = false"
      :class="!isSelect ? 'pointer-events-none' : ''"
      class="backdrop"
    ></div>
  </main>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import caretdown from "../assets/caret-down.svg";
import caretup from "../assets/caret-up.svg";

// Define props with TypeScript types
const props = defineProps<{
  label: string;
  value: string | string[];
  options: string[];
  multi: boolean;
}>();

const emit = defineEmits<{
  (e: "update", value: string | string[]): void;
}>();

const isSelect = ref(false);
const multiValue = ref<string[]>([]);

const toggleSelect = () => {
  isSelect.value = !isSelect.value;
};

function updateValue(opt: string) {
  if (opt && typeof opt === "string" && !props.multi) {
    isSelect.value = !isSelect.value;
    emit("update", opt);
  } else if (props.multi && opt && typeof opt === "string") {
    const index = multiValue.value.indexOf(opt);
    if (index > -1) {
      multiValue.value.splice(index, 1);
    } else {
      multiValue.value.push(opt);
      emit("update", multiValue.value);
    }
  }
}

function clearValue() {
  multiValue.value = [];
  emit("update", multiValue.value);
}

function removeSingle(item: string) {
  const index = multiValue.value.indexOf(item);
  if (index > -1) {
    multiValue.value.splice(index, 1);
  }
  emit("update", multiValue.value);
}
</script>

<style scoped>
.main {
  position: relative;
  width: 100%;
}

.pointer-events-none {
  pointer-events: none;
}

.backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: transparent;
  z-index: 1;
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

.multidropdown-item {
  padding: 10px 16px 10px 0;
  border-radius: 11px;
  color: #000;
  font-size: 14px;
  line-height: 18px;
}

.hasBorder {
  border-top: 1px solid #eff0f6;
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
  margin-top: 14px;
  margin-bottom: 10px;
}

.sub-options {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.opt-flex {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Hide the native checkbox */
.custom-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Custom checkbox container */
.custom-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

/* Create a custom circular checkbox look */
.custom-checkbox .checkmark {
  width: 20px;
  height: 20px;
  border: 3px solid #dadada; /* Blue border (outer ring) */
  border-radius: 50%; /* Makes it circular */
  background-color: transparent; /* Hollow center */
  display: inline-block;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Style for when the checkbox is checked */
.custom-checkbox input:checked + .checkmark {
  background-color: #fff; /* Blue fill when checked */
  border-color: #c8dbff; /* Blue border */
}

/* Optional: Add a checkmark inside when checked */
.custom-checkbox .checkmark::after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked + .checkmark::after {
  display: block;
  top: 2.5px;
  left: 2.5px;
  width: 10px;
  height: 10px;
  background-color: #1b59f8;
  border-radius: 50%; /* White dot in the center */
}
.hidden {
  display: none;
}
.clear-btn {
  position: absolute;
  right: 0;
  margin-right: 20px;
  background: none;
  border: none;
  font-size: 14px;
  line-height: 16.94px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
  width: auto;
  height: auto;
  margin-top: -8px;
}

.list-flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px 0;
}
.list-selection {
  background: #f0f0f0;
  border-radius: 15.5px;
  padding: 8px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
}

.list-selection p {
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #000;
}

.list-selection button {
  background: none;
  border: none;
}
</style>
