import { PageSection, Card } from '@patternfly/react-core'
import React from 'react'
import PublishedJobTable from '../../Organisms/PublishedJobTable/PublishedJobTable';
import PageTitle from '../../Atoms/PageTitle/PageTitle';
import { useHistory } from 'react-router-dom';



const ShortlistResumePage: React.FC = ({
}) => {
    const history = useHistory();
    const actions = [
        {
            title: 'Shortlist resume',
            onClick: (event, rowId, rowData, extra) => history.push(`candidatesApplied/${rowData[0]}`)
            
        }
    ]
    return <React.Fragment>
        <PageSection variant="light">
            <PageTitle title='Shortlist Resume' />
        </PageSection>
        <PageSection>
            <Card>
                <PublishedJobTable actions={actions} />
            </Card>
        </PageSection>
    </React.Fragment>
}

export default ShortlistResumePage;