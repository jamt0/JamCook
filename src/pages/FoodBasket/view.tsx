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
import { TFetch, TIngredient } from 'models';
import { ErrorBox, Scaffold, Searcher, Title } from 'UI';

type Props = {
	texts: any;
	fetch: TFetch<TIngredient[]>;
	handlerAddIngredient: (e: any) => void;
};

const Skeleton = () => (
	<Fragment>
		{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x) => (
			<IonItem lines='none'>
				<IonThumbnail slot='start'>
					<IonSkeletonText animated />
				</IonThumbnail>
				<IonLabel>
					<h3>
						<IonSkeletonText animated style={{ width: '50%' }} />
					</h3>
					<p>
						<IonSkeletonText animated style={{ width: '80%' }} />
					</p>
					<p>
						<IonSkeletonText animated style={{ width: '60%' }} />
					</p>
				</IonLabel>
			</IonItem>
		))}
	</Fragment>
);

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Content
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
