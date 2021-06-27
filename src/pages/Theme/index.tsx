import React from 'react';
import View from './view';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { TRadio } from 'models';
import { useShowTabs } from 'hooks';
import { useAppDispatch, useAppSelector } from 'global/hooks';
import { selectUI, setTheme } from 'global/features/UISlice';

const Theme: React.FC = () => {
	const history = useHistory();

	const { t } = useTranslation();

	useShowTabs(false);

	const { theme } = useAppSelector(selectUI);

	const dispatch = useAppDispatch();

	const defaultValues = theme === 'dark' ? '2' : '1';

	const { control, handleSubmit } = useForm({ mode: 'onSubmit' });

	const options = [
		{
			description: t('tema_claro'),
			value: '1',
		},
		{
			description: t('tema_oscuro'),
			value: '2',
		},
	];

	const handlerSaveEditButton = (radio: TRadio) => {
		if (radio.radio === '2') dispatch(setTheme('dark'));
		else dispatch(setTheme('light'));
		history.goBack();
	};

	return (
		<View
			texts={t}
			formHook={{ control, handleSubmit }}
			defaultValues={defaultValues}
			options={options}
			handlerSaveEditButton={handlerSaveEditButton}
		/>
	);
};

export default Theme;
