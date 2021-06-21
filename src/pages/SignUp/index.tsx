import View from './view';
import { useTranslation } from 'react-i18next';
import { rulesEmail, rulesPassword, rulesName } from 'utils/rulesValidation';
import { TUserSignUp } from 'models';
import namesRoutes from 'routes/names';
import useShowTabs from 'hooks/useShowTabs';
import useForm from 'hooks/useForm';

const SignUp: React.FC = () => {
	const { t } = useTranslation();

	useShowTabs(false);

	const { formHook, errores, loading, handler } = useForm<TUserSignUp>({
		dataFech: () => {},
		route: namesRoutes.home,
	});

	const defaultValues = { name: '', email: '', password: '' };

	const rules = {
		rulesName: rulesName(t),
		rulesEmail: rulesEmail(t),
		rulesPassword: rulesPassword(t),
	};

	return (
		<View
			rules={rules}
			texts={t}
			errores={errores}
			loading={loading}
			defaultValues={defaultValues}
			handlerSignUpButton={handler}
			formHook={formHook}
		/>
	);
};

export default SignUp;
