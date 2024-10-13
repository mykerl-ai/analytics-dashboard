<template>
  <aside :class="{ sidebar: true, active: isOpen }">
    <div class="logo">
      <img src="../assets/tesla-logo.png" loading="lazy" alt="Tesla Logo" />
    </div>

    <nav class="nav">
      <ul>
        <li>
          <router-link to="/report" :class="{ active: isActive('/report') }">
            <reports :active="isActive('/report')" /> Reports
          </router-link>
        </li>
        <li>
          <router-link to="/library" :class="{ active: isActive('/library') }">
            <library :active="isActive('/library')" /> Library
          </router-link>
        </li>
        <li>
          <router-link to="/people" :class="{ active: isActive('/people') }">
            <people :active="isActive('/people')" /> People
          </router-link>
        </li>
        <li>
          <router-link
            to="/activities"
            :class="{ active: isActive('/activities') }"
          >
            <activities :active="isActive('/activities')" /> Activities
          </router-link>
        </li>
      </ul>
      <p>Support</p>
      <ul>
        <li>
          <router-link
            to="/get-started"
            :class="{ active: isActive('/get-started') }"
          >
            <getstarted :active="isActive('/get-started')" /> Get Started
          </router-link>
        </li>
        <li>
          <router-link
            to="/settings"
            :class="{ active: isActive('/settings') }"
          >
            <settings :active="isActive('/settings')" /> Settings
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="profile">
      <hr class="line" />
      <Avatar :profilepic="profilepic" />
      <p>Sam Wheeler</p>
      <span>samwheeler@example.com</span>
    </div>

    <!-- Mobile Toggle Button -->
    <button class="menu-toggle" @click="toggleSidebar">
      <img src="../assets/menu-icon.svg" alt="Menu Toggle" />
    </button>
  </aside>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import library from "./vectors/library.vue";
import reports from "./vectors/reports.vue";
import people from "./vectors/people.vue";
import Avatar from "./Avatar.vue";
import activities from "./vectors/activities.vue";
import getstarted from "./vectors/getstarted.vue";
import settings from "./vectors/settings.vue";

import profilepic from "../assets/photo.png"; // load dynamically

// Manage sidebar state for mobile responsiveness
const isOpen = ref(false);

// Method to toggle sidebar visibility
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};

// Router hook to get the current route
const route = useRoute();

// Method to check if a route is active
const isActive = (path: string) => route.path === path;
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
  transition: transform 0.3s ease-in-out;
}

.sidebar.active {
  transform: translateX(0);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
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
  padding-left: 0;
}

.nav ul li a {
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

.nav ul li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.nav ul li a:hover {
  background-color: rgba(27, 89, 248, 0.1);
  color: #1b59f8;
}

.active {
  background-color: rgba(27, 89, 248, 0.1);
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
}

/* Divider line */
.line {
  background-color: #e5e5e5;
  margin: 30px 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1000;
    transform: translateX(-100%);
  }

  .sidebar.active {
    transform: translateX(0);
  }

  .menu-toggle {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
  }

  .nav ul li {
    padding: 10px 15px;
  }
}
</style>
