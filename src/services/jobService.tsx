import { Job } from '../dtos/Job';
import config from '../config/config.json';

// export function getPublishedJobList() : Job[] {
//     return fetch('http://localhost:8080/jobs')
//       .then(data => data.json())
//   }

  export const getPublishedJobList = () : Promise<Job[]> => { 
    return fetch(config.SERVER_URL + config.URL_SEPARATOR + 'jobs')
           .then(data => data.json())
  }

  export const getJobDetails = (jobId : string) : Promise<Job> => {
    return fetch(config.SERVER_URL + config.URL_SEPARATOR + 'jobs' + config.URL_SEPARATOR + jobId)
            .then(data => data.json());
  }

  export const publishJob =(job:Job) =>{
    return fetch(config.SERVER_URL + config.URL_SEPARATOR + 'job',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    }).then(response => response.status)
  }