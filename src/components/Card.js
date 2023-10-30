import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoForm from './ToDoForm';
import TaskList from './TaskList';
import logo from '../logo.png';
// import './Card.css'

export default function Card() {

  const [tasks, setTask] = useState([]); // State to store the list of items

  const addTask = (item) => {
    setTask([...tasks, {id: uuidv4(), task: item, isComplete: false}]);
  }

  useEffect(() => {
    console.log(tasks);
  },[tasks])

  const removeTask = (id) => {
    const updatedTasks = tasks.filter(t => t.id !== id);
    setTask(updatedTasks);
    // cara 2: misal tasknya ad 5, remainingTasks = task.filter(t => t.id != 3) -> sisa tasks yg bukan 3
    // setTask(remainingTasks)
  }

  const markComplete = (id) => {
    const updatedTasks = [];
    for (const task of tasks)
    {
      if (task.id === id) {
        task.isComplete = true;
      }
      updatedTasks.push(task);
    }
    setTask(updatedTasks);
  }

  return (
      <div className='container h-full m-auto px-4 pb-20 sm:px-8 md:px-4 lg:px-24 xl:px-40'>
        <img src={logo} className='h-20 w-auto m-auto py-2' alt="Logo"/>
          <div className='w-full min-h-full px-8 py-12 m-auto bg-orange-200 text-center shadow-lg shadow-slate-950/80 rounded-lg md:max-w-lg lg:max-w-xl'>
              <h1 className='uppercase text-3xl font-bold text-orange-600 mb-6'>To Do List</h1>
              <ToDoForm addTaskName={addTask} />
              
              {tasks.map(taskItem => {
                  return (
                      <TaskList id={taskItem.id} task={taskItem.task} isComplete={taskItem.isComplete} markComplete={markComplete} removeTask={removeTask} />
                  )
              })}
          </div>
      </div>
      
  )
}

// export default Card;