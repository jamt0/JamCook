import { useAppDispatch } from 'global/hooks';
import { setTheme } from 'global/features/UISlice';
import { useCallback, useEffect } from 'react';
import { TTheme } from 'models';

const useSetTheme = () => {
	const dispatch = useAppDispatch();
	const isTheme = useCallback(
		(theme: string | null): theme is TTheme =>
			theme === 'dark' || theme === 'light',
		[]
	);
	return useEffect(() => {
		const theme: string | null = localStorage.getItem('theme');
		if (isTheme(theme)) dispatch(setTheme(theme));
	}, [dispatch, isTheme]);
};

export default useSetTheme;
