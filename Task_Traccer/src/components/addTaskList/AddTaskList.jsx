import axios from 'axios'
import React, { useState } from 'react'

const AddTaskList = ({getApi}) => {

  const [task,setTask] = useState("")
  const [date,setDate] = useState("")



const handleSubmit =(e)=>{

    e.preventDefault();
    const newTask={task,date}
    console.log("task geldi mi:",newTask)
    addNewTask(newTask)
    setTask("")
    setDate("")


}

const url = "https://63516c99dfe45bbd55bfd9a2.mockapi.io/api/tasks";

const addNewTask =async(newTask)=>{

  

  try {

    await axios.post(url,newTask)

    
  } catch (error) {
    console.log(error)
    
  }

  getApi()


}

  return (

    <div>

<form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Task</label>
          <input type="text" className="form-control" onChange={(e)=>setTask(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Date</label>
          <input type="date" className="form-control" onChange={(e)=>setDate(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-primary">Save</button>

      </form>




    </div>
    
  )

}

export default AddTaskList