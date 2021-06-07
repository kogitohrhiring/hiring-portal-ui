import { Button, TextArea, Title } from '@patternfly/react-core';
import React, {useState} from 'react';
import './CandidateProfileSummaryNotes.css';

const CandidateProfileSummaryNotes = () => {

    const [textValue, setTextValue] = useState('');

    const handleTextAreaChange = (value) => {
        setTextValue(value);
    };

    return (
        <React.Fragment>
            <Title headingLevel="h4" size="xl" >
                Add Notes
            </Title>
            <TextArea value={textValue} onChange={handleTextAreaChange} aria-label="text area" />
            <Button variant="primary">Add Note</Button>
        </React.Fragment>
    );
};

export default CandidateProfileSummaryNotes;