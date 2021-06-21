import { IonButtons, IonButton, IonIcon } from '@ionic/react';
import { FunctionComponent } from 'react';

type Props = {
	onClick: (e?: any) => void;
	icon: any;
	color?: string;
	size: string;
	slot?: string;
};

const ButtonIcon: FunctionComponent<Props> = ({ slot = 'start', ...props }) => (
	<IonButtons slot={slot}>
		<IonButton onClick={props.onClick}>
			<IonIcon
				icon={props.icon}
				color={props.color}
				className={`text-${props.size}`}
			/>
		</IonButton>
	</IonButtons>
);
export default ButtonIcon;
