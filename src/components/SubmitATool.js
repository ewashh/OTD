import React from 'react';
import Header from './common/Header';
import Input from './common/input/Input';

function SubmitATool() {
    return (
      <Header>
        <>
          <h1>Submit a tool</h1>
          <p>If you know a great tool that we don't talk about yet, fill in this form to let us know 👇</p>
          <div className="grid-column">
            <Input type="text" label="Tool name" placeholder="Cool Tool" />
            <Input type="text" label="Tool website" placeholder="https://onlinetool.directory" />
            <Input type="text" label="Logo" />
            <Input type="textarea" label="Short description" />
            <button type="submit" class="btn big">Submit tool</button>
          </div>
          <br/>
          <br/>
          <p>...or drop us a message on <a href="mailto:hi@onlinetooldirectory.com" className="link">hi@onlinetooldirectory.com</a></p>
          <br/><br/><br/>
        </>
      </Header>
    )
}

export default SubmitATool;