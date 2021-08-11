import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/header.js';
import Dashboard from './tasks/Dashboard.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Tasks from './tasks/Tasks'
import { Provider } from 'react-redux';
import store from '../store';
import DataHub from './tasks/DataHub.js';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                        <Fragment>
                            <Header />
                        </Fragment>
                    
                    <Switch>
                        <Fragment>
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route path="/tasks" component={Tasks}></Route>
                        <Route path="/DataHub" component={DataHub}></Route>
                        </Fragment>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));