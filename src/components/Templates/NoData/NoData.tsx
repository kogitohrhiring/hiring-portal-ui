import React, { useState } from 'react';
import {
  PageSection,
  Bullseye,
  EmptyState,
  EmptyStateIcon,
  EmptyStateVariant,
  Button,
  EmptyStateBody,
  Title
} from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { Redirect } from 'react-router';

const NoData: React.FC = () => {

  const [isRedirect, setIsredirect] = useState(false);
  const redirectHandler = () => {
    setIsredirect(true);
  };
  return (
    <>
      {isRedirect && <Redirect to={`/profile`} />}
      <PageSection isFilled={true}>
        <Bullseye>
          <EmptyState variant={EmptyStateVariant.full}>
            <EmptyStateIcon icon={SearchIcon} />
            <Title headingLevel="h1" size="4xl">
                No matches
            </Title>
            <EmptyStateBody>
              No data to display
            </EmptyStateBody>
            <Button variant="primary" onClick={redirectHandler}>
                Go to profile
            </Button>
          </EmptyState>
        </Bullseye>
      </PageSection>
    </>
  );
};

export default NoData;
