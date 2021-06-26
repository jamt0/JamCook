import View from './view';
import { useTranslation } from 'react-i18next';
import { rulesEmail, rulesPassword, rulesName } from 'utils/rulesValidation';
import { useShowTabs, useResetAuthError } from 'hooks';
import { useSignUp } from './hooks';
import { useForm } from 'react-hook-form';
import { useAppSelector } from 'global/hooks';
import { selectUser } from 'global/features/userSlice';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SignUp: React.FC = () => {
	useResetAuthError();

	useShowTabs(false);

	const { t } = useTranslation();

	const signUp = useSignUp();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({ mode: 'onChange' });

	const { status, error, isLoggedIn } = useAppSelector(selectUser);

	const defaultValues = { name: '', email: '', password: '' };

	const rules = {
		rulesName: rulesName(t),
		rulesEmail: rulesEmail(t),
		rulesPassword: rulesPassword(t),
	};

	const history = useHistory();

	useEffect(() => {
		if (isLoggedIn) history.push('/');
	}, [isLoggedIn, history]);

	return (
		<View
			texts={t}
			error={error}
			loading={status === 'loading'}
			defaultValues={defaultValues}
			signUp={signUp}
			history={history}
			form={{ control, handleSubmit, errors, isSubmitting, isValid, rules }}
		/>
	);
};

export default SignUp;
