import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { httpInterceptor } from './services/http-interceptor';
import 'bulma/css/bulma.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/soft-design-system.css?v=1.0.9';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
library.add(faFacebook);
library.add(faInstagram);
library.add(faTwitter);
library.add(faGithub);

import PrimeVueToastService from './services/prime-vue-toast-service';

httpInterceptor();

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('p-datatable', DataTable)
  .component('p-column', Column)
  /* PrimeVue Toast Service is a wrapper around PrimeVue Toast component.
  It is a plugin that can be used in any component */
  .use(PrimeVueToastService)
  .use(store)
  .use(router)
  .mount('#app')

