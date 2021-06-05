import React, {useState} from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionToggle, Button, TextArea, Title } from '@patternfly/react-core';
import './CandidateProfileResume.css';

const CandidateProfileResume = () => {
    const [textValue, setTextValue] = useState('');
    const [expanded, setExpanded] = useState('ex-toggle2');
    const handleTextAreaChange = (value) => {
        setTextValue(value);
    };

    const onToggle = (id) => {
        if (id === expanded) {
            setExpanded('');
        } else {
            setExpanded(id);
        }
    }

    return (
        <Accordion asDefinitionList={false} id="candidate-profile-resume-accordion">
            <AccordionItem>
            <AccordionToggle
                onClick={() => onToggle('ex-toggle1')}
                isExpanded={expanded === 'ex-toggle1'}
                id="ex-toggle3"
            >
                <Title headingLevel="h4" size="xl" >
                    Update resume
                </Title>
            </AccordionToggle>
            <AccordionContent
                id="ex-expand1"
                isHidden={expanded !== 'ex-toggle1'}
            >
            <TextArea value={textValue} onChange={handleTextAreaChange} 
            style={{paddingRight: '15px !important',
                height: '400px !important'}}
            aria-label="text area" />
            <Button variant="primary">Update</Button>
            </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default CandidateProfileResume;