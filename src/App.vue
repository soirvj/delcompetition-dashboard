<template>
  <div>
    <!-- Header with Toggle Button -->
    <header class="p-d-flex p-ai-center p-p-3" style="background-color: var(--surface-a); border-bottom: 1px solid var(--surface-d);">
      <Button icon="pi pi-bars" @click="toggleSidebar" class="p-mr-2" />
      <h2>Menu</h2>
    </header>

    <!-- Sidebar Component -->
    <Sidebar v-model:visible="sidebarVisible" />

    <!-- Layout Container -->
    <div class="layout-container" :style="{ marginLeft: sidebarVisible ? '250px' : '0' }">
      <!-- Main Content -->
      <main class="p-p-3">
        <RouterView />
      </main>
    </div>

    <!-- Toast Component -->
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue'; // Adjust the path as needed
import Toast from 'primevue/toast';
import Button from 'primevue/button';

const sidebarVisible = ref(true);

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
</script>

<style>
body {
  margin: 0;
}

.layout-container {
  transition: margin-left 0.3s;
}

main {
  background-color: var(--surface-ground);
}
</style>