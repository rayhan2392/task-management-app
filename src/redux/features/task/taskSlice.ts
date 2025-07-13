import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[];
    filter: 'All' | 'high' | 'medium' | 'low'
}

const initialState: InitialState = {
    tasks: [],
    filter: 'All'
}

type draftTask = Pick<ITask,'title' | 'description' | 'dueDate' | 'priority'> 

const createTask =(taskData:draftTask):ITask=>{
    return{
     Id:nanoid(),
     isCompleted:false,
     ...taskData
    }
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state,action:PayloadAction<draftTask>) => {
            
            const taskData = createTask(action.payload)
              
               
                
        
            state.tasks.push(taskData)
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const {addTask} = taskSlice.actions

export default taskSlice.reducer