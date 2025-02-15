<template>
  <div class="dashboard">
    <header>
      <h1>Welcome back, User</h1>
      <p>Here's what's happening with your projects today.</p>
    </header>

    <div class="card-grid">
      <!-- Stat Card -->
      <div class="card">
        <h2>Total Users</h2>
        <p class="stat">1,234</p>
        <p class="sub-stat">↑ 12% from last month</p>
      </div>

      <!-- Chart Card -->
      <div class="card">
        <h2>Revenue Overview</h2>
        <div class="chart-placeholder">
          <p>Chart Placeholder</p>
        </div>
      </div>

      <!-- Recent Activity Card -->
      <div class="card">
        <h2>Recent Activity</h2>
        <ul class="activity-list">
          <li v-for="(activity, index) in recentActivities" :key="index">
            <span class="activity-indicator" :style="{ backgroundColor: activity.color }"></span>
            {{ activity.text }}
          </li>
        </ul>
      </div>

      <!-- Progress Card -->
      <div class="card">
        <h2>Project Progress</h2>
        <div class="progress-item">
          <div class="progress-info">
            <span>Website Redesign</span>
            <span>75%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: 75%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const recentActivities = ref([
  { text: 'New user registered', color: '#3B82F6' },
  { text: 'Project "X" completed', color: '#10B981' },
  { text: 'Server maintenance scheduled', color: '#F59E0B' },
])
</script>

<style scoped>
.dashboard {
  font-family: Arial, sans-serif;

  padding: 2rem;
}

header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

header p {
  color: #6b7280;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h2 {
  font-size: 1.25rem;
  color: #374151;
  margin-bottom: 1rem;
}

.stat {
  font-size: 2rem;
  font-weight: bold;
  color: #3B82F6;
}

.sub-stat {
  font-size: 0.875rem;
  color: #6b7280;
  margin-top: 0.5rem;
}

.chart-placeholder {
  background-color: #e5e7eb;
  height: 10rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}

.activity-list {
  list-style-type: none;
  padding: 0;
}

.activity-list li {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.activity-indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.progress-item {
  margin-bottom: 1rem;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.progress-bar {
  background-color: #e5e7eb;
  border-radius: 9999px;
  height: 0.5rem;
  overflow: hidden;
}

.progress-fill {
  background-color: #3B82F6;
  height: 100%;
  border-radius: 9999px;
}
</style>