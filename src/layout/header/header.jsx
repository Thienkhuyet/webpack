import React, { useState } from 'react';
import './header.scss';
import { hot } from 'react-hot-loader/root';

import { Button } from 'antd';
import { connect } from 'dva';
class Header extends React.Component {
    render() {
        const { deaths, confirmed, recovered } = this.props;
        return (
            <div className="header">
                <div>confirmed :{confirmed.value}</div>
                <div>recovered: {recovered.value}</div>
                <div>deaths {deaths.value}</div>
            </div>
        );
    }
}
function mapStatetoProps(state) {
    return { ...state['ncov-19'] };
}
export default hot(connect(mapStatetoProps)(Header));
