import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import '@patternfly/patternfly/patternfly.css';
import Keycloak from 'keycloak-js'; 

let keycloak = Keycloak('resources/keycloak.json');

//Initialization of the keycloak instance
keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {
    console.log(keycloak);
    console.log(authenticated);
    // console.log(getState().keycloakLogin);
    if (!authenticated) {
        window.location.reload();
    } else {
        console.info("Authenticated");
    }

    //React Render on authentication
    ReactDOM.render(<App />, document.getElementById('root'));

    //store authentication tokens in sessionStorage
    sessionStorage.setItem('authentication', keycloak.token);
    sessionStorage.setItem('refreshToken', keycloak.refreshToken);

    //to regenerate token on expiry
    setTimeout(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.debug('Token refreshed' + refreshed);
            } else {
                console.warn('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch(() => {
            console.error('Failed to refresh token');
        });


    }, 60000)

}).catch(() => {
    console.error("Authenticated Failed");
});


// ReactDOM.render(<App />, document.getElementById('root'));