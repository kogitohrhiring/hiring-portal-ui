import React from 'react';
import { Title } from '@patternfly/react-core';

export interface IOwnProps {
  title: string;
}

const PageTitle: React.FC<IOwnProps> = ({
  title
}) => {
  return (
    <React.Fragment>
      <Title
        headingLevel="h1"
        size="4xl"
      >
        {title}
      </Title>
    </React.Fragment>
  );
};

export default PageTitle;
