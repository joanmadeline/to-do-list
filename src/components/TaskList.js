import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


export default function TaskList({id, task, isComplete, markComplete, removeTask}) {

    const handleDelete = (e) => {
        e.preventDefault();
        removeTask(id)
    }

    const handleComplete = (e) => {
        e.preventDefault();
        markComplete(id);
    }

    return (
        <div key={id} className="w-full m-auto text-left bg-orange-600 border border-solid border-orange-600 rounded-md text-base py-2 px-4 mb-4">
            {/* <p>{item}</p> */}
            <p className={`task-name inline text-white${isComplete ? " line-through" : ""}`}>{task}</p>
            <div className='inline float-right'>
                <CheckIcon onClick={handleComplete} fontSize='small' className='cursor-pointer text-white mr-2' />
                <DeleteIcon onClick={handleDelete} fontSize="small" className="cursor-pointer text-white" />
            </div>
            
            {/* <EditIcon fontSize="small" className='cursor-pointer inline float-right mr-2 text-white' /> */}
        </div>
    )
}