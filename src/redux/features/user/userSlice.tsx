import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    users: IUser[]
}

const initialState: InitialState = {
    users: []
}

type DraftUser = Pick<IUser, 'name'>

const createUser = (userData: DraftUser): IUser => {
    return {
        Id: nanoid(),
        ...userData
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            const userData = createUser(action.payload)
            state.users.push(userData)
        },
        removeUser: (state, action: PayloadAction<IUser>) => {
            state.users = state.users.filter(user => user.Id !== action.payload.Id)
        }

    }
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer;