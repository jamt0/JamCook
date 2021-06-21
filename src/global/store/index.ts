import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'global/features/userSlice';
import tabsReducer from 'global/features/tabsSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		tabs: tabsReducer,
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
