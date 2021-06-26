import { useState } from 'react';
import View from './view';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { rulesVerificationCode } from 'utils/rulesValidation';
import Server from 'server';
import namesRoutes from 'routes/names';
import { useShowTabs } from 'hooks';

const ForgetPasswordValidate: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();
	const [errores, setErrores] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	useShowTabs(false);

	const defaultValues = { VerificationCode: '' };

	const {
		control,
		handleSubmit,
		formState: { isSubmitting, isValid, errors },
	} = useForm({
		mode: 'onChange',
	});

	const handlerForgetPasswordValidateButton = async (verificationCode: any) => {
		const errorValidateVerificationCode = await Server.validateVerificationCode(
			verificationCode
		);
		if (errorValidateVerificationCode.data.error !== null) {
			setErrores(errorValidateVerificationCode.data.error);
			setLoading(false);
		} else {
			history.replace(namesRoutes.newPassword);
			setLoading(false);
		}
	};

	const handlerResendMailButton = (e: any) => {
		e.preventDefault();
	};

	const rules = {
		rulesVerificationCode: rulesVerificationCode(t),
	};

	return (
		<View
			rules={rules}
			texts={t}
			errores={errores}
			loading={loading}
			defaultValues={defaultValues}
			handlerResendMailButton={handlerResendMailButton}
			handlerForgetPasswordValidateButton={handlerForgetPasswordValidateButton}
			formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
		/>
	);
};

export default ForgetPasswordValidate;
