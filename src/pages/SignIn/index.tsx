import React, { useEffect } from 'react';
import View from './view';
import { useTranslation } from 'react-i18next';
import { rulesEmail, rulesPassword } from 'utils/rulesValidation';
import { useShowTabs, useResetAuthError } from 'hooks';
import { useSignIn } from './hooks';
import { useForm } from 'react-hook-form';
import { useAppSelector } from 'global/hooks';
import { selectUser } from 'global/features/userSlice';
import { useHistory } from 'react-router';

const SignIn: React.FC = () => {
	useResetAuthError();

	useShowTabs(false);

	const { t } = useTranslation();

	const signIn = useSignIn();

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
	} = useForm({ mode: 'onChange' });

	const { status, error } = useAppSelector(selectUser);

	const defaultValues = { email: '', password: '' };

	const rules = {
		rulesEmail: rulesEmail(t),
		rulesPassword: rulesPassword(t),
	};

	const history = useHistory();

	useEffect(() => {
		if (status === 'loaded') history.push('/');
	}, [status, history]);

	return (
		<View
			texts={t}
			error={error}
			loading={status === 'loading'}
			defaultValues={defaultValues}
			signIn={signIn}
			form={{ control, handleSubmit, errors, isSubmitting, isValid, rules }}
		/>
	);
};

export default SignIn;
