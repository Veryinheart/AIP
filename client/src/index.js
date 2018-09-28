import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {hashHistory} from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    //HashRouter,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Header from "./Header";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Restaurant from "./Restaurant";
import Resdetails from "./Resdetails";
import Reservation from "./Reservation";
import Confirmation from "./Confirmation";



const App = () => (
    <Router>
        <div>
           
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/restaurant' component={Restaurant}/>
                <Route path='/restaurant/:name' component={Restaurant}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/Resdetails/:id" component={Resdetails}/>
                <Route path="/Reservation/:rid" component={Reservation}/>
                <Route path="/Confirmation/:reservid" component={Confirmation}/>
 
            </Switch>
        </div>
    </Router>
)



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
