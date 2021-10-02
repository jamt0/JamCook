import { useAppDispatch } from 'global/hooks';
import { useEffect } from 'react';
import { initializeUserAsync } from 'global/features/userSlice';

const useInitializeUser = () => {
	const dispatch = useAppDispatch();
	return useEffect(() => {
		dispatch(initializeUserAsync());
	}, [dispatch]);
};

export default useInitializeUser;
