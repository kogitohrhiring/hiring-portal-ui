import React from "react";
import { Component } from "react";
import PublishedJobTable from "../PublishedJobTable/PublishedJobTable";
import { Title, TitleSizes, Button, Divider } from '@patternfly/react-core';

class PublishedJobPage extends Component {

    render(){
        return (
            <div id='publishedJobView'>
                <br/>
                <React.Fragment>
                    <Title headingLevel="h1" size={TitleSizes['4xl']}>
                        Publish Job
                    </Title>                    
                    <Divider />                    
                    <Button type="submit" >Create Job</Button>                                       
                    <Divider />
                    <Title headingLevel="h1" size={TitleSizes['3xl']}>
                        View Publish Jobs
                    </Title>                
                    <Divider />
                    <PublishedJobTable/>
                </React.Fragment>
            </div>
        );
    }
}

export default PublishedJobPage