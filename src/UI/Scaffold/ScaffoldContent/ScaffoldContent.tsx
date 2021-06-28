import { Fragment, FunctionComponent } from 'react';
import {
	IonContent,
	IonInfiniteScroll,
	IonInfiniteScrollContent,
	IonRefresher,
	IonRefresherContent,
} from '@ionic/react';
import { chevronDownCircleOutline } from 'ionicons/icons';
import { TInfiniteScroll, TRefresh } from 'models';

type Props = {
	fabButton?: React.ReactNode;
	height?: 'auto' | 'full' | undefined;
	margin?: 'md' | 'lg' | undefined;
	banner?: React.ReactNode;
	refresher?: TRefresh;
	infinite?: TInfiniteScroll;
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
		{props.infinite ? (
			<IonInfiniteScroll threshold='100px' onIonInfinite={props.infinite}>
				<IonInfiniteScrollContent></IonInfiniteScrollContent>
			</IonInfiniteScroll>
		) : (
			<Fragment />
		)}
	</IonContent>
);
export default ScaffoldContent;
