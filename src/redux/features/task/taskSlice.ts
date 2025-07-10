import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


interface InitialState {
    tasks: ITask[];
    filter: 'All' | 'High' | 'Medium' | 'low'
}

const initialState: InitialState = {
    tasks: [
        {
            Id: 'aljdfaldf',
            title: 'Front end devs',
            description: 'ladjfalf',
            dueDate: '2025-8-12',
            isCompleted: false,
            priority: 'high',

        },
        {
            Id: 'aljdfaldf',
            title: 'Front end devs',
            description: 'ladjfalf',
            dueDate: '2025-8-12',
            isCompleted: false,
            priority: 'high',

        },


    ],
    filter: 'All'
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {

    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}
export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export default taskSlice.reducer