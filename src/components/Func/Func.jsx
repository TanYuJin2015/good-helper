import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import FuncIndex from './FuncIndex.jsx';
import ImgFunc from './ImgFunc.jsx';
import AudioFunc from './AudioFunc.jsx';


class Func extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Func：{this.props.match.params.type} Type
                <Switch>       
                    <Route exact path="/func/index" component={FuncIndex} />
                    <Route exact path="/func/img" component={ImgFunc} />
                    <Route exact path="/func/audio" component={AudioFunc} />   
                </Switch>
            </div>
        );
    }
};

export default Func;