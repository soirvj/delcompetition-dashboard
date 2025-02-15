import './assets/main.css'
import PrimeVue from 'primevue/config';
import Button from "primevue/button"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from './router'
import ToastService from 'primevue/toastservice';

const app = createApp(App)
app.component('Button', Button);

app.use(PrimeVue, {
    theme: {
        preset: {
            ...Aura,
            semantic: {
                ...Aura.semantic,
                primary: {
                    50: '{sky.50}',
                    100: '#5C7ED4',
                    200: '#4C6AB7',
                    300: '#3C568A',
                    400: '#2D457D',
                    500: '#1E3799',
                    600: '#172D7A',
                    700: '#102457',
                    800: '#0A1A3D',
                    900: '#050F1A',
                }
            }
        },
        options: {
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
});
app.use(ToastService);
app.use(createPinia())
app.use(router)
app.mount('#app')
