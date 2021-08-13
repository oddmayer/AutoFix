import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/js/dist/collapse.js';
import '../node_modules/font-awesome/css/font-awesome.css';


createApp(App).use(store).use(router).mount('#app');
