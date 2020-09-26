import React, { useState, useEffect } from 'react';
import TopNav from './TopNav';
import HomeHeader from '../homePage/HomeHeader';
import { Route, Switch, Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Header(props){
    
    const cookies = new Cookies();
    const [cookiePolicy, setCookiePolicy] = useState(
        cookies.get('cookiePolicy')
    );

    function cookieCross() {
        cookies.set('cookiePolicy', 'dontShow', { path: '/' });
        setCookiePolicy('dontshow')
    }
    
    return (
        <>
            {!cookiePolicy &&
            <aside id="cookies">
                <span className="min">Have a cookie <img className="icon" src="/images/icons/cookie-bite-solid.svg"/> By using this site you agree to our <Link to="/cookie-policy">Cookie&nbsp;Policy</Link></span>
                <img className="cross" src="/images/icons/times-light.svg" onClick={cookieCross} />
            </aside>}
            <header className={ props.pageTemplate }>
                <TopNav />
                <div className="wrapper">
                    <Switch>
                        <Route path="/" exact component={HomeHeader} />
                        { props.children }
                    </Switch>
                </div>
            </header>
        </>
    )
}

export default Header;