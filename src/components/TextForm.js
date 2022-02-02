import React, {useState} from 'react';
// import PropTypes from "prop-types";


export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log('Uppercase was converted');
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UpperCase!', 'success');
  }
  
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase!', 'success');
  }

  const handleOnChange = (event)=>{
  // console.log('On Change');
    setText(event.target.value);
  }

  const handleCopy = ()=>{
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert('Copied to Clipboard!', 'success');
  }

  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('Resolved Extra Spaces!', 'success');
  }

  const handleClear = ()=>{
    setText('');
    props.showAlert('TextArea cleared!', 'success');
  }

  const [text, setText] = useState("Enter your text here"); 
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClear}>Clear</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.length===0 ? 0 : text.charAt(text.length-1)===' '?text.split(" ").length-1:text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to Preview it here"}</p>
    </div>
    </>
  );
} 

// TextForm.propTypes = {
//     heading: PropTypes.string
// };
