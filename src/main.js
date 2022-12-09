import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import router from './routing/index.js'
import PrimeVue from 'primevue/config';
import FileUpload from 'primevue/fileupload';
import ToastService from 'primevue/toastservice';
import Toast from 'primevue/toast';
import Button from "primevue/button";

import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

createApp(App)

.component('FileUpload',FileUpload)
.component('Toast',Toast)
.component("Button", Button)
.use(PrimeVue)
.use(ToastService)
.use(router)

.mount('#app')
