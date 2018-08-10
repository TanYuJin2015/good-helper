import { createStore } from 'redux'
import reducer from '../../reducers/Index/Reducer.js'

// 顶部导航栏处于激活状态的item, 初始值为 0, 表示 主页 激活
const initValues = {
    "currPageIndex": 0
};

const store = createStore(reducer, initValues);

export default store;