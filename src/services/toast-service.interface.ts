export interface IToastService {
    success(message: string, title?: string): void;
    error(message: string, title?: string): void;
    info(message: string, title?: string): void;
}