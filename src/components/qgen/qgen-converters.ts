import { QGenAnswerExtended, QGenAnswer, QGenTest } from '@/data-objects/qgen-dtos';
import { Annotation } from '@/services/annotation-service.interface';
import { TableInput } from '@/components/widgets/table-input';

function generateRandomAnnotationId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function convertQGenAnswerExtendedToAnnotation(answer: QGenAnswerExtended): Annotation {
    return {
        id: generateRandomAnnotationId(),
        type: answer.type.toLowerCase(),
        start: answer.start,
        end: answer.end,
        text: answer.text,
        label: answer.type.toUpperCase()
    }
}

export function convertAnnotationToQGenAnswer(annotation: Annotation): QGenAnswer {
    return {
        start: annotation.start,
        end: annotation.end
    }
}

export function convertQGenTestsToQuestionsTable(tests: QGenTest[]): TableInput {
    const input: TableInput = {
        columns: [{
            key: 'question',
            displayName: 'Question',
        },
        {
            key: 'correct_answer',
            displayName: 'Correct Answer',
        },
        {
            key: 'option_2',
            displayName: 'Option 2',
        },
        {
            key: 'option_3',
            displayName: 'Option 3',
        },
        {
            key: 'option_4',
            displayName: 'Option 4',
        },
        {
            key: 'relevant',
            displayName: 'Relevant',
        },
        {
            key: 'grammar',
            displayName: 'Grammar',
        },
        {
            key: 'coherence',
            displayName: 'Coherence',
        }],
        rows: []
    }

    for (const test of tests) {
        const row = {
            question: test.question,
            correct_answer: test.answer,
            option_2: test.distractors[0],
            option_3: test.distractors[1],
            option_4: test.distractors[2],
            relevant: false,
            grammar: false,
            coherence: false
        }
        input.rows.push(row);
    }

    return input;
}