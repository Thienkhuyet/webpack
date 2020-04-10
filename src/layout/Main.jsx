import React from 'react'
import Header from './header/header'
import LeftMenu from './menu/LeftMenu'
import { hot } from 'react-hot-loader/root';
import "./Main.scss";
class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="bodyMain">
                    <LeftMenu />
                    {this.props.children}
                </div>

            </div>
        )
    }

}
export default hot(MainLayout);