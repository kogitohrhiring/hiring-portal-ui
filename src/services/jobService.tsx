import { Job } from '../dtos/Job';
import config from '../config/config.json';
import axios from 'axios';

  export const getPublishedJobList = () : Promise<Job[]> => { 
    return fetch(config.SERVER_URL + config.URL_SEPARATOR + 'jobs')
           .then(data => data.json())
  }

  export const getJobDetails = (jobId : string) : Promise<Job> => {
    return fetch(config.SERVER_URL + config.URL_SEPARATOR + 'jobs/job' + config.URL_SEPARATOR + jobId)
            .then(data => data.json());
  }

  export const publishJob =(job:Job) =>{
    return fetch(config.SERVER_URL + config.URL_SEPARATOR + 'jobs',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    }).then(response => response.status)
  };

  export const onGoingInterviews = async(setData, setIsLoading) => {
    await axios.get(config.SERVER_URL + config.URL_SEPARATOR + 'ongoingInteviews')
    .then((res) => {
      setData([...res.data])
      setIsLoading(false);
    })
    .catch (error => {
      return error;
    })
  }

  export const interviewFeedbacks = async(interviewId, setData, setIsLoading) => {
    await axios.get(config.SERVER_URL + config.URL_SEPARATOR + 'interviewFeedback/' + interviewId)
    .then((res) => {
      setData([...res.data])
      setIsLoading(false);
    })
    .catch (error => {
      return error;
    })
  }