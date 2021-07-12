import {
  Brand,
  Button,
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
import CandidateProfilePage from "../CandidateProfilePage/CandidateProfilePage";
import InterviewFeedbackPage from "../InterviewFeedbackPage/InterviewFeedbackPage";
import UploadFeedbackPage from "../UploadFeedbackPage/UploadFeedbackPage";
import ShortlistResumePage from "../ShortlistResumePage/ShortlistResumePage";
import EasyRecruitLogo from "../../../static/EasyRecruitLogo.svg";
import "./PageLayout.css";
import CandidatesApplied from "src/components/Organisms/CandidatesApplied/CandidatesApplied";
import { PrivateRoute } from "src/utils/privateRoute";
import UserService from "../../../services/keyCloakService";
import {
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
} from "@patternfly/react-core";
import ThIcon from "@patternfly/react-icons/dist/js/icons/th-icon";

const PageLayout = (props) => {
  const { pathname } = props.location;
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isIconDropdownOpen, setIsIconDropdownOpen] = useState(false);
  const pageId = "main-content-page-layout-default-nav";

  const PageNav = (
    <Nav aria-label="Nav" theme="dark" ouiaId="navigation-list">
      <NavList>
        <NavItem>
          <Link to="/jobs">Jobs</Link>
        </NavItem>
        <NavItem isActive={pathname === "/jobs"}>
          <Link to="/jobs">Publish Jobs</Link>
        </NavItem>
        <NavItem>
          <Link to="/interviewFeedback">Interview feedback</Link>
        </NavItem>
        <NavItem>
          <Link to="/shortlistResume">Shortlist resume</Link>
        </NavItem>
      </NavList>
    </Nav>
  );

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const onDropdownToggle = (isOpen) => {
    setIsIconDropdownOpen(isOpen);
  };
  const onIconDropdownSelect = () => {
    setIsIconDropdownOpen(!isIconDropdownOpen);
    onFocus();
  };
  const onFocus = () => {
    const element = document.getElementById("toggle-id-7");
    element.focus();
  };

  const BrandClick = () => {
    props.history.push("/");
  };

  const handleLogin = () => {
    UserService.doLogin();
  };

  const handleLogout = () => {
    UserService.doLogout();
  };

  const dropdownItems = [
    <DropdownItem key="/profile">
      <Link to="/profile">Profile</Link>
    </DropdownItem>,
    <DropdownSeparator key="separator" />,
    <DropdownItem key="separated action" component="button">
      {!UserService.isLoggedIn() ? (
        <Link to="/login">
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Link>
      ) : (
        <Link to="/logout">
          <Button variant="danger" onClick={handleLogout}>
            Log out
          </Button>
        </Link>
      )}
    </DropdownItem>,
  ];

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
          <Dropdown
            onSelect={onIconDropdownSelect}
            toggle={
              <DropdownToggle
                toggleIndicator={null}
                onToggle={onDropdownToggle}
                aria-label="Applications"
                id="toggle-id-7"
              >
                <ThIcon />
              </DropdownToggle>
            }
            isOpen={isIconDropdownOpen}
            isPlain
            dropdownItems={dropdownItems}
            position={"right"}
          />
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
        <PrivateRoute
          roles={["hr"]}
          exact
          path="/interviewFeedback"
          component={InterviewFeedbackPage}
        />
        <Route
          exact
          path="/interviewFeedback/:interviewId"
          component={UploadFeedbackPage}
        />
        <PrivateRoute
          roles={["hr"]}
          exact
          path="/shortlistResume"
          component={ShortlistResumePage}
        />
        <Route
          exact
          path="/candidatesApplied/:jobId"
          component={CandidatesApplied}
        />
      </Switch>
    </Page>
  );
};

export default PageLayout;
