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
        text: "Alexander Graham Bell was born in Edinburgh, Scotland on March 3, 1847. When he was only eleven years old, he invented a machine that could clean wheat. Graham studied anatomy and physiology at the University of London, but moved with his family to Quebec, Canada in 1870. Bell soon moved to Boston, Massachusetts. In 1871, he began working with deaf people and published the system of Visible Hearing that was developed by his father. Visible hearing illustrated how the tongue, lips, and throat are used to produce vocal sounds. In 1872, Bell founded a school for the deaf which soon became part of Boston University. Alexander Graham Bell is best known for his invention of the telephone. While trying to discover the secret of transmitting multiple messages on a single wire, Bell heard the sound of a plucked string along some of the electrical wire. One of Bell's assistants, Thomas A. Watson, was trying to reactivate a telephone transmitter. After hearing the sound, Bell believed he could send the sound of a human voice over the wire. After receiving a patent on March 7, 1876 for transmitting sound along a single wire, he successfully transmitted human speech on March 10th. Bell's telephone patent was one of the most valuable patents ever issued. He started the Bell Telephone Company in 1877. Bell went on to invent a precursor to the modern day air conditioner, and a device, called a \"photophone\", that enabled sound to be transmitted on a beam of light. Today's fiber optic and laser communication systems are based on Bell's photophone research. In 1898, Alexander Graham Bell and his son-in-law took over the National Geographic Society and built it into one of the most recognized magazines in the world. Bell also helped found Science Magazine, one of the most respected research journals in the world.",
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
        // generate random number between 0 and 1
        const random = Math.random();
        // 50% chance of success
        if (random < 0.5) {
            return new Promise(resolve => setTimeout(() => resolve(this.answers), 3000));
        }
        // 50% chance of failure
        return new Promise((resolve, reject)=> setTimeout(() => reject(this.answers), 3000));
    }

    getTest(request: QGenTestRequest): Promise<QGenTestResponse> {
        // generate random number between 0 and 1
        const random = Math.random();
        // 50% chance of success
        if (random < 0.5) {
            return new Promise(resolve => setTimeout(() => resolve(this.test), 3000));
        }
        // 50% chance of failure
        return new Promise((resolve, reject)=> setTimeout(() => reject(this.test), 3000));
    }
}