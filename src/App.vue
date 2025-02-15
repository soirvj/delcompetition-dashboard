<template>
  <div>
    <Sidebar />
    <div class="layout-container">

      <main class="p-p-3">
        <RouterView />
      </main>
    </div>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';
import { RouterView } from 'vue-router';
import Toast from 'primevue/toast';   
const sidebarVisible = ref(false);

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
</script>

<style>
body {
  margin: 0;
}
.layout-container {
  margin-left: 250px; /* Adjust based on sidebar width */
  transition: margin-left 0.3s;
}

header {
  background-color: var(--surface-a);
  border-bottom: 1px solid var(--surface-d);
}

main {
  background-color: var(--surface-ground);
}
</style>