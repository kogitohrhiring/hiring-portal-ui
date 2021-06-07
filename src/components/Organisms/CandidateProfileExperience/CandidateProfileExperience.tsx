import { AccordionContent, AccordionItem, AccordionToggle, Grid, GridItem, TextContent, Text, TextVariants, Title, Divider, Accordion } from '@patternfly/react-core';
import React, { useState } from 'react';
import './CandidateProfileExperience.css';

const CandidateProfileExperience = () => {
    const [expanded, setExpanded] = useState('ex-toggle1');
    const experienceData = [
        {
            company: 'Infosys',
            role: 'UI/UX designer',
            period: 'Apr 2015 - May 2017'
        },
        {
            company: 'Wipro',
            role: 'Full stack developer',
            period: 'May 2017 - Mar 2018'
        },
        {
            company: 'HCL',
            role: 'Full stack developer',
            period: 'Apr 2018 - May 2019'
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
        <Accordion asDefinitionList={false} className="candidate-profile-experience-accordion">
        <AccordionItem>
            <AccordionToggle
                onClick={() => onToggle('ex-toggle1')}
                isExpanded={expanded === 'ex-toggle1'}
                id="ex-toggle1"
            >
                <Title headingLevel="h4" size="xl" >
                    Experience
                </Title>
            </AccordionToggle>
            <AccordionContent
                id="ex-expand1"
                isHidden={expanded !== 'ex-toggle1'}
            >
                <Grid className="candidate-profile-experience">
                    <GridItem span={12}>
                        {experienceData.map((data, index) => {
                            return (
                                <>
                                    <TextContent key={index}>
                                        <Text component={TextVariants.h6}>
                                            {data.company}
                                        </Text>
                                        <Text component={TextVariants.blockquote}>
                                            {data.role}
                                        </Text>
                                        <Text component={TextVariants.small}>
                                            {data.period}
                                        </Text>
                                    </TextContent>
                                    <Divider style={{padding: '20px 0px'}}/>
                                </>
                            );
                        })}

                    </GridItem>
                </Grid>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    )
};

export default CandidateProfileExperience;