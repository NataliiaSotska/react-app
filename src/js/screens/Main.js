import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';
import Gallery from '../screens/Gallery';
import Photographers from '../screens/Photographers';
import AboutUs from '../screens/AboutUs';

import Header from '../components/Header'

class Main extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header/>

                <Switch>
                    <Route component={Home} path="/home"/>
                    <Route component={Gallery} path="/gallery"/>
                    <Route component={Photographers} path="/photographers"/>
                    <Route component={AboutUs} path="/about_us"/>
                </Switch>
            </div>
        );
    }
}

export default Main;