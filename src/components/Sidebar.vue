<template>
  <aside class="sidebar">
    <div class="logo">
      <img src="../assets/tesla-logo.png" loading="lazy" alt="Tesla Logo" />
    </div>
    <nav class="nav">
      <ul>
        <li class="active"><reports :active="true" /> Reports</li>
        <li><library /> Library</li>
        <li><people /> People</li>
        <li><activities /> Activities</li>
      </ul>
      <p>Support</p>
      <ul>
        <li><getstarted /> Get Started</li>
        <li><settings /> Settings</li>
      </ul>
    </nav>

    <div class="profile">
      <hr class="line" />

      <Avatar :profilepic="profilepic" />
      <p>Sam Wheeler</p>
      <span>samwheeler@example.com</span>
    </div>
  </aside>
</template>
<script setup>
import library from "./vectors/library.vue";
import reports from "./vectors/reports.vue";
import people from "./vectors/people.vue";
import Avatar from "./Avatar.vue";

import activities from "./vectors/activities.vue";
import getstarted from "./vectors/getstarted.vue";
import settings from "./vectors/activities.vue";

import profilepic from "../assets/photo.png"; //load dynamically to simulate image from api
</script>

<style scoped>
/* Sidebar */
.sidebar {
  width: 246px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.05);
}

.logo {
  display: flex;
  justify-content: center;
}

.logo img {
  width: 100px;
  height: auto;
  margin-bottom: 40px;
}

.nav ul {
  list-style: none;
}

.nav ul li {
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
}

.nav ul li:hover {
  background-color: #f0f4ff;
  background: rgba(27, 89, 248, 0.1);
  color: #1b59f8;
}

.nav ul li.active {
  background-color: #e8f0fe;
  background: rgba(27, 89, 248, 0.1);
  color: #1b59f8;

  font-weight: 600;
}

/* Support Section */
.nav p {
  margin-top: 50px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  line-height: 20px;
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 24px;
}

/* Profile Section */
.profile {
  margin-top: 5px;
  padding: 20px;
  border-radius: 12px;
  text-align: left;
}

.profile p {
  font-weight: 600;
  color: #000;
  margin-bottom: 0px;
  font-size: 14px;
  line-height: 16px;
}

.profile span {
  color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  /* line-height: 14px; */
}
.line {
  background-color: #e5e5e5;
  margin: 30px 0;
}
</style>
