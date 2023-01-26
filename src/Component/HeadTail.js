import React, { useState } from "react";
import { toast } from "react-toastify";
import DisplayTable from './DisplayTable';
export default function HeadTail() {
  const [value, setValue] = useState([]);
  const [select, setSelect] = useState("");

  const readValue = (e) => {
    setSelect(e.target.value);
  };

  const submitData = () => {
    if (select === "") {
      toast.error('OppS! please selected the value')
      return;
    }

    if (value.length === 0) {
      setValue(() => [[select]]);
      setSelect("");
      return;
    }

    const mainArray = value[value.length - 1];
    console.log("mainArray" , mainArray)
    const char = mainArray[mainArray.length - 1];
    console.log("char" , char)
    const copyArray = [...value];
    console.log("copyArray" , copyArray);
   

    char === select ?  copyArray[copyArray.length - 1] = [...copyArray[copyArray.length - 1], select]: copyArray.push([select]);
    setValue(copyArray);
    setSelect("");
  };
  return (
    <div className="container mt-5 " >
      
      <div className="row">
      <div className="text-center ">
     
      </div>
        <div className="card offset-md-4 col-md-4 ">
       <div className="input-group mt-3">
       <select className="form-select" onChange={readValue} value={select}>
        <option value="">Select Value</option>
        <option value="H"> H </option>
        <option value="T"> T </option>
      </select>
       </div>
      <br />
      <button onClick={submitData} className='btn btn-danger'>Submit</button>
             
      <div style={{display:"flex" , gap:"10px",margin:'20px'}}>
        {value.map((item, index) => (
          <DisplayTable item={item} key={index} />
        ))}
      </div>
        </div>
      
      </div>
      
    </div>
  );
}
