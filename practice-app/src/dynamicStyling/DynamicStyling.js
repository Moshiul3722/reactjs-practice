import React, { useEffect, useState } from 'react'

import './dynamicStyle.css'

const DynamicStyling = () => {
    const error = false;
    const [name, setName] = useState("");
    const [validInput, setValidInput] = useState(true);

    useEffect(()=>{
        if(name.length < 2){
            setValidInput(false);
        }else{
            setValidInput(true);
        }
    },[name])


    const handleChange = (e) => {
        setName(e.target.value);
        // console.log(name);  
    }


    const inlineStyle={
        marginLeft:"20px",
        fontSize:"20px"
    }

    return (
        <div>
            <h1>Dynamic Styling</h1>
            <h2 style={
                {
                    color: error ? 'red' : 'green',
                    backgroundColor: error ? '#94a3b8' : '#f87171',
                    padding: "20px 50px",
                    marginBottom: "50px"
                }
            }>Welcome to this Dynamic Style</h2>
            <p style={inlineStyle}>Using inline style</p>
            <input type="text" onChange={handleChange} style={
                {
                    background:validInput?'#06b6d4':'#16a34a',
                    outline:'none',
                    padding: '15px',
                    border:"none",
                    fontSize:"18px",
                    borderRadius:"5px",
                    marginLeft:"20px",
                    color:"#fff",
                    fontWeight:"bold",
                    marginBottom: "50px"
                }
                }/>
                <p className='headingStyle'>Using Class style</p>
                <input type="text" onChange={handleChange} className= { `inputStyle ${validInput ? "valideColor":"invalidColor"}`}/>
        </div>
    )
}

export default DynamicStyling