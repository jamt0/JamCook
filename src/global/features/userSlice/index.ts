import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'global/store';

type TUser = {
    id: string,
    name: string,
    email: string,
    pathAvatarImage: string,
}

type TUserSlice = {
    user: TUser,
}

const initialState: TUserSlice = {
    user: {
        id: '',
        name: '',
        email: '',
        pathAvatarImage: '',
    },
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