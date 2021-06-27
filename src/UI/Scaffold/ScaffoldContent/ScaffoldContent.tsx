import { Fragment, FunctionComponent } from 'react';
import { IonContent, IonRefresher, IonRefresherContent } from '@ionic/react';
import { chevronDownCircleOutline } from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';

type Props = {
	fabButton?: React.ReactNode;
	height?: 'auto' | 'full' | undefined;
	margin?: 'md' | 'lg' | undefined;
	banner?: React.ReactNode;
	refresher?: (event: CustomEvent<RefresherEventDetail>) => void;
};

const ScaffoldContent: FunctionComponent<Props> = ({
	height = 'auto',
	margin = 'lg',
	...props
}) => (
	<IonContent>
		{props.refresher ? (
			<IonRefresher slot='fixed' onIonRefresh={props.refresher}>
				<IonRefresherContent
					pullingIcon={chevronDownCircleOutline}
				></IonRefresherContent>
			</IonRefresher>
		) : (
			<Fragment />
		)}
		{props.banner ?? <Fragment />}
		<div className={`max-w-screen-${margin} mx-auto p-2 h-${height}`}>
			{props.children}
		</div>
		{props.fabButton ?? <Fragment />}
	</IonContent>
);
export default ScaffoldContent;
