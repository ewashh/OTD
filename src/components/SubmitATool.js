import React from 'react';
import Header from './common/Header';
import BlogTile from './common/BlogTile';

function SubmitATool() {
    return (
            <Header>
              <>
                <h1>Submit a tool</h1>
                <p>If you know a great tool that we don't talk about yet, drop us a message on</p>
                <a href="mailto:hi@onlinetooldirectory.com" className="link">hi@onlinetooldirectory.com</a>
              </>
            </Header>
    )
}

export default SubmitATool;