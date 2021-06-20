import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'global/store';

type TUser = {
    name: string
}

type TUserSlice = {
    notes: TUser[],
}

const initialState: TUserSlice = {
    notes: [],
};

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            
        }
    }
})

export const selectUser = (state: RootState) => state.user;
export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;