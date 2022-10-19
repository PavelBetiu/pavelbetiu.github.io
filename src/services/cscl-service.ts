import { CsclResult } from "@/data-objects/cscl-result";
import { ICsclService, ProcessOptions } from "./cscl-service.interface";

export class CsclService implements ICsclService {

  public process(options: ProcessOptions): Promise<CsclResult> {
    // TODO: fetch from API
    return Promise.resolve({
      graph: {
        participants: [],
        edges: [],
      },
      contributions: [],
      participants: {},
    });
  }

}
