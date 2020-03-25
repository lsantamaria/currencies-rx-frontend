import React from 'react';
import './App.css';
import NavBar from "./navigation/NavBar";
import {Route, Router, Switch} from "react-router";
import Admin from "./pages/Admin";
import {createMemoryHistory} from "history";
import Home from "./pages/Home";

const App: React.FC = () => {
    return (
        <div>
            <Router history={createMemoryHistory()}>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/admin' component={Admin}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
