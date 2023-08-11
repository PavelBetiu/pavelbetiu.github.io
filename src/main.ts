import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';


import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import TieredMenu from 'primevue/tieredmenu';

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Checkbox from "primevue/checkbox"
import ProgressSpinner from 'primevue/progressspinner';

import Avatar from 'primevue/avatar';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import { httpInterceptor } from './services/http-interceptor';
import 'bulma/css/bulma.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/soft-design-system.css?v=1.0.9';

/* Required imports for PrimeVue Toast */
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import '@recogito/recogito-js/dist/recogito.min.css';
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
  .component('p-checkbox', Checkbox)
  .component('p-progress-spinner', ProgressSpinner)
  .component('Button', Button)
  .component('FileUpload', FileUpload)
  .component('TieredMenu', TieredMenu)
  .component('Avatar', Avatar)
  .component('Textarea', Textarea)

  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('Dropdown', Dropdown)

  // Required for PrimeVue Toast
  .component('Toast', Toast)
  .use(PrimeVue)
  .use(ToastService)

  .use(store)
  .use(router)
  .mount('#app');
