import {
  Brand,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageHeaderTools,
  PageSidebar,
} from "@patternfly/react-core";
import React, { useState } from "react";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import ApplyJobPage from "../ApplyJobPage/ApplyJobPage";
import PublishedJobPage from "../PublishedJobPage/PublishedJobPage";
import EasyRecruitLogo from "../../../static/EasyRecruitLogo.svg";
import "./PageLayout.css";
import CandidateProfilePage from "../CandidateProfilePage/CandidateProfilePage";

const PageLayout = (props) => {
  const { pathname } = props.location;
  const [isNavOpen, setIsNavOpen] = useState(true);
  const pageId = "main-content-page-layout-default-nav";

  const PageNav = (
    <Nav aria-label="Nav" theme="dark" ouiaId="navigation-list">
      <NavList>
        <NavItem>
          <Link to="/profile">Profile</Link>
        </NavItem>
        <NavItem>
          <Link to="/jobs">Jobs</Link>
        </NavItem>
        <NavItem isActive={pathname === "/jobs"}>
          <Link to="/jobs">Publish Jobs</Link>
        </NavItem>
      </NavList>
    </Nav>
  );

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const BrandClick = () => {
    props.history.push("/");
  };

  const Header = (
    <PageHeader
      logo={
        <Brand
          src={EasyRecruitLogo}
          alt={"EasyRecruitLogo"}
          onClick={BrandClick}
        />
      }
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
    <PageSidebar nav={PageNav} isNavOpen={isNavOpen} theme="dark" />
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
      </Switch>
    </Page>
  );
};

export default PageLayout;