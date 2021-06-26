import React from 'react';
import View from './view';
import { useShowTabs } from 'hooks';

const AboutUs: React.FC = () => {
	useShowTabs(false);

	return <View />;
};

export default AboutUs;
