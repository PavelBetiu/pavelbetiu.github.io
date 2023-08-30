import { 
    ITextAnalysisService, 
    RestoreDiacriticsRequest, 
    RestoreDiacriticsResponse, 
    SentimentAnalysisRequest,
    SentimentAnalysisResponse,
    OffensiveLanguageRequest,
    OffensiveLanguageResponse
} from "./text-analysis-service.interface";
import axios from "axios";

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

        await new Promise(resolve => setTimeout(resolve, 1500))
    }

    console.log(results)

    return results
}

export class TextAnalysisService implements ITextAnalysisService {
    async restoreDiacritics(request: RestoreDiacriticsRequest): Promise<RestoreDiacriticsResponse> {        
        const jobId = await axios.post('/services/diacritics', request).then((response) => {
           return response.data.id
        }).catch((error) => {
           throw error
        })

        return {
            text: await getJobResults(jobId)
        }
    }

    async sentimentAnalysis(request: SentimentAnalysisRequest): Promise<SentimentAnalysisResponse> {        
        const jobId = await axios.post('/services/sentiment', request).then((response) => {
           return response.data.id
        }).catch((error) => {
           throw error
        })

        return {
            labels: await getJobResults(jobId)
        }
    }

    async offensiveLanguage(request: OffensiveLanguageRequest): Promise<OffensiveLanguageResponse> {
        const jobId = await axios.post('/services/offensive', request).then((response) => {
           return response.data.id
        }).catch((error) => {
           throw error
        })

        return {
            labels: await getJobResults(jobId)
        }
    }
}