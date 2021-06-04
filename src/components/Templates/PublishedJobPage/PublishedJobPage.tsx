import React from "react";
import { Component } from "react";
import { PublishedJobTable } from "../../Organisms";
import { Title, TitleSizes, Button, PageSection, 
    // Toolbar, ToolbarGroup, ToolbarContent, ToolbarItem 
} from '@patternfly/react-core';

class PublishedJobPage extends Component {

    render(){
        return (
            <div id='publishedJobView'>
                <br/>
                <PageSection variant="light">
                    <Title headingLevel="h1" size={TitleSizes['4xl']}>
                        Publish Jobs
                    </Title>                    
                </PageSection>
                {/* <Toolbar
        id="data-toolbar-with-chip-groups"
        className="pf-m-toggle-group-container"
        collapseListedFiltersBreakpoint="md"
        
      >
          <ToolbarContent>
            <ToolbarGroup>
                <ToolbarItem> */}
                <Button type="submit" >Create Job</Button>              
                {/* </ToolbarItem>
            </ToolbarGroup>
          </ToolbarContent>
      </Toolbar> */}
                
                <PageSection>
                    <PublishedJobTable/>
                </PageSection>
            </div>
        );
    }
}

export default PublishedJobPage