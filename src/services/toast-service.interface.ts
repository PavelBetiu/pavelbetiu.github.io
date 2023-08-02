import { InjectionKey } from 'vue';

export interface IToastService {
    success(message: string, title?: string, millis?: number): void;
    error(message: string, title?: string, millis?: number): void;
    info(message: string, title?: string, millis?: number): void;
}

export const TOAST_SERVICE: InjectionKey<IToastService> = Symbol('IToastService');