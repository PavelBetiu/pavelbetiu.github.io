import axios from "axios";
import { IQGenService, QGenAnswersRequest, QGenTestRequest } from "./qgen-service.interface";
import { QGenAnswersResponse, QGenTestResponse } from "@/data-objects/qgen-dtos";

export class QGenService implements IQGenService {
    getAnswers(request: QGenAnswersRequest): Promise<QGenAnswersResponse> {
        return axios.post('/services/qgen/answers', request)
    }
    getTest(request: QGenTestRequest): Promise<QGenTestResponse> {
        return axios.post('/services/qgen/test', request)
    }
}