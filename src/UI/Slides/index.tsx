import { FunctionComponent } from 'react';
import { IonSlides } from '@ionic/react';

type Props = {
	options: {
		slidesPerView: number;
		spaceBetween?: number;
	};
	pager?: boolean;
};

const Slides: FunctionComponent<Props> = ({ pager = false, ...props }) => {
	return (
		<IonSlides pager={pager} options={props.options}>
			{props.children}
		</IonSlides>
	);
};

export default Slides;
