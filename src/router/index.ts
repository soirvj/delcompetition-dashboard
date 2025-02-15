import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/Login.vue';
import DashboardView from '@/views/DashboardView.vue';
import TransferView from '@/views/Transfer.vue';
import BankStatementView from '@/views/BankStatement.vue';
import TransactionConfirmationView from '@/views/TransactionConfirmation.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: TransferView,
  },
  {
    path: '/bankstatement',
    name: 'BankStatement',
    component: BankStatementView,
  },
  {
    path: '/confirmation',
    name: 'Confirmation',
    component: TransactionConfirmationView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;