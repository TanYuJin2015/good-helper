// Modules CSS
import styles from "./styles/Home.scss";

// React
import React from "react";
import { Link } from 'react-router-dom';
import store from '../../store/Index/Store.js'
import * as Actions from '../../actions/Index/Action.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.onChangePage = this.onChangePage.bind(this);
    }    
    
    /**
     * 发起转换到功能页面的动作
     */
    onChangePage() {
        const IndexTurnTo = 1;
        store.dispatch(Actions.changePage(IndexTurnTo));
    }

    render() {
        return (
            <div className={ styles.panel }>
                <img src={require("./assets/img/bg/index-bg-1-mod.png")} draggable="false" alt="" />
                <div className={ styles.float }>
                    <div className={ styles.center }>
                        <Link to="/func/index">
                            <button onClick={ this.onChangePage } className={ styles.use }>开始使用</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }    
};

export default Home;