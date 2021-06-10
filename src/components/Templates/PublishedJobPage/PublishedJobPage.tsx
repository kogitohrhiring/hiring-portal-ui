import React, { useState } from "react";
import { PublishedJobTable } from "../../Organisms";
import { PageTitle } from '../../Atoms';
import { Button, PageSection, Split, SplitItem } from '@patternfly/react-core';
import { PublishJobForm } from "../../Molecules";

const PublishedJobPage = () => {
    const [isPublishJobFormOpen,setIsPublishJobFormOpen]=useState<boolean>(false);
    
    const handleFormModal=():void=>{
        setIsPublishJobFormOpen(!isPublishJobFormOpen)
    }
        return (
            <div id='publishedJobView'>
                <PublishJobForm isFormOpen={isPublishJobFormOpen} handleFormModal={handleFormModal}/>
                <PageSection variant="light">
                <Split
                      hasGutter={true}
                      component={'div'}
                      className="pf-u-align-items-center"
                    >
                      <SplitItem isFilled={true}>
                      <PageTitle title='Publish Jobs' />
                      </SplitItem>
                      <SplitItem>
                      <Button type="submit" onClick={handleFormModal}>Create Job</Button>   
                      </SplitItem>
                    </Split>
                </PageSection>            
                <PageSection>
                    <PublishedJobTable/>
                </PageSection>
            </div>
        );
}

export default PublishedJobPage;