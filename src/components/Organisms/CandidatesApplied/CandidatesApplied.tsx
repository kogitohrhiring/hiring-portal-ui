import { PageSection, Card, FlexItem, Flex, Split, SplitItem, TextContent, TextVariants, Text } from '@patternfly/react-core';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PageTitle } from 'src/components/Atoms';
import { getJobDetails } from 'src/services/jobService';
import AppliedCandidateTable from '../AppliedCandidateTable/AppliedCandidateTable';

const CandidatesApplied: React.FC<RouteComponentProps> = (props) => {
    const jobId:string =props.match.params['jobId'];
    const [jobDetails,setJobDetails]=useState({
        id:'',
        category:'',
        location:'',
        name:''
    });

    useEffect(()=>{
        console.log(jobId)
        getJobDetails(jobId.toString()).then((response)=>{
            setJobDetails(response);
        }).catch(error=>console.log(error))
    },[]);

    const actions =[
      {
        title:'Shortlist',
        onClick:(event, rowId, rowData, extra)=>{

        }
      },
      {
        title:'Reject',
        onClick:(event, rowId, rowData, extra)=>{

        }
      }
    ]
    return <React.Fragment>
        <PageSection variant="light">
            <PageTitle title='Candidates Applied' />
        </PageSection>
        <PageSection>
            <Card>
                <Flex direction={{ default: 'column' }}>
                    <FlexItem>
                        <Card>
                        <Flex direction={{ default: 'column' }}>
                    <FlexItem>
                      <TextContent>
                        {' '}
                        <Split hasGutter>
                          <SplitItem>
                            <Text component={TextVariants.h6}>
                              {'Job ID : '}
                            </Text>
                          </SplitItem>
                          <SplitItem>
                            <Text component={TextVariants.p}>
                              {jobDetails.id}
                            </Text>
                          </SplitItem>
                        </Split>
                      </TextContent>
                    </FlexItem>
                    <FlexItem>
                      <TextContent>
                        {' '}
                        <Split hasGutter>
                          <SplitItem>
                            <Text component={TextVariants.h6}>
                              {'Job Title : '}
                            </Text>
                          </SplitItem>
                          <SplitItem>
                            <Text component={TextVariants.p}>
                              {jobDetails.name}
                            </Text>
                          </SplitItem>
                        </Split>
                      </TextContent>
                    </FlexItem>
                    <FlexItem>
                      <TextContent>
                        {' '}
                        <Split hasGutter>
                          <SplitItem>
                            <Text component={TextVariants.h6}>
                              {'Category : '}
                            </Text>
                          </SplitItem>
                          <SplitItem>
                            <Text component={TextVariants.p}>
                              {jobDetails.category}
                            </Text>
                          </SplitItem>
                        </Split>
                      </TextContent>
                    </FlexItem>
                    <FlexItem>
                      <TextContent>
                        {' '}
                        <Split hasGutter>
                          <SplitItem>
                            <Text component={TextVariants.h6}>
                              {'Location : '}
                            </Text>
                          </SplitItem>
                          <SplitItem>
                            <Text component={TextVariants.p}>
                              {jobDetails.location}
                            </Text>
                          </SplitItem>
                        </Split>
                      </TextContent>
                    </FlexItem>
                  </Flex>
                        </Card>
                    </FlexItem>
                    <FlexItem>
                        <Card>
                            <AppliedCandidateTable actions={actions} jobId={jobId}/>
                        </Card>
                    </FlexItem>

                </Flex>
            </Card>
        </PageSection>
    </React.Fragment>
}

export default CandidatesApplied;