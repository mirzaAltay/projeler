import React from 'react'

const TaskList = ({task}) => {
  console.log(task)

  return (
    <div>

      {task.map((item)=>{
        const{id,task,date} = item
        return (
          <div key={id} > 
           
          <div className='mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2'>
            
            <h1>{task}</h1>
            <p>{date}</p>
          </div>

          </div>
        )
      })}


    </div>
  )
}

export default TaskList