import PrimeVue from 'primevue/config';
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import { IToastService } from './toast-service.interface';

class PrimeVueToastService implements IToastService {
    toast: any;
    
    constructor(app: any) {
        this.toast = app.config.globalProperties.$toast;
    }

    success(message: string, title?: string): void {
        this.toast.add({ severity: 'success', summary: title, detail: message, life: 3000 });
    }

    error(message: string, title?: string): void {
        this.toast.add({ severity: 'error', summary: title, detail: message, life: 3000 });
    }

    info(message: string, title?: string): void {
        this.toast.add({ severity: 'info', summary: title, detail: message, life: 3000 });
    }
}

export default {
    install: (app, options) => {
        app.component('Toast', Toast)
            .use(PrimeVue)
            .use(ToastService)
            .provide('TOAST_SERVICE', new PrimeVueToastService(app));
    },
};