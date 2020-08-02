import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { RouteProps } from 'react-router';
import Home from '../container/Home';
import Cart from '../container/Cart';
class Header extends Component {
    render() {
        return (
            
            <div className="header">
                <div className="content">
                    <ul className="menu-left">
                        <li><Link to="/home">
                        
                            Trang chu
                            
                            </Link></li>
                        <li><Link to="/home">San pham</Link></li>
                    </ul>

                    <ul className="menu-right">
                        <li><Link to="/cart">Gio Hang</Link></li>
                        <li><Link to="/stories">Kho</Link></li>
                    </ul>
                </div>

             
            </div>
        

        );
    }
}

type props = {}

export default Header;