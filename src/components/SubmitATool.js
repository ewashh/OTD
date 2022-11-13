import React from 'react';
import Header from './common/Header';
import Input from './common/input/Input';
import Button from './common/button/Button';
import FileUpload from './common/fileUpload/fileUpload';

function SubmitATool() {
  return (
    <Header>
      <>
        <h1>Submit a tool</h1>
        <p>If you know a great tool that we don't talk about yet, fill in this form to let us know 👇</p>
        <div className="grid-column">
          <Input type="text" label="Tool name" placeholder="Cool Tool" required={true} />
          <Input type="text" label="Tool website" placeholder="https://onlinetool.directory" required={true} />
          <FileUpload label="Logo" id="tool-logo-upload" />
          <Input type="textarea" label="Short description" required={true}/>
          <Button type="submit" size="big" text="Submit tool" />
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