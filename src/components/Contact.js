import React from 'react';
import Header from './common/Header';

function Contact() {
    return (
      <Header>
        <>
          <h1>Say hi</h1>
          <p>If you'd like to get in touch, drop us a message on</p>
          <a href="mailto:hi@onlinetooldirectory.com" className="link">hi@onlinetooldirectory.com</a>
          <br/><br/><br/>
        </>
      </Header>
    )
}

export default Contact;