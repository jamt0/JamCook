import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'global/features/userSlice';
import UIReducer from 'global/features/UISlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		UI: UIReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
