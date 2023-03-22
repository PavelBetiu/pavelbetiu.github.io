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

/* Required imports for PrimeVue Toast */
import PrimeVue from 'primevue/config';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import TieredMenu from 'primevue/tieredmenu';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';

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

httpInterceptor();

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('p-datatable', DataTable)
  .component('p-column', Column)
  .component('Button', Button)
  .component('TieredMenu', TieredMenu)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('Dropdown', Dropdown)

  // Required for PrimeVue Toast
  .component('Toast', Toast)
  .use(PrimeVue)
  .use(ToastService)

  .use(store)
  .use(router)
  .mount('#app')