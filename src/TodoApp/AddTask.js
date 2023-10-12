import React, { useState } from "react";

const AddTask=({addTask}) =>{
    const [value,setValue]=useState("")
    const addItem=()=>{
        if(value.length){
            addTask(value,false,Date.now())
            setValue("")
        }
    }

  return (
    <>
      <div className="input-Container">
        <input type="text" className="input" placeholder="Add Task..." value={value} onChange={(e)=>{setValue(e.target.value)}}/>
        <button className="add-btn" onClick={addItem}>ADD </button>
      </div>
    </>
  );
}

export default AddTask;
