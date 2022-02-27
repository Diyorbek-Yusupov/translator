import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import Main from './components/Main';
import Notfound from './components/Notfound';

ReactDOM.render(
    
    <Router>
        <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Main/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Route>
        </Routes>
    </Router>

    ,document.querySelector("#root")
);