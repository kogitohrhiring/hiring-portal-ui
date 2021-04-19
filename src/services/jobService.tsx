import { Job } from '../dtos/Job'

// export function getPublishedJobList() : Job[] {
//     return fetch('http://localhost:8080/jobs')
//       .then(data => data.json())
//   }

  export const getPublishedJobList = () : Promise<Job[]> => { 
    return fetch('http://localhost:8080/jobs')
           .then(data => data.json())
  }