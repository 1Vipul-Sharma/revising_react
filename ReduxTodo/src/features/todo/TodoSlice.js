import {createSlice} from '@reduxjs/toolkit'

const initialState={
    todos:[],
    lastTaskDeleted : null
}
const TodoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTask:(state,action)=>{
            console.log('ADD task called',state.todos);

            state.todos.push(action.payload);
        },
        deleteTask:(state,action)=>{
            console.log('delete task called');
            const index=state.todos.findIndex((todo)=> todo.id == action.payload)
            if (index!=-1){
                const deletedTask=state.todos[index];
                state.lastTaskDeleted={task:deletedTask,idx:index};
                state.todos=state.todos.filter((todo)=>todo.id!=action.payload)
            }
        },
        undoDeleted:(state)=>{
            console.log('called undodeleted',state.todos,state.lastTaskDeleted);
            const {task,idx}=state.lastTaskDeleted || {};
            if(idx!=-1){
                state.todos.splice(idx,0,task);
                state.lastTaskDeleted=null;
            }
        },
        editTask: (state, action) => {
            const { id, newTask } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
              todo.task = newTask;
            }
          },
          toggleTask: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
            // const todo=action.payload
              todo.isCompleted = !todo.isCompleted;
              if (todo.isCompleted) {
                if (!todo.task.includes('✅')) {
                  todo.task = '✅ ' + todo.task;
                }
              } else {
                // Remove ✅ if present
                todo.task = todo.task.replace('✅ ', '');
              }
            }
          }
          ,
        shuffleTask:(state,action)=>{
            const {id,move}=action.payload
            console.log('Move task',move);
            const idx=state.todos.findIndex((todo)=>todo.id===id);
            if(move==='up'){
                [state.todos[idx-1],state.todos[idx]]=[state.todos[idx],state.todos[idx-1]]
            }
            if(move==='down'){
                [state.todos[idx+1],state.todos[idx]]=[state.todos[idx],state.todos[idx+1]]
            }
        },
        randomShuffle:(state)=>{
            console.log('random shiffle')
             // Fisher-Yates shuffle algorithm
            for (let i = state.todos.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [state.todos[i], state.todos[j]] = [state.todos[j], state.todos[i]];
            }
        }
    }
})

export const {addTask,deleteTask,editTask,toggleTask,shuffleTask,undoDeleted,randomShuffle} = TodoSlice.actions;
export default TodoSlice.reducer;