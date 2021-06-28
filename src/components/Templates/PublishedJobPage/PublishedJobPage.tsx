import React, { useState } from "react";
import { PublishedJobTable } from "../../Organisms";
import { PageTitle } from '../../Atoms';
import { Button, PageSection, Split, SplitItem } from '@patternfly/react-core';
import { PublishJobForm } from "../../Molecules";
import { useHistory } from "react-router-dom";

const PublishedJobPage = () => {
    const [isPublishJobFormOpen, setIsPublishJobFormOpen] = useState<boolean>(false);
    const history = useHistory();
    const handleFormModal = (): void => {
        setIsPublishJobFormOpen(!isPublishJobFormOpen)
    }
    const actions =
        [{
            title: 'view',
            onClick: (event, rowId, rowData, extra) => history.push('/jobs/' + rowData['0'])
        },
        {
            title: 'edit',
            onClick: (event, rowId, rowData, extra) => console.log('clicked on edit action, on row: ', rowId)
        },
        {
            title: 'delete',
            onClick: (event, rowId, rowData, extra) => console.log('clicked on delete action, on row: ', rowId)
        }
        ]

    return (
        <div id='publishedJobView'>
            <PublishJobForm isFormOpen={isPublishJobFormOpen} handleFormModal={handleFormModal} />
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
                <PublishedJobTable actions={actions}/>
            </PageSection>
        </div>
    );
}

export default PublishedJobPage;