import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low'
}

const initialState: InitialState = {
    tasks: [],
    filter: 'all'
}

type draftTask = Pick<ITask, 'title' | 'description' | 'dueDate' | 'priority'>

const createTask = (taskData: draftTask): ITask => {
    return {
        Id: nanoid(),
        isCompleted: false,
        ...taskData,
         dueDate: new Date(taskData.dueDate).toISOString()
    }
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<draftTask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        },
        taskCompletionToggle: (state, action: PayloadAction<string>) => {
            state.tasks.forEach(task => {
                if (task.Id === action.payload) {
                    task.isCompleted = !task.isCompleted;
                }


            })
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.Id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<'all' | 'medium' | 'high' | 'low'>) => {
            state.filter = action.payload
        }

    }
})
export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter
    
    if (filter === 'low') {
        const lowTasks =state.todo.tasks.filter((task) => task.priority === 'low')
        console.log(lowTasks)
        return lowTasks
    }
     else if (filter === 'medium') {
        return state.todo.tasks.filter((task) => task.priority === 'medium')
    } else if (filter === 'high') {
        return state.todo.tasks.filter((task) => task.priority === 'high')
    } else {
         return state.todo.tasks
    }
       
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}
export const { addTask, taskCompletionToggle, deleteTask,updateFilter } = taskSlice.actions

export default taskSlice.reducer