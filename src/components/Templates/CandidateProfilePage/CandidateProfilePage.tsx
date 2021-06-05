import { Flex, FlexItem, PageSection } from '@patternfly/react-core';
import React from 'react';
import { PageTitle } from '../../Atoms';
import { CandidateProfileBasicInfo, CandidateProfileSummary, CandidateProfileExperience, CandidateProfileEducation, CandidateProfileResume } from '../../Organisms';
import './CandidateProfilePage.css';

const CandidateProfilePage = () => {
    return (
        <React.Fragment>
            <PageSection variant="light">
                <PageTitle title='Profile' />
            </PageSection>
            <PageSection>
                <Flex>
                    <Flex direction={{ default: 'column'}}>
                        <FlexItem>
                            <CandidateProfileSummary />
                        </FlexItem>
                    </Flex>
                    <Flex direction={{ default: 'column' }} alignSelf={{ default: 'alignSelfStretch' }} flex={{ default: 'flex_1' }}>
                        <FlexItem>
                            <CandidateProfileBasicInfo />
                        </FlexItem>
                        <FlexItem className="candidate-profile-flex-style">
                            <CandidateProfileExperience />
                        </FlexItem>
                        <FlexItem>
                            <CandidateProfileEducation />
                        </FlexItem>
                        <FlexItem className="candidate-profile-flex-style">
                            <CandidateProfileResume />
                        </FlexItem>
                    </Flex>
                </Flex>
            </PageSection>
        </React.Fragment>
    );
}

export default CandidateProfilePage;