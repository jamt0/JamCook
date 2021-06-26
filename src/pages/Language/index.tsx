import React from 'react';
import View from './view';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { TRadio } from 'models';
import useShowTabs from 'hooks/useShowTabs';

const Lenguage: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();

	useShowTabs(false);

	// const defaultValues = language === "en" ? "2" : "1";
	const defaultValues = '1';

	const { control, handleSubmit } = useForm({
		mode: 'onSubmit',
	});

	const options = [
		{
			description: t('idioma_espanol'),
			value: '1',
		},
		{
			description: t('idioma_ingles'),
			value: '2',
		},
	];

	const handlerSaveEditButton = (radio: TRadio) => {
		// if (radio.radio === "2") setLanguage("en");
		// else setLanguage("es");
		// history.goBack();
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

export default Lenguage;
