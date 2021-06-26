import { FunctionComponent } from 'react';
import { IonFooter, IonToolbar } from '@ionic/react';

type Props = {};

const ScaffoldFooter: FunctionComponent<Props> = (props) => (
	<IonFooter className='ion-no-border'>
		<IonToolbar>
			<div className='p-2 max-w-screen-md mx-auto'>{props.children}</div>
		</IonToolbar>
	</IonFooter>
);
export default ScaffoldFooter;
