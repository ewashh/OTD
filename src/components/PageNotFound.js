import React from 'react';
import Header from './common/Header';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <Header>
            <>
            <h1>Ooops...</h1>
            <p>We can't seem to find the page you're looking for.</p>
            <Link to="/" className="btn big">Start fresh</Link>
            <br/><br/><br/>
            </>
        </Header>
    )
}

export default PageNotFound;