import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'global/store';

type TtabsSlice = {
	showTabs: boolean;
};

const initialState: TtabsSlice = {
	showTabs: true,
};

export const TabsSlice = createSlice({
	name: 'tabs',
	initialState,
	reducers: {
		setShowTabs: (state, action: PayloadAction<boolean>) => {
			state.showTabs = action.payload;
		},
	},
});

export const selectTabs = (state: RootState) => state.tabs;
export const { setShowTabs } = TabsSlice.actions;
export default TabsSlice.reducer;
