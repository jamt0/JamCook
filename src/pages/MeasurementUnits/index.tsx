import React from 'react';
import View from './view';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { TRadio } from 'models';
import { useShowTabs } from 'hooks';

const MeasurementUnits: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();

	useShowTabs(false);

	const defaultValues = '2';

	const { control, handleSubmit } = useForm({ mode: 'onSubmit' });

	const handlerSaveEditButton = (radio: TRadio) => {
		history.goBack();
	};

	const options = [
		{
			description: t('unidades_medida_gramos'),
			value: '1',
		},
		{
			description: t('unidades_medida_onzas'),
			value: '2',
		},
	];

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

export default MeasurementUnits;
