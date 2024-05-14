import React, { useEffect, useState } from "react";
import "./Todo.css";
import ListTask from "./ListTask";
import AddTask from "./AddTask";
import ListCompletedTask from "./ListCompletedTask";

function Todos() {
  let headerDisplayed = false;
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (list.length - count <= 0) {
      document.title = `${0} pending task`;
    } else {
      document.title = `${list.length - count} pending task`;
    }
  });

  const addTask = (title, status, id) => {
    var dupli = list.some(
      (val) => val.title.toLowerCase() === title.toLowerCase()
    );
    if (dupli) {
    } else {
      const newTask = [...list, { title, status, id }];
      setList(newTask);
    }
  };
  const removeTask = (index) => {
    const newTask = [...list];
    newTask.splice(index, 1);
    setList(newTask);
  };
  const completeTask = (id) => {
    var allList = [...list];
    allList.filter((val) => {
      if (val.id === id.id) {
        id.status = true;
        val = id;
        setCount(count + 1);
      }
    });
    setList(allList);
  };
  return (
    <>
      <div className="todo-container">
        <div className="nine">
          <h1>
            TODO APP<span>mr.Perfect</span>
          </h1>
        </div>
        <div className="add-task">
          <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {list.map((val, index) => {
            if (val.status === false) {
              return (
                <ListTask
                  list={val}
                  removeTask={removeTask}
                  index={index}
                  key={index}
                  completeTask={completeTask}
                />
              );
            }
          })}
          {list.map((val, index) => {
            if (val.status) {
              if (!headerDisplayed) {
                headerDisplayed = true;
                return (
                  <div key={index}>
                    <section className="wrapper">
                      <div className="top">COMPLETED</div>
                      <div className="bottom" aria-hidden="true">
                        COMPLETED
                      </div>
                    </section>
                    <ListCompletedTask
                      list={val}
                      removeTask={removeTask}
                      index={index}
                      key={index}
                      // completeTask={completeTask}
                    />
                  </div>
                );
              }
              return (
                <ListCompletedTask
                  list={val}
                  removeTask={removeTask}
                  index={index}
                  key={index}
                  // completeTask={completeTask}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default Todos;
