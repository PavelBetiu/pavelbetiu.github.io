import { IToastService } from './toast-service.interface';

export class PrimeVueToastService implements IToastService {
    toast: any;
    INFINITE = -1;
    DEFAULT = 6000;
    
    constructor(app: any) {
        this.toast = app.config.globalProperties.$toast;
    }

    success(message: string, title?: string, millis?: number): void {
        let life: any = this.DEFAULT;

        if (millis) {
            life = millis == this.INFINITE ? null : millis;
        }

        this.toast.add({ severity: 'success', summary: title, detail: message, life: life });
    }

    error(message: string, title?: string, millis?: number): void {
        let life: any = this.DEFAULT;

        if (millis) {
            life = millis == this.INFINITE ? null : millis;
        }

        this.toast.add({ severity: 'error', summary: title, detail: message, life: life });
    }

    info(message: string, title?: string, millis?: number): void {
        let life: any = this.DEFAULT;

        if (millis) {
            life = millis == this.INFINITE ? null : millis;
        }

        this.toast.add({ severity: 'info', summary: title, detail: message, life: life });
    }
}