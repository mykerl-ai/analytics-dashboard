<template>
  <div class="pagination">
    <button
      :disabled="currentPage === 1"
      @click="prevPage"
      class="pagination-button"
    >
      {{ "<<" }} Prev
    </button>

    <span class="pagination-info">
      Page {{ currentPage }} of {{ totalPages }}
    </span>

    <button
      :disabled="currentPage === totalPages"
      @click="nextPage"
      class="pagination-button"
    >
      Next >>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

// Define props with TypeScript types
const props = defineProps<{
  totalItems: number;
  itemsPerPage?: number; // Optional prop with a default value
}>();

const currentPage = ref(1);
const totalPages = ref(
  Math.ceil(props.totalItems / (props.itemsPerPage || 10))
); // Using a fallback for itemsPerPage

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Watch for changes in totalItems to recalculate totalPages
watch(
  () => props.totalItems,
  (newTotal) => {
    totalPages.value = Math.ceil(newTotal / (props.itemsPerPage || 10));
  }
);
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.pagination-button {
  background-color: rgba(27, 89, 248, 0.1);
  color: #1b59f8;
  font-size: 12px;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pagination-button:disabled {
  background-color: rgba(27, 89, 248, 0.1);
  cursor: not-allowed;
}

.pagination-info {
  font-weight: 600;
  font-size: 12px;
}
</style>
