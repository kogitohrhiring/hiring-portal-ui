import React from "react";
import { PublishedJobTable } from "../../Organisms";
import { PageTitle } from '../../Atoms';
import { Button, PageSection } from '@patternfly/react-core';

const PublishedJobPage = () => {
        return (
            <div id='publishedJobView'>
                <PageSection variant="light">
                    <PageTitle title='Publish Jobs' />
                </PageSection>
                <Button type="submit" >Create Job</Button>               
                <PageSection>
                    <PublishedJobTable/>
                </PageSection>
            </div>
        );
}

export default PublishedJobPage;