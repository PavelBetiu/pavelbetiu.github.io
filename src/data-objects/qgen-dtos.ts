export interface QGenAnswer {
    start: number;
    end: number;
}

export interface QGenAnswerExtended extends QGenAnswer {
    text: string;
    type: string;
}

export interface QGenAnswersResponse {
    text: string;
    answers: QGenAnswerExtended[];
}

export interface QGenTest {
    question: string;
    answer: string;
    distractors: string[];
}

export interface QGenTestResponse {
    tests: QGenTest[];
}
