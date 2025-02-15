<template>
  <Sidebar class="custom-sidebar">

    <nav class="sidebar-nav">
      <ul class="p-list-none p-p-0 menu-list">
        <li>
          <RouterLink to="/dashboard" class="menu-item" active-class="active">
            <span class="menu-icon pi pi-home"></span>
            <span class="menu-text">Dashboard</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/transfer" class="menu-item" active-class="active">
            <span class="menu-icon pi pi-money-bill"></span>
            <span class="menu-text">Transfer</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/bankstatement" class="menu-item" active-class="active">
            <span class="menu-icon pi pi-file"></span>
            <span class="menu-text">Bank Statement</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </Sidebar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from 'primevue/sidebar';

const visible = ref(true); // Control sidebar visibility
</script>

<style scoped>
.custom-sidebar {
  background-color: #f8f9fa;
  border-right: 1px solid #e9ecef;
}





.menu-list {
  padding-bottom: 35rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: #495057;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
}

.menu-item:hover {
  background-color: #e9ecef;
  color: #1e88e5;
}

.menu-item.active {
  background-color: #e3f2fd;
  color: #1e88e5;
  font-weight: 600;
}

.menu-icon {
  margin-right: 1rem;
  font-size: 1.2rem;
}

.menu-text {
  font-size: 1rem;
}

/* PrimeVue Sidebar Overrides */
:deep(.p-sidebar) {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

:deep(.p-sidebar-header) {
  padding: 0;
}

:deep(.p-sidebar-content) {
  padding: 0;
}
</style>