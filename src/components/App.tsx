import React from "react";
import { Component } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import ApplyJobPage from "./templates/ApplyJobPage";
import PublishedJobPage from "./templates/PublishedJobPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Redirect exact from="/" to="/jobs" />
                        <Route exact path="/jobs" component={PublishedJobPage} />
                        <Route exact path="/jobs/:id" component={ApplyJobPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;