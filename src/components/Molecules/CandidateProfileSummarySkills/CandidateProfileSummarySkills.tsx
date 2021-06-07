import { Label, LabelGroup, Title } from '@patternfly/react-core';
import React from 'react';

const CandidateProfileSummarySkills = () => {
    const candidateSkills = ['React Js', 'Javascript', 'Angular', ' Node Js', 'HTML', 'CSS', 'Docker', 'Kubernetes', 'Java'];
    return (
        <React.Fragment>
            <Title headingLevel="h4" size="xl" >
                Skills
            </Title>
            <LabelGroup numLabels={10}>
                {candidateSkills.map((skill,index) => (
                    <Label key={index} variant="outline" color="blue">
                        {skill}
                    </Label>
                ))}
            </LabelGroup>
        </React.Fragment>
    )
};

export default CandidateProfileSummarySkills;
