import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bulma/css/bulma.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/soft-design-system.css?v=1.0.9';
import './assets/js/font-awesome.js';

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
