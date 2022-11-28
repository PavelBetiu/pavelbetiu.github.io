import axios from 'axios';
import { CsclResult } from "@/data-objects/cscl-result";
import { ICsclService, ProcessOptions } from "./cscl-service.interface";

export class CsclService implements ICsclService {

  public async process(options: ProcessOptions): Promise<CsclResult> {
    const data = new FormData();
    data.append('lang', options.language);
    data.append('file', options.file);
    const result = await axios.post('/services/cscl', data);
    return result.data;
  }

}
