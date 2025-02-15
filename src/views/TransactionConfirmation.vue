<template>
    <div class="transaction-confirmation">
      <div class="confirmation-card">
        <div class="status-icon">
          <i class="pi pi-check-circle"></i>
        </div>
        <h1>Transfer Successful</h1>
        <div class="transaction-details">
          <div class="detail-item">
            <span class="label">Amount:</span>
            <span class="value">{{ formatCurrency(amount) }}</span>
          </div>
          <div class="detail-item">
            <span class="label">From Account:</span>
            <span class="value">{{ fromAccount }}</span>
          </div>
          <div class="detail-item">
            <span class="label">To Account:</span>
            <span class="value">{{ toAccount }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Recipient Name:</span>
            <span class="value">{{ recipientName }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Bank:</span>
            <span class="value">{{ bankName }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Transaction ID:</span>
            <span class="value">{{ transactionId }}</span>
          </div>
          <div class="detail-item">
            <span class="label">Date & Time:</span>
            <span class="value">{{ formatDateTime(transactionDate) }}</span>
          </div>
        </div>
        <div class="actions">
          <Button label="Back to Dashboard" @click="goToDashboard" class="p-button-secondary" />
          <Button label="New Transfer" @click="newTransfer" class="p-button-primary" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import Button from 'primevue/button';
  
  const router = useRouter();
  
  // Sample data - in a real app, this would come from your state management or route params
  const amount = ref(1000.00);
  const fromAccount = ref('**** 1234');
  const toAccount = ref('**** 5678');
  const recipientName = ref('John Doe');
  const bankName = ref('Example Bank');
  const transactionId = ref('TRX123456789');
  const transactionDate = ref(new Date());
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
  };
  
  const formatDateTime = (date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(date);
  };
  
  const goToDashboard = () => {
    router.push({ name: 'Dashboard' });
  };
  
  const newTransfer = () => {
    router.push({ name: 'Transfer' });
  };
  </script>
  
  <style scoped>
  .transaction-confirmation {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f0f2f5;
    font-family: Arial, sans-serif;
  }
  
  .confirmation-card {
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    width: 100%;
    max-width: 500px;
    text-align: center;
  }
  
  .status-icon {
    font-size: 4rem;
    color: #4caf50;
    margin-bottom: 1rem;
  }
  
  h1 {
    color: #333;
    margin-bottom: 2rem;
  }
  
  .transaction-details {
    text-align: left;
    margin-bottom: 2rem;
  }
  
  .detail-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }
  
  .detail-item:last-child {
    border-bottom: none;
  }
  
  .label {
    font-weight: bold;
    color: #666;
  }
  
  .value {
    color: #333;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
  
  .actions button {
    flex: 1;
  }
  
  /* PrimeVue Button Overrides */
  :deep(.p-button) {
    border-radius: 8px;
  }
  
  :deep(.p-button-secondary) {
    background-color: #f0f0f0;
    color: #333;
    border: none;
  }
  
  :deep(.p-button-secondary:hover) {
    background-color: #e0e0e0;
  }
  
  :deep(.p-button-primary) {
    background-color: #007bff;
    border: none;
  }
  
  :deep(.p-button-primary:hover) {
    background-color: #0056b3;
  }
  </style>