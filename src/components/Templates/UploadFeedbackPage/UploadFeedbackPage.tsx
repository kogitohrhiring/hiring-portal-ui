import React, { useState, useEffect } from 'react';
import { PageSection, Card, Grid, GridItem, TextContent, Text, TextVariants, Button, Modal, ModalVariant, TextArea, Dropdown, DropdownToggle, DropdownItem } from '@patternfly/react-core';
import { LoadingSpinner, PageTitle } from 'src/components/Atoms';
import { Table, TableBody, TableHeader } from '@patternfly/react-table';
import { EyeIcon, EditIcon, CaretDownIcon } from '@patternfly/react-icons';
import { interviewFeedbacks } from '../../../services/jobService';
import './UploadFeedbackPage.css';

const UploadFeedbackPage = (props) => {
    const id = props.match.params.interviewId;
    console.log(id);
    const [columns, setColumns] = useState<string[]>([]);
    const [rows, setRows] = useState<any>([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
    const value = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
    const editValue = '';
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setColumns(['Round', 'Name', 'Rating', 'Actions']);
        initLoad();
    }, [id]);

    const handleData = (content) => {
        const tempData = [];
        for (const i in content) {
            if (i === 'round') {
                const ele = { title: content[i] }
                tempData.push(ele);
            } else if (i === 'name') {
                const ele = { title: content[i] }
                tempData.push(ele);
            } else if (i === 'rating') {
                const ele = { title: content[i] }
                tempData.push(ele);
            }
        }
        if (content['rating'] === 'NA') {
            const ele = {
                title: <Button variant="plain" aria-label="Action" onClick={() => console.log('edit clicked')}>
                    <EditIcon />
                </Button>
            }
            tempData.push(ele);
        } else {
            const ele = {
                title: <Button variant="plain" aria-label="Action" onClick={() => handleViewModalToggle()}>
                    <EyeIcon />
                </Button>
            }
            tempData.push(ele);
        }
        return tempData;
    }

    useEffect(() => {
        if (data.length > 0) {
            const temp = [];
            data.map(content => {
                temp.push(handleData(content))
            });
            setRows(temp)
        }
    }, [data])

    const initLoad = async () => {
        setIsLoading(true);
        await interviewFeedbacks(id, setData, setIsLoading)
    }

    const handleViewModalToggle = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleEditModalToggle = () => {
        setEditModalOpen(!isEditModalOpen);
    }

    const onToggle = () => {
        setIsOpen(!isOpen);
    }

    const onSelect = () => {
        return null;
    }

    const dropdownToggleItem = () => {
        const items = [];
        for(let i = 0; i=10; i++) {
            items.push(<DropdownItem key="link">{i}</DropdownItem>)
        }
        return items;
    }

    const editModal = () => {
        return (
            <Modal
                variant={ModalVariant.large}
                title="Interview Feedback"
                isOpen={isModalOpen}
                onClose={handleEditModalToggle}
                actions={[
                    <Button key="confirm" variant="primary" onClick={handleEditModalToggle}>
                        Confirm
                    </Button>,
                    <Button key="cancel" variant="link" onClick={handleEditModalToggle}>
                        Cancel
                    </Button>
                ]}
            >
                <Grid className="upload-feedback-page__grid">
                    <GridItem span={2}>
                        <TextContent>
                            <Text component={TextVariants.h6}>
                                Job ID
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={10}>
                        <TextContent>
                            <Text component={TextVariants.p}>
                                26
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={2}>
                        <TextContent>
                            <Text component={TextVariants.h6}>
                                Candidate name
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={10}>
                        <TextContent>
                            <Text component={TextVariants.p}>
                                Saravana
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={2}>
                        <TextContent>
                            <Text component={TextVariants.h6}>
                                Rating
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={10}>
                        <Dropdown
                        onSelect={onSelect}
                        toggle={
                            <DropdownToggle id="toggle-id-menu-document-body" onToggle={onToggle} toggleIndicator={CaretDownIcon}>
                                    1
                            </DropdownToggle>
                        }
                        isOpen={isOpen}
                        dropdownItems={dropdownToggleItem()}
                        menuAppendTo={() => document.body}
                        />
                    </GridItem>
                    <GridItem span={12}>
                        <TextContent>
                            <Text component={TextVariants.h5}>
                                Feedback summary
                            </Text>
                        </TextContent>
                    </GridItem>
                </Grid>
                <TextArea value={editValue} style={{ height: '200px' }} aria-label="text area example" />

            </Modal>
        )
    }

    const viewModal = () => {
        return (
            <Modal
                variant={ModalVariant.large}
                title="Interview Feedback"
                isOpen={isModalOpen}
                onClose={handleViewModalToggle}
                actions={[
                    <Button key="confirm" variant="primary" onClick={handleViewModalToggle}>
                        Confirm
                    </Button>,
                    <Button key="cancel" variant="link" onClick={handleViewModalToggle}>
                        Cancel
                    </Button>
                ]}
            >
                <Grid className="upload-feedback-page__grid">
                    <GridItem span={2}>
                        <TextContent>
                            <Text component={TextVariants.h6}>
                                Job ID
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={10}>
                        <TextContent>
                            <Text component={TextVariants.p}>
                                26
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={2}>
                        <TextContent>
                            <Text component={TextVariants.h6}>
                                Candidate name
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={10}>
                        <TextContent>
                            <Text component={TextVariants.p}>
                                Saravana
                            </Text>
                        </TextContent>
                    </GridItem>
                    <GridItem span={12}>
                        <TextContent>
                            <Text component={TextVariants.h5}>
                                Feedback summary
                            </Text>
                        </TextContent>
                    </GridItem>
                </Grid>
                <TextArea value={value} style={{ height: '200px' }} isDisabled aria-label="text area example" />

            </Modal>
        )
    }
    return (
        <React.Fragment>
            <PageSection variant="light">
                <PageTitle title='Upload Feedback' />
            </PageSection>
            <PageSection>
                <Card className="upload-feedback-card-style">
                    {!isLoading ?
                        (<>
                            <Grid className="upload-feedback-page__grid">
                                <GridItem span={2}>
                                    <TextContent>
                                        <Text component={TextVariants.h6}>
                                            Job ID
                                        </Text>
                                    </TextContent>
                                </GridItem>
                                <GridItem span={10}>
                                    <TextContent>
                                        <Text component={TextVariants.p}>
                                            26
                                        </Text>
                                    </TextContent>
                                </GridItem>
                                <GridItem span={2}>
                                    <TextContent>
                                        <Text component={TextVariants.h6}>
                                            Candidate name
                                        </Text>
                                    </TextContent>
                                </GridItem>
                                <GridItem span={10}>
                                    <TextContent>
                                        <Text component={TextVariants.p}>
                                            Saravana
                                        </Text>
                                    </TextContent>
                                </GridItem>
                                <GridItem span={12}>
                                    <TextContent>
                                        <Text component={TextVariants.h5}>
                                            Interview rounds
                                        </Text>
                                    </TextContent>
                                </GridItem>
                            </Grid>
                            <Table
                                aria-label="Actions table"
                                borders={true}
                                cells={columns}
                                rows={rows}
                                className="upload-feedback-page__table"
                            >
                                <TableHeader />
                                <TableBody />
                            </Table>
                        </>) : (
                            <LoadingSpinner spinnerText="Loading interviews" />
                        )}
                </Card>
                {viewModal()}
                {editModal()}
            </PageSection>
        </React.Fragment>
    )
}

export default UploadFeedbackPage;