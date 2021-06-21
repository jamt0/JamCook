import { FunctionComponent } from 'react';
import { IonSlide } from '@ionic/react';

type Props = {
  className?: string,
};

const Slide: FunctionComponent<Props> = ({ className = '', ...props }) => (
	<IonSlide className={className}>{props.children}</IonSlide>
);
export default Slide;
