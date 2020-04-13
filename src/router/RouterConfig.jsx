import React from "react";
import { Route, BrowserRouter as Router, Switch, } from "react-router-dom";
import Main from "../layout/Main";
import { hot } from 'react-hot-loader/root';
import Account from "../module/account/Account";
import Client from "../module/client/Client";


class RouterConfig extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Main>
                        <Route path="/" exact component={Account} />
                        <Route path="/api" exact component={Client} />

                    </Main>
                </Switch>
            </Router>
        );
    }
}
export default hot(RouterConfig);