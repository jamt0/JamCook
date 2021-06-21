import { FunctionComponent, useState } from 'react';
import View from './view';
import { useTranslation } from 'react-i18next';
import welcomeOne from 'assets/WelcomeImages/1.jpg';
import welcomeTwo from 'assets/WelcomeImages/2.jpg';
import welcomeThree from 'assets/WelcomeImages/3.jpg';
import welcomeFour from 'assets/WelcomeImages/4.jpg';
import { useHistory } from 'react-router';

type Props = {};

const Welcome: FunctionComponent<Props> = () => {
	const [showModal, setShowModal] = useState(true);
	const { t } = useTranslation();
	const history = useHistory();
	const onClickButton = (nameRoute: string) => {
		history.push(nameRoute);
		setShowModal(false);
	};
	const data = [
		{
			image: welcomeOne,
			subTitle: t('welcome.look_recipes'),
		},
		{
			image: welcomeTwo,
			subTitle: t('welcome.share_recipes'),
		},
		{
			image: welcomeThree,
			subTitle: t('welcome.customize_preferences'),
		},
		{
			image: welcomeFour,
			subTitle: t('welcome.discover_recipes'),
		},
	];
	return (
		<View
			setShowModal={setShowModal}
			showModal={showModal}
			onClickButton={onClickButton}
			data={data}
			texts={t}
		/>
	);
};

export default Welcome;
