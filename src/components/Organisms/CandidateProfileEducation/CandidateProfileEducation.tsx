import React, { useState } from 'react';
import { AccordionContent, AccordionItem, AccordionToggle, Grid, GridItem, TextContent, Text, TextVariants, Title, Divider, Accordion } from '@patternfly/react-core';
import './CandidateProfileEducation.css';

const CandidateProfileEducation = () => {
    const [expanded, setExpanded] = useState('ex-toggle2');
    const experienceData = [
        {
            instuition: 'Xyz college of Engineering',
            qualification: 'B.Tech - Information Technology',
            year: '2015'
        },
        {
            instuition: 'Prs school',
            qualification: '12th - Matriculation',
            year: '2011'
        },
        {
            instuition: 'Abc school',
            qualification: '10th - CBSE',
            year: '2009'
        }
    ]
    const onToggle = (id) => {
        if (id === expanded) {
            setExpanded('');
        } else {
            setExpanded(id);
        }
    }
    return (
        <Accordion asDefinitionList={false} className="candidate-profile-education-accordion">
        <AccordionItem>
            <AccordionToggle
                onClick={() => onToggle('ex-toggle1')}
                isExpanded={expanded === 'ex-toggle1'}
                id="ex-toggle1"
            >
                <Title headingLevel="h4" size="xl" >
                    Education
                </Title>
            </AccordionToggle>
            <AccordionContent
                id="ex-expand1"
                isHidden={expanded !== 'ex-toggle1'}
            >
                <Grid className="candidate-profile-education">
                    <GridItem span={12}>
                        {experienceData.map((data, index) => {
                            return (
                                <div key={index}>
                                    <TextContent>
                                        <Text component={TextVariants.h6}>
                                            {data.instuition}
                                        </Text>
                                        <Text component={TextVariants.blockquote}>
                                            {data.qualification}
                                        </Text>
                                        <Text component={TextVariants.small}>
                                            {data.year}
                                        </Text>
                                    </TextContent>
                                    <Divider style={{padding: '20px 0px'}}/>
                                </div>
                            );
                        })}

                    </GridItem>
                </Grid>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    )
};

export default CandidateProfileEducation;