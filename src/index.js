/*eslint-disable import/default */
import 'babel-polyfill';    //Believe it or not babel can't transpile everything
import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import Tester from './components/playground/tester';
import TesterDetail from './components/playground/tester-detail';
import DealsPage from './components/deals/deals-page';
import {Route, IndexRoute, Router, browserHistory} from 'react-router';
import './styles/styles.css';   //Webpack can import css files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render ((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="deals" component={DealsPage}/>
            <Route path="tester" component={Tester}/>
            <Route path="tester-detail" component={TesterDetail}/>
        </Route>
    </Router>
), document.getElementById('app'));