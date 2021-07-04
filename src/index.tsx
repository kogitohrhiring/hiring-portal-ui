import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '@patternfly/patternfly/patternfly.css';
import UserService from "./services/keyCloakService";

const renderApp = () => ReactDOM.render(<App />, document.getElementById('root'));

UserService.initKeycloak(renderApp);