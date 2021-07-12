import React, { useState } from 'react';

import {
  Bullseye,
  EmptyState,
  EmptyStateIcon,
  EmptyStateVariant,
  Button,
  EmptyStateBody,
  Title,
  ClipboardCopy,
  ClipboardCopyVariant
} from '@patternfly/react-core';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

interface IOwnProps {
  error: any;
  resetErrorBoundary: () => void;
}
const ErrorComponent: React.FC<IOwnProps> = ({
  error, resetErrorBoundary
}) => {
  const [displayError, setDisplayError] = useState(false);

  const renderContent = () => (
    <>
      <EmptyStateIcon
        icon={ExclamationCircleIcon}
        color="var(--pf-global--danger-color--100)"
      />
      <Title headingLevel="h1" size="4xl">
        Oops something went wrong!
      </Title>
      <EmptyStateBody>
        An error occurred while accessing data.{' '}
        <Button
          variant="link"
          isInline
          id="display-error"
          onClick={() => setDisplayError(!displayError)}
        >
          See more details
        </Button>
      </EmptyStateBody>
      {displayError && (
        <EmptyStateBody>
          <ClipboardCopy
            isCode
            variant={ClipboardCopyVariant.expansion}
            isExpanded={true}
            className="pf-u-text-align-left"
          >
            {JSON.stringify(error.message)}
          </ClipboardCopy>
        </EmptyStateBody>
      )}
    </>
  );

  const renderBullseye = () => (
    <Bullseye>
      <EmptyState variant={EmptyStateVariant.full}>
        {renderContent()}
          <Button
            variant="primary"
            id="goback-button"
            onClick={() => resetErrorBoundary()}
          >
            Go back
          </Button>
      </EmptyState>
    </Bullseye>
  );

  return (
    <>
        {renderBullseye()}
    </>
  );
};

export default ErrorComponent;
