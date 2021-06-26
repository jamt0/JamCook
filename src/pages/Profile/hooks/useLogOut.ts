import { useAppDispatch } from 'global/hooks';
import { logOut } from 'global/features/userSlice';

const useSigIn = () => {
	const dispatch = useAppDispatch();
	const useLogOut = (): void => {
		dispatch(logOut());
	};
	return useLogOut;
};

export default useSigIn;
