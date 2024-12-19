import React, { useState } from "react"
import "./fileUpload.scss";
import Button from "../button/Button";

export default function FileUpload({ label, required, buttonText, fileNamePlaceholder, id }){

  const [fileName, setFileName] = useState(fileNamePlaceholder);

  const handleInputChange = (event) => {
    console.log(event.target.files[0].name);
    setFileName(event.target.files[0].name);
  }                                

  return (
    <div className="component-file-upload">
      <div className="label">{label}{required && '*'}</div>
      <div className="file-upload-wrapper">
        <input type="file" id={id} onChange={handleInputChange} />
        <Button size="small"><label for={id}>{buttonText}</label></Button>
        <small>{fileName}</small>   
      </div>
    </div>
  );
}

FileUpload.defaultProps = {
  buttonText: 'Upload file',
  fileNamePlaceholder: 'No file chosen'
};