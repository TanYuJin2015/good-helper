// React
import React from "react";
import { Link } from 'react-router-dom';

// Component CSS
import styles from "./styles/AppHeader.scss";
import store from '../../../store/Index/Store.js'

class AppHeader extends React.Component {
    constructor(props) {    
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            currPageIndex: store.getState()["currPageIndex"]
        };
    }

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    /**
     * 监听其他模块触发转换页面的事件的函数
     */
    onChange() {
        let items = this.refs.navList.getElementsByTagName("a");
        
        items[this.state.currPageIndex].className = styles.navItem;
        items[this.getOwnState().currPageIndex].className = styles.activeNavItem;

        this.setState(this.getOwnState());
    }

    /**
     * 导航栏点击事件
     * @param {*} e 事件对象
     */
    handleClick(e) {
        // 如果当前被点击的按钮本身已激活, 无需执行
        if(e.target.tagName === "A" && e.target.className == styles.navItem) {
            let elements = e.currentTarget.getElementsByTagName("a");
            for(let i = 0; i < elements.length; i++) {
                elements[i].className = styles.navItem;
                // 更新状态
                if (elements[i] == e.target) {
                    this.setState({
                        currPageIndex: i
                    });
                }
            }
            e.target.className = styles.activeNavItem;
        }
    }

    render (children) {
        return (
            <div>
                <div className={ styles.TopNavbar }>
                    <div className={ styles.center }>
                        <div className={ styles.left }>
                            <img src={require("./assets/img/trademark/title_small_no_border.png")} alt="logo" />
                            <ul onClick={this.handleClick} className={ styles.navList } ref="navList">
                                <li><Link className={ styles.activeNavItem } to="/index">主页</Link></li>
                                <li><Link className={ styles.navItem } to="/func/index">功能</Link></li>
                                <li><Link className={ styles.navItem } to="/forhelp">求助</Link></li>
                                <li><Link className={ styles.navItem } to="/share">分享</Link></li>
                                <li><Link className={ styles.navItem } to="/about">关于我们</Link></li>
                            </ul>
                        </div>
                        <div className={ styles.right }>
                            <button className={ styles.toLogin }>
                                <i className="fa fa-wechat">微信登录</i>
                            </button>
                        </div>
                    </div>
                </div>

                <div>{this.props.children}</div>
            </div>
        );
    }
}

export default AppHeader;