import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route} from 'react-router-dom';
import './styles/main.css';

import Main from './js/screens/Main'

render (
    <BrowserRouter>
        <Route component={Main} path="/"/>
    </BrowserRouter>,
    document.getElementById('root')
);
