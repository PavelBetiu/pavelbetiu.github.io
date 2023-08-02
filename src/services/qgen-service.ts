import axios from "axios";
import { IQGenService, QGenAnswersRequest, QGenTestRequest } from "./qgen-service.interface";
import { QGenAnswersResponse, QGenTestResponse } from "@/data-objects/qgen-dtos";

// TODO: move this to a common place (maybe job-service.ts)
async function getJobResults(id: number) {
    let notDone = true
    let results: any = null

    while (notDone) {
        results = await axios.post(`/services/jobs/${id}`, {}).then((response) => {
            if (response.data.status === 3) {
                notDone = false
                return response.data.results
            } else if (response.data.status === 4) {
                notDone = false
                throw new Error(`Job with id ${id} failed`)
            }
        }).catch((error) => {
            throw error
        })

        await new Promise(resolve => setTimeout(resolve, 5000))
    }

    return results
}

export class QGenService implements IQGenService {
    async getAnswers(request: QGenAnswersRequest): Promise<QGenAnswersResponse> {
        const jobId = await axios.post('/services/qgen/answers', request).then((response) => {
           return response.data.id
        }).catch((error) => {
           throw error
        })

        return await getJobResults(jobId)
    }

    async getTest(request: QGenTestRequest): Promise<QGenTestResponse> {
        const jobId = await axios.post('/services/qgen/test', request).then((response) => {
            return response.data.id
         }).catch((error) => {
            throw error
         })
 
        const tests = await getJobResults(jobId)

        return {
            tests: tests
        }
    }
}