import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Func from './components/Func/Func.jsx';
import ForHelp from './components/ForHelp/ForHelp.jsx';
import Share from './components/Share/Share.jsx';
import About from './components/About/About.jsx';
import Developing from './components/Developing/Developing.jsx';
import NotFound from './components/NotFound/NotFound.jsx';

import AppHeader from './components/common/AppHeader/AppHeader.jsx';

class Routes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <AppHeader>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/index" component={Home} />
                        <Route exact path="/func/:type" component={Func} />
                        <Route exact path="/forhelp" component={ForHelp} />
                        <Route exact path="/share" component={Share} />
                        <Route exact path="/about" component={About} />
                    </AppHeader>
                </Switch>
            </BrowserRouter>
        );
    }
};

export default Routes;