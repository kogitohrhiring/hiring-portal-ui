import React from "react";
import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import { PageLayout } from "./Templates";

const App = () => {

        return (
            <Router>
                <Switch>
                    <Route path="/" component={PageLayout} />
                </Switch>
            </Router>
        );

}

export default App;