import React, { useEffect, useState } from 'react';
import { Card, PageSection } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
import { LoadingSpinner, PageTitle } from 'src/components/Atoms';
import { Table, TableBody, TableHeader } from '@patternfly/react-table';
import { useHistory } from 'react-router';
import { onGoingInterviews } from '../../../services/jobService';
import { Link } from 'react-router-dom';
import './InterviewFeedbackPage.css';

const InterviewFeedbackPage = () => {
    const [columns, setColumns] = useState<string[]>([]);
    const [rows, setRows] = useState<string[][]>([]);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [data, setData] = useState([]);
    const initLoad = async() => {
        setIsLoading(true);
        await onGoingInterviews(setData, setIsLoading);
    }

    useEffect(() => {
        setColumns(['Interview ID', 'Job Title', 'Candidate']);
        initLoad();
    },[]);

    const handleData = (content) => {
        const tempData = [];
        const eleId = {title: content['id'] }
                tempData.push(eleId);
        const ele = {
            title: (<>
            <Link to={{pathname: ''}}>
                {`${content['designation']} (Job Id: ${content['jobId']})`}</Link>
            <Link to={{pathname: ''}}>{`${content['role']}`} <ExternalLinkAltIcon/></Link>
            </>)  
        }
        tempData.push(ele);
        const eleCandidate = {title: content['candidate'], rowKey: 3 }
                tempData.push(eleCandidate);
        
        return tempData;
    }

    useEffect(() => {
        if(data.length > 0) {
            const temp = [];
            data.map(content => {
                temp.push(handleData(content))
            });
            setRows(temp)
        }
    }, [data])

    const actions = () => {
        return [
          {
            title: 'view',
            onClick: (event, rowId, rowData, extra) => history.push({pathname:'/interviewFeedback/' + rowData['0'].title})
          }
        ];
      };

    return (
        <React.Fragment>
            <PageSection variant="light">
                <PageTitle title='Active Interviews' />
            </PageSection>
            <PageSection>
                <Card className="interview-feedback-card-style">
                    {!isLoading ? 
                    (<Table
                        aria-label="Actions table"
                        borders={true}
                        cells={columns}
                        rows={rows}
                        actions={actions()}
                        className="interview-feedback-page__table"
                    >
                        <TableHeader />
                        <TableBody />
                    </Table>) : (
                        <LoadingSpinner spinnerText="Loading active interviews"/>
                    )}
                </Card>
            </PageSection>
        </React.Fragment>
    );
}

export default InterviewFeedbackPage;