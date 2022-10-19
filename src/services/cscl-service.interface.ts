import { InjectionKey } from 'vue';
import { CsclResult } from '@/data-objects/cscl-result';

export interface ProcessOptions {
  language: string;
  file: File;
}

export interface ICsclService {
  process(options: ProcessOptions): Promise<CsclResult>;
}
export const CSCL_SERVICE: InjectionKey<ICsclService> = Symbol('ICsclService');
