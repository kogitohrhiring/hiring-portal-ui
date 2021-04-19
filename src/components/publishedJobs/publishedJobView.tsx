import React from "react";
import { Component } from "react";
import PublishedJobTable from "./publishedJobTable";
import { Title, TitleSizes, Button, Divider } from '@patternfly/react-core';

class PublishedJobView extends Component {

    render(){
        return (
            <div id='publishedJobView'>
                <br/>
                <React.Fragment>
                    <Title headingLevel="h1" size={TitleSizes['4xl']}>
                        Publish Job
                    </Title>
                </React.Fragment>
                <br/>
                <Divider />
                <br/>
                <React.Fragment>
                    <Button type="submit" >Create Job</Button>
                    <br/>
                </React.Fragment>
                <br/>
                <Divider />
                <br/>
                <React.Fragment>
                    <Title headingLevel="h1" size={TitleSizes['3xl']}>
                        View Publish Jobs
                    </Title>
                </React.Fragment>
                <Divider />
                <PublishedJobTable/>
            </div>
        );
    }
}

export default PublishedJobView