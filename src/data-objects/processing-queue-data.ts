export interface ProcessingQueueItem {
    dataset: string;
    task_type: string;
    elapsed_time: string;
    status: string;
  }

  export interface ProcessingQueueData {
    data: ProcessingQueueItem[];
  }