import React from 'react'
import "../styles/F.css"


function Form() {
    let [data, setData] = React.useState(0);
  return (
    <div>
       <div className="inputGroup" >
        <input type="text"
        placeholder = "enter a number"
        className='input' 
        onChange={(e) =>{
            console.log(e.target.value);
            setData(e.target.value);
        }}/>
        <br />
        <br />
        <button>Click</button>
</div>
      <h1>
        On Click Change Demo
      </h1>
    </div>
  )
}

export default Form
