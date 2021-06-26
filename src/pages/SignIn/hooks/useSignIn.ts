import { useAppDispatch } from 'global/hooks';
import { signInUserAsync } from 'global/features/userSlice';
import { TUserSignIn } from 'models';

const useSigIn = () => {
	const dispatch = useAppDispatch();
	const signIn = (user: TUserSignIn): void => {
		dispatch(signInUserAsync(user));
	};
	return signIn;
};

export default useSigIn;
