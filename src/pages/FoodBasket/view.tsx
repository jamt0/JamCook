import { Fragment, FunctionComponent } from 'react';
import {
	IonFab,
	IonFabButton,
	IonIcon,
	IonItem,
	IonLabel,
	IonSkeletonText,
	IonThumbnail,
} from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import { ItemIngredient } from 'components';
import { TFetch, TIngredient, TRefresh } from 'models';
import { ErrorBox, Scaffold, Searcher, Title } from 'UI';

type Props = {
	texts: any;
	fetch: TFetch<TIngredient[]>;
	handlerAddIngredient: (e: any) => void;
	doRefresh: TRefresh;
};

const Skeleton = () => (
	<Fragment>
		{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
			<IonItem lines='none' key={x}>
				<IonThumbnail slot='start'>
					<IonSkeletonText animated />
				</IonThumbnail>
				<IonLabel>
					<IonSkeletonText animated style={{ width: '50%' }} />
					<IonSkeletonText animated style={{ width: '80%' }} />
					<IonSkeletonText animated style={{ width: '60%' }} />
				</IonLabel>
			</IonItem>
		))}
	</Fragment>
);

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Content
			refresher={props.doRefresh}
			fabButton={
				<IonFab vertical='bottom' horizontal='end' slot='fixed'>
					<IonFabButton onClick={props.handlerAddIngredient}>
						<IonIcon icon={addOutline} />
					</IonFabButton>
				</IonFab>
			}
		>
			<Title color='medium'>{props.texts('page_almacen')}</Title>
			<Searcher placeHolder={props.texts('ingredientes_buscas')} />
			{props.fetch.error !== '' && <ErrorBox>{props.fetch.error}</ErrorBox>}
			{props.fetch.loading && <Skeleton />}
			<div className='pb-14'>
				{props.fetch.data.map((ingredient) => {
					return <ItemIngredient ingredient={ingredient} key={ingredient.id} />;
				})}
			</div>
		</Scaffold.Content>
	</Scaffold>
);
export default View;
