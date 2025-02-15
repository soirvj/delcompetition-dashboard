<template>
  <div class="sidebar">
    <div class="logo">
      <h2>My App</h2>
    </div>
    <Menu :model="items" />
  </div>
</template>

<script>
import Menu from 'primevue/menu';

export default {
  components: {
    Menu,
  },
  data() {
    return {
      items: [
        {
          label: 'Dashboard',
          icon: 'pi pi-home',
          to: '/dashboard',
        },
        {
          label: 'Transfer',
          icon: 'pi pi-money-bill',
          to: '/transfer',
        },
        {
          label: 'Bank Statement',
          icon: 'pi pi-file',
          to: '/bankstatement',
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #f4f4f4;
  border-right: 1px solid #ddd;
}

.logo {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
</style>