export interface ProcessingQueueItem {
  id: number,
  params: string,
  dataset: Object,
  type: string,
  time_submitted: string,
  processing_time: string,
  status: string,
  submit_time: number,
  elapsed_time: number,
}

export interface ProcessingQueueData {
  jobs: ProcessingQueueItem[];
}

export interface GetJobsDataResponseItem {
  id: number;
  dataset: Object
  status: number; // corelare id status (hardcodat in frontend sau get din backend)
  type: number; // corelare id tip task (hardcodat in frontend sau get din backend)
  params: string; // parametrii task-ului
  submit_time: number; // data si ora
  elapsed_time: number; // timpul de procesare
}

export interface GetJobsDataResponse {
  jobs: GetJobsDataResponseItem[];
}

export interface GetJobDataResponse {
  job: GetJobsDataResponseItem;
}