import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'global/store';
import { TTheme } from 'models';

type TUISlice = {
	showTabs: boolean;
	theme: TTheme;
};

const initialState: TUISlice = {
	showTabs: true,
	theme: 'light',
};

export const UISlice = createSlice({
	name: 'tabs',
	initialState,
	reducers: {
		setShowTabs: (state, action: PayloadAction<boolean>) => {
			state.showTabs = action.payload;
		},
		setTheme: (state, action: PayloadAction<TTheme>) => {
			const theme: TTheme = action.payload;
			localStorage.setItem('theme', theme);
			state.theme = action.payload;
			if (theme === 'dark') {
				document.body.classList.add('dark');
				document.body.classList.add('bg-black');
				document.body.classList.remove('bg-white');
				return;
			}
			document.body.classList.add('bg-white');
			document.body.classList.remove('bg-black');
			document.body.classList.remove('dark');
		},
	},
});

export const selectUI = (state: RootState) => state.UI;
export const { setShowTabs, setTheme } = UISlice.actions;
export default UISlice.reducer;
