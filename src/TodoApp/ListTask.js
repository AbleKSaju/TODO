import React from "react";

function ListTask({list,removeTask,index,completeTask}) {
    return (
    <>
    <div key={index} className="list-tasks">
    <input onClick={()=>{completeTask(list)}} className="check" type="checkbox"/>
       {list.title}
      <button className="dlt-btn" onClick={()=>{removeTask(index)}}>delete</button>
    </div>
  
    </>
  );
}

export default ListTask;
