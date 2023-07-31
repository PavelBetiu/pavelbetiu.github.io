import { IQGenService, QGenAnswersRequest, QGenTestRequest } from "./qgen-service.interface";
import { QGenAnswersResponse, QGenTestResponse } from "@/data-objects/qgen-dtos";

export class MockQGenService implements IQGenService {
    private readonly test: QGenTestResponse = {
        tests: [
            {
                question: "Where was Alexander Graham Bell born?",
                answer: "Edinburgh",
                distractors: [
                    "Firth of Forth",
                    "Reykjavík",
                    "a small town, in the Scottish Highlands, called Dumfriesshire"
                ]
            },
            {
                question: "In what year did Bell found a school for the deaf?",
                answer: "1872",
                distractors: [
                    "1892",
                    "1876",
                    "1862"
                ]
            }
        ]
    };

    private readonly answers: QGenAnswersResponse = {
        text: "",
        answers: [
            {
                type: "rl",
                start: 34,
                end: 53,
                text: "Edinburgh, Scotland",
            },
            {
                type: "ner",
                start: 249,
                end: 263,
                text: "Quebec, Canada",
            },
            {
                type: "rl",
                start: 620,
                end: 641,
                text: "Alexander Graham Bell",
            },
            {
                type: "ner",
                start: 1276,
                end: 1298,
                text: "Bell Telephone Company"
            },
            {
                type: "rl",
                start: 1749,
                end: 1765,
                text: "Science Magazine"
            }
        ]
    };

    getAnswers(request: QGenAnswersRequest): Promise<QGenAnswersResponse> {
        return new Promise(resolve => setTimeout(() => resolve(this.answers), 3000));
    }

    getTest(request: QGenTestRequest): Promise<QGenTestResponse> {
        return new Promise(resolve => setTimeout(() => resolve(this.test), 3000))
    }
}