import React from 'react';
import { PageSection, Card } from '@patternfly/react-core';
import { JobInfo } from '../../Organisms';
import { RouteComponentProps } from 'react-router';
import './ApplyJobPage.css';
import { PageTitle } from 'src/components/Atoms';

const ApplyJobPage: React.FC<RouteComponentProps> = (props) =>{
        const id = props.match.params['id'];
    
        return (
            <div id="applyJobView">
                <React.Fragment>
                <PageSection variant="light">
                    <PageTitle title='Apply Job' />
                </PageSection>
                <PageSection>
                    <Card className="apply-job-grid-style">
                        <JobInfo id = { id }/>
                    </Card>
                </PageSection>
                </React.Fragment>
            </div>
        );
}

export default ApplyJobPage;