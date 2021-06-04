import { Badge, Title, TitleSizes } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { Job } from 'src/dtos/Job';
import { getJobDetails } from "src/services/jobService";
import "./JobInfo.css";


interface IOwnProps {
    id : string;
}

const JobInfo: React.FC<IOwnProps> = ({id}) => {
    const [jobInfo, setJobInfo] = useState<Job>();

    useEffect(() => {
        getJobDetails(id).then((job) => setJobInfo(job)).catch((e) => console.error(e))
    }, [id]);

    return (
        < React.Fragment >
            <Title headingLevel = "h1" size = { TitleSizes['4xl'] }>
                { jobInfo ? jobInfo.name : "Software Engineer" }
            </Title>
            <Badge> { jobInfo ? jobInfo.location : "BLR" } </Badge>
            <Badge> { jobInfo ? jobInfo.category : "ENGG"} </Badge>
            <Title headingLevel = "h2" size = "3xl">
                Job Description :
            </Title>
            <p> { jobInfo ? jobInfo.jobSummary : "A Sample Description"} </p>
        </React.Fragment >
    );
}

export default JobInfo;