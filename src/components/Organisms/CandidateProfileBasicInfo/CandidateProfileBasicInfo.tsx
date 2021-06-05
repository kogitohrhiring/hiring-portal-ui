import { 
    // ActionGroup, Button, 
    Card, 
    // Form, FormGroup, FormSelect, FormSelectOption, TextArea, 
    TextContent, 
    // TextInput, 
    Text,
    TextVariants,
    Title, 
    Grid,
    GridItem} from '@patternfly/react-core';
import React from 'react';
import './CandidateProfileBasicInfo.css';

const CandidateProfileBasicInfo = () => {
    
    return (
        <Card className="candidate-profile-basic-info">
            <Title headingLevel = "h4" size = "xl" >
                Basic information
            </Title>
            <Grid>
                <GridItem span={4}>
                    <TextContent>
                        <Text component={TextVariants.blockquote}>
                            Age
                        </Text>
                        <Text component={TextVariants.p}>
                            26
                        </Text>
                    </TextContent>
                </GridItem>
                <GridItem span={4}>
                    <TextContent>
                        <Text component={TextVariants.blockquote}>
                            Years of Experience
                        </Text>
                        <Text component={TextVariants.p}>
                            6
                        </Text>
                    </TextContent>
                </GridItem>
                <GridItem span={4}>
                    <TextContent>
                        <Text component={TextVariants.blockquote}>
                            Phone
                        </Text>
                        <Text component={TextVariants.p}>
                            97856151721
                        </Text>
                    </TextContent>
                </GridItem>
                <GridItem span={4}>
                    <TextContent>
                        <Text component={TextVariants.blockquote}>
                            CTC
                        </Text>
                        <Text component={TextVariants.p}>
                            XX Lac
                        </Text>
                    </TextContent>
                </GridItem>
                <GridItem span={4}>
                    <TextContent>
                        <Text component={TextVariants.blockquote}>
                            Location
                        </Text>
                        <Text component={TextVariants.p}>
                            Coimbatore, TamilNadu
                        </Text>
                    </TextContent>
                </GridItem>
                <GridItem span={4}>
                    <TextContent>
                        <Text component={TextVariants.blockquote}>
                            Email
                        </Text>
                        <Text component={TextVariants.p}>
                            xxxx@gmail.com
                        </Text>
                    </TextContent>
                </GridItem>
            </Grid>
        </Card>
    );

}

export default CandidateProfileBasicInfo;