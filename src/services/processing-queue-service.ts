import { ProcessingQueueData, GetJobsDataResponse, GetJobDataResponse } from '../data-objects/processing-queue-data';
import axios from 'axios';
export class ProcessingQueueService {
  // private static readonly data: ProcessingQueueData = {
  //   data: [{
  //     task_type: "Text Classification",
  //     params: "dataset: My Dataset 1",
  //     time_submitted: "2023-01-01 12:12:03",
  //     processing_time: "-",
  //     status: "pending"
  //   },
  //   {
  //     task_type: "CSCL",
  //     params: "language: French",
  //     time_submitted: "2023-02-02 17:22:23",
  //     processing_time: "2 hours",
  //     status: "completed"
  //   },
  //   {
  //     task_type: "Text Classification",
  //     params: "dataset: Test Dataset 2",
  //     time_submitted: "2023-01-15 14:11:05",
  //     processing_time: "-",
  //     status: "pending"
  //   },
  //   {
  //     task_type: "Text Classification",
  //     params: "dataset: My Dataset 3",
  //     time_submitted: "2023-01-07 19:22:34",
  //     processing_time: "4 hours",
  //     status: "completed"
  //   },
  //   {
  //     task_type: "Text Classification",
  //     params: "dataset: Test Dataset 1",
  //     time_submitted: "2023-02-04 20:42:31",
  //     processing_time: "-",
  //     status: "pending"
  //   }]
  // }

  // public static getProcessingQueueData(): ProcessingQueueData {
  //     return this.data;
  // }

  public static async getJobsData(): Promise<GetJobsDataResponse> {
    const result = await axios.post('https://readerbench.com/api/v2/services/jobs', {});
    console.log(result.data)
    return result.data;
  }

  public static async getJobData(id): Promise<GetJobDataResponse> {
    const result = await axios.post(`https://readerbench.com/api/v2/services/job/${id}`, {});
    console.log(result.data)
    return result.data;
  }

  public static async deleteJob(id): Promise<any> {
    return await axios.post(`https://readerbench.com/api/v2/services/jobs/${id}/delete`, {});
  }

}