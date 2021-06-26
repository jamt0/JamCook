import { useAppDispatch } from 'global/hooks';
import { signUpUserAsync } from 'global/features/userSlice';
import { TUserSignUp } from 'models';

const useSignUp = () => {
	const dispatch = useAppDispatch();
	const SignedUp = (user: TUserSignUp): void => {
		dispatch(signUpUserAsync(user));
	};
	return SignedUp;
};

export default useSignUp;
