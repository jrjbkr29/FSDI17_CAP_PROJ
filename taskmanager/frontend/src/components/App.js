import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/header.js';
import Dashboard from './tasks/Dashboard.js';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Tasks from './tasks/Tasks'
import { Provider } from 'react-redux';
import store from '../store';
import DataHub from './tasks/DataHub.js';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaFileExcel, FaGem, FaHeart } from "react-icons/fa";

const componentStyle = {
    display: 'flex',
 }

 const sidebarcomponentStyle = {
    height: '90vh',
 }
 
class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <BrowserRouter>
            <Fragment>
                <Header />
            </Fragment>
            <Fragment>
                <div style={componentStyle}>
                    <div className="sideBar" style={sidebarcomponentStyle}>
                    <ProSidebar>
                        <Menu iconShape="square">
                            <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                            <SubMenu title="Components" icon={<FaHeart />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                            </SubMenu>
                        </Menu>
                    </ProSidebar>
                    </div>
                    <div>
                    <Switch>
                        <Fragment>
                        <Route exact path="/" component={Dashboard}></Route>
                        <Route path="/tasks" component={Tasks}></Route>
                        <Route path="/DataHub" component={DataHub}></Route>
                        </Fragment>
                    </Switch>
                    </div>
                </div>
            </Fragment>
                </BrowserRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));