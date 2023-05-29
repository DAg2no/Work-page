import React, { Fragment } from 'react'
import '../src/App.css'
import Header from './header'
import Skill from "./section1.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

    
    return (
        <Fragment>

            <body>
                <Header/>
                <Skill/>
            </body>
                      
        </Fragment>
    );
};

export default App;
