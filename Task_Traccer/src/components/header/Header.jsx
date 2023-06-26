import React from 'react'
import TaskPng from "../../assets/TaskPng"


const Header = () => {
  return (
    <div className="d-flex justify-content-around align-items-center">

         <TaskPng/>
         <h1 className='text-warning'  >TASK TRACKER</h1>

    </div>
  )
}

export default Header