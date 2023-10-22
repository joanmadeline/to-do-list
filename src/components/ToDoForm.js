import React, { useState } from 'react';

// import './AddTask.css';

export default function ToDoForm({addTaskName}) {

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTaskName(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <input type="text" value={value} onChange={handleChange} required placeholder='Add task here' className='inline text-base w-2/3 py-2 px-4 border border-solid border-orange-600 border-r-0' />
      <button type="submit" className='inline text-base w-1/3 bg-orange-600 text-white py-2 px-4 border border-orange-600'>Add to list</button>
    </form>
  );
}