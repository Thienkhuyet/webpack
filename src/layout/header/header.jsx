import React, { useState } from 'react';
import './header.scss';
import { hot } from 'react-hot-loader/root';

import { Button } from 'antd';
import { connect } from 'dva';
class Header extends React.Component {
    render() {
        const { deaths, confirmed, recovered, lastUpdate } = this.props;
        return (
            <div className="header">
                <div>Confirmed :{confirmed.value}</div>
                <div style={{ color: "blue" }}>Recovered: {recovered.value}</div>
                <div>Deaths {deaths.value}</div>
                <div>Last Update: {lastUpdate.substring(0, 10)}</div>
            </div>
        );
    }
}
function mapStatetoProps(state) {
    return { ...state['ncov-19'] };
}
export default hot(connect(mapStatetoProps)(Header));
