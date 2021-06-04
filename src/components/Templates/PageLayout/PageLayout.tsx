import { Nav, NavItem, NavList, Page, PageHeader, PageHeaderTools, PageSidebar } from '@patternfly/react-core';
import React, { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import ApplyJobPage from '../ApplyJobPage/ApplyJobPage';
import PublishedJobPage from '../PublishedJobPage/PublishedJobPage';
import EasyRecruitLogo from '../../../static/EasyRecruitLogo.svg';

const PageLayout = (props) => {
    const { pathname } = props.location;
    const PageNav = (
        <Nav aria-label="Nav" theme="dark" ouiaId="navigation-list">
            <NavList>
                <NavItem isActive={pathname === '/jobs'}>
                    <Link
                        to="/jobs"
                    >
                        Publish Jobs
              </Link>
                </NavItem>
            </NavList>
        </Nav>
    );


    const [isNavOpen, setIsNavOpen] = useState(true);
    const onNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };
    const pageId = 'main-content-page-layout-default-nav';
    console.log('EasyRecruitLogo', EasyRecruitLogo)

    const Header = (
        <PageHeader
            logo={EasyRecruitLogo}
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
        // className="kogito-common--PageLayout"
        >
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/jobs" />} />
                <Route exact path="/jobs" component={PublishedJobPage} />
                <Route exact path="/jobs/:id" component={ApplyJobPage} />
            </Switch>
        </Page>
    )
}

export default PageLayout;