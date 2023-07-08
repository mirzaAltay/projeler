import React, { useEffect, useState } from "react";
import AddTaskList from "../components/addTaskList/AddTaskList";
import axios from "axios";
import TaskList from "../components/taskList/TaskList";

const Home = () => {
  const [isopen, setİsopen] = useState(false);
  const [task,setTask] = useState([]);

  const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";

  const getApi = async() => {
    try {
      const {data}=await axios (url)
      

      setTask(data)

      console.log(data)
  
    } catch (error) {
      console.log(error)
      
    }


  }

  useEffect(() => {
    getApi()
 
  }, [])
  

  

  const Toggle = () => {
    setİsopen(!isopen); // true false olayi
  };

  const buttonText = isopen ? "Hide Task Bar" : "Show Add Task Bar";

  return (
    <div>
      <button onClick={Toggle} className="btn btn-danger w-100 m-auto mt-4">
       
        {buttonText}
      </button>

      {isopen && <AddTaskList getApi={getApi}/>}
      <TaskList task={task} getApi={getApi}/>
    </div>
  );
};

export default Home;
