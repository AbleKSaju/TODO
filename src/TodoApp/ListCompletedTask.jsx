import React from 'react'

function ListCompletedTask({list,removeTask,index}) {
  return (
    <>
    <div key={index} className="complete-tasks">
    <input className="check" checked disabled type="checkbox"/>
       {list.title}
      <button className="dlt-btn" onClick={()=>{removeTask(index)}}>delete</button>
    </div>
  
    </>  )
}

export default ListCompletedTask