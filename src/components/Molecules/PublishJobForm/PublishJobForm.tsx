import React, { useState } from 'react';
import { Button, Form, FormGroup, FormSelect, FormSelectOption, InputGroup, Modal, ModalVariant, TextArea, TextInput } from '@patternfly/react-core';
 import { publishJob } from '../../../services/jobService';

interface IPublishJobForm {
    isFormOpen: boolean;
    handleFormModal: () => void;
}

const PublishJobForm: React.FC<IPublishJobForm> = ({
    isFormOpen,
    handleFormModal
}) => {
    const [jobId, setJobId] = useState<string>('');
    const [jobName, setJobName] = useState<string>('');
    const [jobLocation, setJobLocation] = useState<string>('');
    const [jobCategory, setJobCategory] = useState<string>('');
    const [jobSummary, setJobSummary] = useState<string>('');
    const categories = [
        { value: 'Category', label: 'Please Choose', disabled: false },
        { value: 'Associate SE', label: 'Associate SE', disabled: false },
        { value: 'SE', label: 'SE', disabled: false },
        { value: 'Senior SE', label: 'Senior SE', disabled: false },
        { value: 'Principal SE', label: 'Principal SE', disabled: false },
        { value: 'Senior Principal SE', label: 'Senior Principal SE', disabled: false },
        { value: 'Distinguished SE', label: 'Distinguished SE', disabled: false }
    ]

    const onCategoryChange = (value, event): void => {
        setJobCategory(value);
    }
    const clearForms = (): void => {
        setJobId('');
        setJobName('');
        setJobCategory('');
        setJobLocation('');
        setJobSummary('');
    };

    const createJob = async () => {
        const job = {
            id: jobId,
            name: jobName,
            location: jobLocation,
            category: jobCategory,
            jobSummary
        };
        await publishJob(job);
        clearForms();
        handleFormModal();
    }

    return <Modal
        variant={ModalVariant.large}
        title="Create Job"
        isOpen={isFormOpen}
        onClose={handleFormModal}
        actions={[
            <Button key ="create job" variant="primary" onClick={() => { createJob(); }}>
                Publish job
      </Button>,
            <Button key="cancel" variant="link" onClick={handleFormModal}>
                Cancel
      </Button>
        ]}
    >
        <Form id="create-job-form">
            <FormGroup
                label="Job ID"
                isRequired
                fieldId="hiring-job-id"
            >
                <TextInput
                    isRequired
                    type="text"
                    id="hiring-job-id-input"
                    name="hiring-job-id"
                    aria-describedby="hiring-job-id"
                    value={jobId}
                    onChange={setJobId}
                />
            </FormGroup>
            <FormGroup
                label="Job Name"
                isRequired
                fieldId="hiring-job-name"
            >
                <TextInput
                    isRequired
                    type="text"
                    id="hiring-job-name-input"
                    name="hiring-job-name"
                    aria-describedby="hiring-job-name"
                    value={jobName}
                    onChange={setJobName}
                />
            </FormGroup>
            <FormGroup
                label="Job Location"
                isRequired
                fieldId="hiring-job-location"
            >
                <TextInput
                    isRequired
                    type="text"
                    id="hiring-job-location-input"
                    name="hiring-job-location"
                    aria-describedby="hiring-job-location"
                    value={jobLocation}
                    onChange={setJobLocation}
                />
            </FormGroup>
            <FormGroup label="Job Category" fieldId="hiring-job-category">
                <FormSelect
                    value={jobCategory}
                    onChange={onCategoryChange}
                    id="hiring-job-category"
                    name="hiring-job-category"
                    aria-label="job category"
                >
                    {categories.map((option, index) => (
                        <FormSelectOption isDisabled={option.disabled} key={index} value={option.value} label={option.label} />
                    ))}
                </FormSelect>
            </FormGroup>
            <FormGroup label="Job Summary" fieldId="hiring-job-summary">
                <InputGroup>
                    <TextArea name="hiring-job-summary" id="hiring-job-summary" aria-label="job summary text area" onChange={setJobSummary} />
                </InputGroup>
            </FormGroup>
        </Form>
    </Modal>
}

export default PublishJobForm;