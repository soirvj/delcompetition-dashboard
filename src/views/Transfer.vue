<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
      <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Internal Transfer
          </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="handleSubmit">
          <div>
            <label for="account-number" class="block text-sm font-medium text-gray-700 mb-1">
              Número da conta bancária
            </label>
            <InputText
              id="account-number"
              v-model="accountNumber"
              placeholder="Enter bank account number"
              :class="{ 'p-invalid': error }"
              class="w-full"
              @input="fetchAccountDetails"
            />
            <small v-if="error" class="p-error">{{ error }}</small>
          </div>
          <div>
            <label for="document" class="block text-sm font-medium text-gray-700 mb-1">
              Documento do titular
            </label>
            <InputText
              id="document"
              v-model="document"
              placeholder="Document number"
              class="w-full"
              readonly
            />
          </div>
          <div>
            <label for="bank-code" class="block text-sm font-medium text-gray-700 mb-1">
              Código do banco
            </label>
            <InputText
              id="bank-code"
              v-model="bankCode"
              placeholder="Bank code"
              class="w-full"
              readonly
            />
          </div>
          <div>
            <label for="branch" class="block text-sm font-medium text-gray-700 mb-1">
              Agência
            </label>
            <InputText
              id="branch"
              v-model="branch"
              placeholder="Branch number"
              class="w-full"
              readonly
            />
          </div>
          <div>
            <Button
              type="submit"
              label="Transferir"
              class="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import InputText from 'primevue/inputtext';
  import Button from 'primevue/button';
  import { useToast } from 'primevue/usetoast';
  
  const accountNumber = ref('');
  const document = ref('');
  const bankCode = ref('');
  const branch = ref('');
  const error = ref('');
  const toast = useToast();
  const router = useRouter();
  
  const fetchAccountDetails = () => {
    // Simulate fetching account details from an API
    if (accountNumber.value.length === 5) { // Assuming a 10-digit account number
      // In a real application, you would make an API call here
      setTimeout(() => {
        document.value = '123.456.789-00'; // Simulated document number
        bankCode.value = '001'; // Simulated bank code
        branch.value = '0001'; // Simulated branch number
      }, 500); // Simulate API delay
    } else {
      document.value = '';
      bankCode.value = '';
      branch.value = '';
    }
  };
  
  const handleSubmit = () => {
    if (!/^\d{10}$/.test(accountNumber.value)) {
      error.value = 'Account number must be 10 digits.';
      toast.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Account number must be 10 digits.',
        life: 3000,
      });
      return;
    }
  
    if (!document.value || !bankCode.value || !branch.value) {
      error.value = 'Please enter a valid account number to auto-fill details.';
      toast.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please enter a valid account number to auto-fill details.',
        life: 3000,
      });
      return;
    }
  
    // Simulate a successful transfer
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Transfer initiated successfully!',
      life: 3000,
    });
  
    console.log('Transferring to account:', accountNumber.value);
    error.value = '';
  
    // Redirect to the Dashboard page
    router.push({ name: 'Dashboard' });
  };
  </script>
  
  <style scoped>
  .min-h-screen {
    margin-top: 18rem;
  }

  
  .max-w-md {
    max-width: 28rem;
  }
  
  .w-full {
    width: 100%;
  }
  
  .space-y-8 > * + * {
    margin-top: 2rem;
  }
  
  .p-8 {
    padding: 2rem;
  }
  
  .bg-white {
    background-color: #ffffff;
  }
  
  .rounded-xl {
    border-radius: 1rem;
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .text-center {
    text-align: center;
  }
  
  .text-3xl {
    font-size: 1.875rem;
  }
  
  .font-extrabold {
    font-weight: 800;
  }
  
  .text-gray-900 {
    color: #1a202c;
  }
  
  .mt-6 {
    margin-top: 1.5rem;
  }
  
  .mt-8 {
    margin-top: 2rem;
  }
  
  .space-y-6 > * + * {
    margin-top: 1.5rem;
  }
  
  .block {
    display: block;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
  
  .font-medium {
    font-weight: 500;
  }
  
  .text-gray-700 {
    color: #4a5568;
  }
  
  .mb-1 {
    margin-bottom: 0.25rem;
  }
  
  .p-error {
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
  </style>