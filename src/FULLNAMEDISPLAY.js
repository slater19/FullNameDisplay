import React, { useState, useEffect } from "react";

const Fullnamedisplay = () => {
  
    const [first, setFirst] = React.useState('');
    const [last, setLast] = React.useState('');
    const [full, setFull] = React.useState('');
  
  

  const handleFirst=(event) => {
    setFirst(event.target.value)
  
  }
  const handleLast=(event) => {
    setLast(event.target.value)
  
  }
  const handleSubmit  = (event) => {
  
    event.preventDefault();
    setFull(first + ' ' + last);
    setFirst("")
    setLast("")
  }
 
  

  return (
    <>
        <h1>Full Name Display</h1>
        
        <form id="form-id"onSubmit={handleSubmit} >
        <div>
        <span >First Name:</span>
        <input type="text" value={first} onChange={handleFirst} required/>
        </div>
        <div >
        <span >Last Name:</span>
        <input type="text"  value={last} onChange={handleLast} required/></div >
        
        
        
        <button type='submit' >
        Submit
        </button>
        </form>
        
        {full.length>0?<p>Full Name: {full}</p>:""}
        
        
        </>
  );
};

export default Fullnamedisplay;