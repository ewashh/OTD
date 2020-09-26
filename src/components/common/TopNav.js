import React from 'react';
import { NavLink } from 'react-router-dom';

function TopNav(){
    return (
        <div id="top-nav">
            <nav>
                <ul>
                    <li id="logo"><NavLink exact to="/">Online Tool <img src="/favicon.ico" /> Directory</NavLink></li>
                    <li><NavLink to="/directory">Directory</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/submit-a-tool" className="btn" id="submit-a-tool">Submit a tool</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default TopNav;