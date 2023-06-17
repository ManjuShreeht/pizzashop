import React from 'react'

function InputForm({htmlFor,labelText,type,name,value,handleChange}) {
  return (
    <>
   <div className="mb-3">
  <label htmlFor={htmlFor} className="form-label">{labelText}</label>
  <input type={type}
   className="form-control"
    id="exampleInputEmail1"
     aria-describedby="emailHelp" 
     name={name}
     value={value}
     onChange={handleChange}/>

</div>

    </>
  )
}

export default InputForm;
