<template>
    <div class="bank-statement">
      <header>
        <h1>Bank Statement</h1>
        <p>Account: {{ accountNumber }}</p>
        <p>Statement Period: {{ statementPeriod }}</p>
      </header>
  
      <section class="summary">
        <div class="summary-item">
          <h2>Opening Balance</h2>
          <p>{{ formatCurrency(openingBalance) }}</p>
        </div>
        <div class="summary-item">
          <h2>Closing Balance</h2>
          <p>{{ formatCurrency(closingBalance) }}</p>
        </div>
        <div class="summary-item">
          <h2>Total Credits</h2>
          <p class="credit">{{ formatCurrency(totalCredits) }}</p>
        </div>
        <div class="summary-item">
          <h2>Total Debits</h2>
          <p class="debit">{{ formatCurrency(totalDebits) }}</p>
        </div>
      </section>
  
      <section class="transactions">
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
              <td>{{ formatDate(transaction.date) }}</td>
              <td>{{ transaction.description }}</td>
              <td :class="{ 'credit': transaction.amount > 0, 'debit': transaction.amount < 0 }">
                {{ formatCurrency(transaction.amount) }}
              </td>
              <td>{{ formatCurrency(transaction.balance) }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  // These would typically come from your state management or props
  const accountNumber = ref('');
  const statementPeriod = ref('');
  const openingBalance = ref(0);
  const closingBalance = ref(0);
  const totalCredits = ref(0);
  const totalDebits = ref(0);
  const transactions = ref([]);
  
  // Simulated service call
  const fetchBankStatement = async () => {
    // In a real application, this would be an API call
    // For this example, we'll use setTimeout to simulate an async operation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          accountNumber: '1234567890',
          statementPeriod: 'May 1, 2023 - May 31, 2023',
          openingBalance: 5000,
          closingBalance: 5500,
          totalCredits: 2000,
          totalDebits: -1500,
          transactions: [
            { id: 1, date: '2023-05-02', description: 'Salary Deposit', amount: 2000, balance: 7000 },
            { id: 2, date: '2023-05-05', description: 'Grocery Shopping', amount: -150, balance: 6850 },
            { id: 3, date: '2023-05-10', description: 'Utility Bill', amount: -200, balance: 6650 },
            { id: 4, date: '2023-05-15', description: 'Restaurant', amount: -80, balance: 6570 },
            { id: 5, date: '2023-05-20', description: 'Online Purchase', amount: -120, balance: 6450 },
            { id: 6, date: '2023-05-25', description: 'ATM Withdrawal', amount: -100, balance: 6350 },
            { id: 7, date: '2023-05-31', description: 'Interest Credit', amount: 50, balance: 6400 },
          ]
        });
      }, 1000); // Simulate 1 second delay
    });
  };
  
  onMounted(async () => {
    const data = await fetchBankStatement();
    accountNumber.value = data.accountNumber;
    statementPeriod.value = data.statementPeriod;
    openingBalance.value = data.openingBalance;
    closingBalance.value = data.closingBalance;
    totalCredits.value = data.totalCredits;
    totalDebits.value = data.totalDebits;
    transactions.value = data.transactions;
  });
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };
  </script>
  
  <style scoped>
  .bank-statement {
    font-family: Arial, sans-serif;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    margin-right: -34px;
  }
  
  header {
    margin-bottom: 30px;
  }
  
  h1 {
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 10px;
  }
  
  h2 {
    color: #34495e;
    font-size: 18px;
    margin-bottom: 5px;
  }
  
  .summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }
  
  .summary-item {
    background-color: #ffffff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .summary-item p {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
  }
  
  .transactions {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
    padding: 12px;
    border-bottom: 1px solid #e0e0e0;
  }
  
  th {
    background-color: #f1f3f5;
    font-weight: bold;
    color: #2c3e50;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  .credit {
    color: #27ae60;
  }
  
  .debit {
    color: #e74c3c;
  }
  
  @media (max-width: 768px) {
    .summary {
      grid-template-columns: 1fr 1fr;
    }
  
    table, thead, tbody, th, td, tr {
      display: block;
    }
  
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  
    tr {
      margin-bottom: 15px;
    }
  
    td {
      border: none;
      position: relative;
      padding-left: 50%;
    }
  
    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      content: attr(data-label);
      font-weight: bold;
    }
  }
  </style>