import React from 'react';
import { Component } from "react";
import { Title, TitleSizes, Button, Divider } from '@patternfly/react-core';
import JobInfo from 'src/components/JobInfo/JobInfo';
import { RouteComponentProps } from 'react-router';

class ApplyJobPage extends Component<RouteComponentProps> {

    render() {
        let id = this.props.match.params['id'];
                
        return (
            <div id="applyJobView">
                <React.Fragment>
                    <Title headingLevel="h1" size={TitleSizes['4xl']}>
                        Apply to Job
                    </Title>
                    <Divider />
                    <JobInfo id = { id }/>
                    <Button variant="primary">Apply Job</Button>
                </React.Fragment>
            </div>
        );
    }
}

export default ApplyJobPage;