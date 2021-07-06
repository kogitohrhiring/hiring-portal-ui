import { Job } from '../dtos/Job';
import config from '../config/config.json';
import axios from 'axios';
import {Candidate}  from '../dtos/Candidate';

  export const getPublishedJobList = () : Promise<Job[]> => { 
    return fetch(config.SERVER_URL + config.URL_SEPARATOR + 'jobs')
           .then(data => data.json())
  }

  export const getJobDetails = (jobId : string) : Promise<Job> => {
    console.log(config.SERVER_URL + config.URL_SEPARATOR + 'jobs/job' + config.URL_SEPARATOR + jobId)
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

  export const onGoingInterviews = async(interviewerId, setData, setIsLoading) => {
    await axios.get(config.SERVER_URL + config.URL_SEPARATOR + 'interview-feedback?interviewerId=' + interviewerId)
    .then((res) => {
      setData([...res.data])
      setIsLoading(false);
    })
    .catch (error => {
      return error;
    })
  }

  export const interviewFeedbacks = async(interviewId, setData, setIsLoading) => {
    await axios.get(config.SERVER_URL + config.URL_SEPARATOR + 'interview-feedback/interview-round?interviewId=' + interviewId)
    .then((res) => {
      setData([...res.data])
      setIsLoading(false);
    })
    .catch (error => {
      return error;
    })
  }

  export const getAppliedCandidates =  (jobId):Promise<Candidate[]>=>{
    return new Promise((resolve,reject)=>{
       axios.get(config.SERVER_URL + config.URL_SEPARATOR + 'appliedCandidates'+ config.URL_SEPARATOR + jobId).then((response)=>{
        resolve(response.data)
      }).catch((error)=>{
        reject(error)
      })
    })
  }