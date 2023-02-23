import { IToastService } from './toast-service.interface';

export class PrimeVueToastService implements IToastService {
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