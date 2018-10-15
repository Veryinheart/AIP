import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import {hashHistory} from 'react-router';

import registerServiceWorker from './registerServiceWorker';

import {
    BrowserRouter as Router,
    //HashRouter,
    Route,
    Switch
} from 'react-router-dom'

import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import Restaurant from "./Restaurant";
import Resdetails from "./Resdetails";
import Reservation from "./Reservation";
import Confirmation from "./Confirmation";


// Page-routing setting 
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
                // <Route path="/Confirmation" component={Confirmation}/>
 
            </Switch>
        </div>
    </Router>
)



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
