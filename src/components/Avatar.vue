<template>
  <div
    class="avatar"
    :style="{
      backgroundImage: ' url(' + profilepic + ')',
    }"
  >
    <!-- <img :src="profilepic" alt="" /> -->
  </div>
</template>

<script setup>
defineProps(["profilepic"]);
</script>

<style>
.avatar {
  width: 34px;
  height: 34px;
  margin: 5px 0 7px 0;
  border-radius: 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
