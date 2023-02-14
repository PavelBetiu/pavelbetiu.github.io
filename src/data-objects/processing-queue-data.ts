export interface ProcessingQueueItem {
  params: string,
  task_type: string,
  time_submitted: string,
  processing_time: string,
  status: string
}

export interface ProcessingQueueData {
  data: ProcessingQueueItem[];
}

export interface GetJobsDataResponseItem {
  id: number;
  status: number; // corelare id status (hardcodat in frontend sau get din backend)
  type: number; // corelare id tip task (hardcodat in frontend sau get din backend)
  params: string; // ce e in params? (aici gasim datasetul folosit?)
  // nu avem: elapsed_time
}

export interface GetJobsDataResponse {
  jobs: GetJobsDataResponseItem[];
}