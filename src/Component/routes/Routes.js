import React from 'react'
import {Switch , Route, Router} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import history from '../history';
import Home from '../Home'
import Signup from '../Signup'
import Signin from '../Signin'
import Resetpage from '../Resetpage';
import DemoHome from '../finvoicedemo/DemoHome'
import Dashboard from '../finvoicedemo/Dashboard'
import DataQueue from '../finvoicedemo/DataQueue'
import InvoiceView from '../finvoicedemo/InvoiceView'
import AccountInfo from '../finvoicedemo/AccountInfo'
import './Routes.css'
import { AuthProvider } from "../../Auth.js";
import Story from '../stories/Story';
//import PrivateRoute from "./PrivateRoute.js";

const Routes = () => {
    return (
        <div>
        <AuthProvider>
        <Router history={history}>
     
        <TransitionGroup>
        <CSSTransition  key={window.location.key} timeout={400} classNames="fade">
        <Switch location={window.location}>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/password/create' component={Resetpage} />
            <Route exact path='/stories' component={Story} />
            <Route exact path='/product' component={DemoHome} />
            <Route exact path='/product/dataqueue' component={DataQueue} />
            <Route exact path='/product/invoiceview' component={InvoiceView} />
            <Route exact path='/product/dashboard' component={Dashboard} />
            <Route exact path='/product/myaccount' component={AccountInfo} />
        </Switch>
        </CSSTransition>
        </TransitionGroup>
        </Router>
        </AuthProvider>
        </div>
    )
}

export default Routes;
