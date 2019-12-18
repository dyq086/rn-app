/*
 * @Author: yongqing
 * @Date:   2019-11-18 18:04:45
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-11-18 18:05:02
 */

import React, { Component } from 'react'

/**
 * Screen基础类，提供全局导航、token服务
 * @export
 * @class Base
 * @extends {React.Component}
 */
export default class Base extends Component {
    navigationPush = router => {
        this.props.navigation.navigate(router)
    }
    /** 登录token */
    get token() {
        return 1
    }
}