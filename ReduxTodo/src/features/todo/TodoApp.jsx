import {useSelector,useDispatch} from 'react-redux';
import {editTask,deleteTask,addTask,toggleTask, shuffleTask,undoDeleted,randomShuffle} from './TodoSlice'
import { useState } from 'react';
import { useEffect } from 'react';
function TodoApp(){
    const {todos,lastTaskDeleted}=useSelector((state)=>state.todo);
    
    useEffect(()=>{
        console.log(todos)
    },[todos])
    
    const dispatch=useDispatch();
    const [text,setText]=useState('')
    const handleSubmit=(text)=>{
        const trimmedText=text.trim()
        if(trimmedText==''){
            alert('add some tasks not empty')
            return
        }
        const isPresentAlready=todos.some(todo=> todo.task.toLowerCase()=== trimmedText.toLowerCase()) 
        if (isPresentAlready){
            alert('Already Present')
            return
        }
        const newTask={
            id:Date.now(),
            task:trimmedText,
            isCompleted:false
        }
        dispatch(addTask(newTask));
        setText('')
    }

    const handleDelete=(ID)=>{
        const confirmDelete=window.confirm('Are you Sure')
        if (confirmDelete){
            dispatch(deleteTask(ID))
        }   
    }

    const handleEdit=(todo)=>{
        const newTask = prompt('Edit task:', todo.task);
        if (newTask !== null && newTask.trim() !== '') {
            dispatch(editTask({ id: todo.id, newTask: newTask.trim() ,isCompleted:false}));
        }    
    }

    return (
        <>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={()=>handleSubmit(text)}>+</button>
            <ul>
                {
                    todos.map((todo,index)=>(
                        <li key = {todo.id}> 
                            {todo.task} 
                            <button onClick={() => handleEdit(todo)}>Edit</button>
                            <button onClick={()=>handleDelete(todo.id)}>X</button>
                            {todos.length>1 && <button onClick={()=>dispatch(randomShuffle())}>Shuffle</button>}
                            <button onClick={()=>dispatch(toggleTask(todo.id))}>{todo.isCompleted==true?'Not done':'Done'}</button>
                            <button onClick={()=>dispatch(shuffleTask({id:todo.id, move:'up'}))}disabled={index === 0}>Move up</button>
                            <button onClick={()=>dispatch(shuffleTask({id:todo.id,move:'down'}))}disabled={index===todos.length-1}>Move Down</button>
                        </li>
                    ))
                }
            </ul>
            {lastTaskDeleted && (
                <button onClick={()=>dispatch(undoDeleted())}>Undo Deleted</button>
            )}
            {todos.length > 1 && (
                <button onClick={()=>{dispatch(randomShuffle())}}>Random Shuffle</button>
            )}
        </>
    )
}
export default TodoApp