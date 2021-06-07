import { Badge, Grid, GridItem, TextContent, TextVariants, Title, TitleSizes, Text, TextList, TextListItem, Button } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { Job } from 'src/dtos/Job';
import { getJobDetails } from "src/services/jobService";
import "./JobInfo.css";


interface IOwnProps {
    id : string;
}

const JobInfo: React.FC<IOwnProps> = ({id}) => {
    const [jobInfo, setJobInfo] = useState<Job>();
    console.log('id', id)
    useEffect(() => {
        getJobDetails(id).then((job) => setJobInfo(job)).catch((e) => console.error(e))
    }, [id]);
    
    return (
        < React.Fragment >
            <Grid hasGutter>
                <GridItem span={8}>
                    <Title headingLevel = "h1" size = { TitleSizes['4xl'] }>
                        { jobInfo ? jobInfo.name : "Software Engineer" }
                    </Title>
                </GridItem>
                <GridItem span={4} rowSpan={2} className="apply-job-button-grid-style">
                    <Button variant="primary" className="apply-job-button-style">Apply Job</Button>
                </GridItem>
                <GridItem span={8}>
                    <Badge className="--pf-c-badge--PaddingRight apply-job-badge-style"> Job ID: { jobInfo ? jobInfo.id : "Bangalore" } </Badge>
                    <Badge className="--pf-c-badge--PaddingRight apply-job-badge-style"> Category: { jobInfo ? jobInfo.category : "ENGG"} </Badge>
                    <Badge className="--pf-c-badge--PaddingRight apply-job-badge-style"> Location: { jobInfo ? jobInfo.location : "Bangalore"} </Badge>
                </GridItem>
                <GridItem span={12}>
                    <Title headingLevel = "h4" size = "xl">
                        Job summary
                    </Title>
                    <br/>
                    <TextContent> 
                        <Text component={TextVariants.p}>
                            { jobInfo ? jobInfo.jobSummary : "A Sample Description"} 
                        </Text>        
                    </TextContent>
                </GridItem>
                <GridItem span={12}>
                    <Title headingLevel = "h4" size = "xl">
                        Primary job responsibilities
                    </Title>
                    <br/>
                    <TextContent> 
                        <TextList>
                            { jobInfo ? jobInfo.responsibilites.map(
                                (data, index) => <TextListItem key={index}>{data}</TextListItem>
                            ) : "A Sample responsibilites"} 
                        </TextList>        
                    </TextContent>
                </GridItem>
                <GridItem span={12}>
                    <Title headingLevel = "h4" size = "xl">
                        Required skills
                    </Title>
                    <br/>
                    <TextContent> 
                        <TextList>
                            { jobInfo ? jobInfo.skills.map(
                                (data, index) => <TextListItem key={index}>{data}</TextListItem>
                            ) : "A Sample Skills"} 
                        </TextList>        
                    </TextContent>
                </GridItem>
            </Grid>
        </React.Fragment >
    );
}

export default JobInfo;