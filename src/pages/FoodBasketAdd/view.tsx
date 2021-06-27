import { Fragment, FunctionComponent } from 'react';
import { ItemIngredient } from 'components';
import { ErrorBox, Scaffold, Searcher } from 'UI';
import { checkmarkSharp } from 'ionicons/icons';
import {
	IonFab,
	IonFabButton,
	IonIcon,
	IonItem,
	IonLabel,
	IonSkeletonText,
	IonThumbnail,
} from '@ionic/react';
import { TFetch, TIngredient } from 'models';

type Props = {
	texts: any;
	fetch: TFetch<TIngredient[]>;
	handlerAddIngredient: (e: any) => void;
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
		<Scaffold.Header title={props.texts('agregar_ingredientes')}>
			<Scaffold.Header.BackAction />
		</Scaffold.Header>
		<Scaffold.Content
			fabButton={
				<IonFab vertical='bottom' horizontal='end' slot='fixed'>
					<IonFabButton onClick={props.handlerAddIngredient}>
						<IonIcon icon={checkmarkSharp} />
					</IonFabButton>
				</IonFab>
			}
		>
			<Searcher placeHolder={props.texts('ingredientes_buscas')} />
			{props.fetch.error !== '' && <ErrorBox>{props.fetch.error}</ErrorBox>}
			{props.fetch.loading && <Skeleton />}
			<div className='pb-14'>
				{props.fetch.data.map((ingredient) => {
					return (
						<ItemIngredient
							ingredient={ingredient}
							counter
							check
							key={ingredient.id}
						/>
					);
				})}
			</div>
		</Scaffold.Content>
	</Scaffold>
);
export default View;
