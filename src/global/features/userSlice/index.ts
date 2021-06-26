import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'global/store';
import { TUserSignIn, TUserSignUp } from 'models';
import Server from 'server';

type TUser = {
	id: string;
	name: string;
	email: string;
	pathAvatarImage: string;
};

type TUserSlice = {
	status: 'loaded' | 'loading' | 'error' | 'idle';
	error: string;
	isLogin: boolean;
	user: TUser;
};

const initialState: TUserSlice = {
	status: 'idle',
	error: '',
	isLogin: false,
	user: {
		id: '',
		name: '',
		email: '',
		pathAvatarImage: '',
	},
};

export const signUpUserAsync = createAsyncThunk(
	'user/signupUserAsync',
	async (user: TUserSignUp, thunkAPI) => {
		try {
			const response = await Server.signUp(user);
			const { data } = response;
			console.log('response', response);
			if (response.status === 200) {
				console.log('accessToken', data.accessToken);
				localStorage.setItem('accessToken', data.accessToken);
				return data;
			}
			console.log('Error diferente 200', data.error);
			const error: string = data.error;
			return thunkAPI.rejectWithValue(error);
		} catch (e) {
			console.log('Catch', e.response.data.error);
			const error: string = e.response.data.error;
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const signInUserAsync = createAsyncThunk(
	'user/signInUserAsync',
	async (user: TUserSignIn, thunkAPI) => {
		try {
			const response = await Server.signIn(user);
			const { data } = response;
			console.log('response', response);
			if (response.status === 200) {
				console.log('accessToken', data.accessToken);
				localStorage.setItem('accessToken', data.accessToken);
				return data;
			}
			console.log('Error diferente 200', data.error);
			const error: string = data.error;
			return thunkAPI.rejectWithValue(error);
		} catch (e) {
			console.log('Catch', e.response.data.error);
			const error: string = e.response.data.error;
			return thunkAPI.rejectWithValue(error);
		}
	}
);

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		resetError: (state) => {
			state.error = '';
		},
	},
	extraReducers: (builder) => {
		builder.addCase(signUpUserAsync.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(signUpUserAsync.fulfilled, (state, action) => {
			state.status = 'loaded';
			state.isLogin = true;
			state.user = action.payload.user;
		});
		builder.addCase(signUpUserAsync.rejected, (state, action) => {
			state.status = 'error';
			state.error = String(action.payload);
		});
		builder.addCase(signInUserAsync.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(signInUserAsync.fulfilled, (state, action) => {
			state.status = 'loaded';
			state.isLogin = true;
			state.user = action.payload.user;
		});
		builder.addCase(signInUserAsync.rejected, (state, action) => {
			state.status = 'error';
			state.error = String(action.payload);
		});
	},
});

export const selectUser = (state: RootState) => state.user;
export const { resetError } = UserSlice.actions;
export default UserSlice.reducer;
