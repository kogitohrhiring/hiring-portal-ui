import { Avatar, Card, TextContent, Text, TextVariants } from '@patternfly/react-core';
import React from 'react';
import avatarImg from '../../../static/avatar.svg';
import { CandidateProfileSummarySkills, CandidateProfileSummaryNotes } from '../../Molecules';
import './CandidateProfileSummary.css';

const CandidateProfileSummary = () => {
    return (
        <Card className="candidate-profile-card-style">
            <div className="candidate-profile-avatar-style">
                <Avatar src={avatarImg} alt="avatar" />
                <br/>
                <TextContent>
                    <Text component={TextVariants.h6}> 
                        Saravana Balaji Srinivasan
                    </Text>
                    <Text component={TextVariants.h6}> 
                        Full stack developer
                    </Text>
                </TextContent>
            </div>
            <br/>
            <div className="candidate-profile-skills">
                <CandidateProfileSummarySkills />
            </div>
            <div className="candidate-profile-notes">
                <CandidateProfileSummaryNotes />
            </div>
        </Card>
    )
}

export default CandidateProfileSummary;