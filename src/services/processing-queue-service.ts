import { ProcessingQueueData } from '../data-objects/processing-queue-data';

export class ProcessingQueueService {
    private static readonly data: ProcessingQueueData = {
        data: [{
            dataset: "ImageNet",
            task_type: "Image Classification",
            elapsed_time: "1 hour",
            status: "pending"
        },
        {
            dataset: "COCO",
            task_type: "Object Detection",
            elapsed_time: "2 hours",
            status: "completed"
        },
        {
            dataset: "CIFAR-10",
            task_type: "Image Classification",
            elapsed_time: "3 hours",
            status: "pending"
        },
        {
            dataset: "MNIST",
            task_type: "Image Classification",
            elapsed_time: "4 hours",
            status: "completed"
        },
        {
            dataset: "CIFAR-100",
            task_type: "Image Classification",
            elapsed_time: "5 hours",
            status: "pending"
        }]
    }

    public static getProcessingQueueData(): ProcessingQueueData {
        return this.data;
    }
}