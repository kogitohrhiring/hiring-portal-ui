import { Brand, Nav, NavItem, NavList, Page, PageHeader, PageHeaderTools, PageSidebar } from '@patternfly/react-core';
import React, { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import ApplyJobPage from '../ApplyJobPage/ApplyJobPage';
import PublishedJobPage from '../PublishedJobPage/PublishedJobPage';
import CandidateProfilePage from '../CandidateProfilePage/CandidateProfilePage';
import InterviewFeedbackPage from '../InterviewFeedbackPage/InterviewFeedbackPage';
import UploadFeedbackPage from '../UploadFeedbackPage/UploadFeedbackPage';
import ShortlistResumePage from '../ShortlistResumePage/ShortlistResumePage';
import EasyRecruitLogo from '../../../static/EasyRecruitLogo.svg';
import './PageLayout.css';
import CandidatesApplied from 'src/components/Organisms/CandidatesApplied/CandidatesApplied';
import PageNotFound from '../PageNotFound/PageNotFound';
import NoData from '../NoData/NoData';

const PageLayout = (props) => {
    const { pathname } = props.location;
    const [isNavOpen, setIsNavOpen] = useState(true);
    const pageId = 'main-content-page-layout-default-nav';

    const PageNav = (
        <Nav aria-label="Nav" theme="dark" ouiaId="navigation-list">
            <NavList>
                <NavItem>
                    <Link
                        to="/profile"
                    >
                        Profile
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        to="/jobs"
                    >
                        Jobs
                    </Link>
                </NavItem>
                <NavItem isActive={pathname === '/jobs'}>
                    <Link
                        to="/jobs"
                    >
                        Publish Jobs
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        to="/interviewFeedback"
                    >
                        Interview feedback
                    </Link>
                </NavItem>   
                <NavItem>
                    <Link
                        to="/shortlistResume"
                    >
                        Shortlist resume
                    </Link>
                </NavItem>   
            </NavList>
        </Nav>
    );

    const onNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    
    const BrandClick = () => {
        props.history.push('/');
      };

    const Header = (
        <PageHeader
            logo={<Brand src={EasyRecruitLogo} alt={'EasyRecruitLogo'} onClick={BrandClick} />}
            headerTools={
                <PageHeaderTools>
                    {/* <aboutLogoContext.Provider value={BrandSrc}>
                <PageToolbar />
              </aboutLogoContext.Provider> */}
                </PageHeaderTools>
            }
            showNavToggle
            isNavOpen={isNavOpen}
            onNavToggle={onNavToggle}
        />
    );

    const Sidebar = (
        <PageSidebar
            nav={PageNav}
            isNavOpen={isNavOpen}
            theme="dark"
        />
    );
    return (
        <Page
            header={Header}
            mainContainerId={pageId}
            sidebar={Sidebar}
            className="hiring-portal--PageLayout"
        >
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/jobs" />} />
                <Route exact path="/jobs" component={PublishedJobPage} />
                <Route exact path="/jobs/:id" component={ApplyJobPage} />
                <Route exact path="/profile" component={CandidateProfilePage} />
                <Route exact path="/interviewFeedback" component={InterviewFeedbackPage} />
                <Route exact path="/interviewFeedback/:interviewId" component={UploadFeedbackPage} />
                <Route exact path="/shortlistResume" component={ShortlistResumePage} />
                <Route exact path="/candidatesApplied/:jobId" component={CandidatesApplied} />
                <Route exact path="/NoData" component={NoData} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </Page>
    )
}

export default PageLayout;