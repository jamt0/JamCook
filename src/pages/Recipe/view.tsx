import { Fragment, FunctionComponent } from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { TFetch, TRecipeComplete, TValoration } from 'models';
import {
	TitleRecipe,
	ContainerSection,
	Rating,
	Counter,
	ChipGroup,
	CommentaryBox,
	ItemIngredient,
	SliderRecipesSimple,
	ItemStep,
} from 'components';
import {
	Scaffold,
	SubTitle,
	ImageCover,
	Button,
	Avatar,
	Center,
	Text,
	ErrorBox,
	Loading,
} from 'UI';
import {
	timerOutline,
	nutritionOutline,
	arrowRedoOutline,
	bookmarkOutline,
	heartOutline,
	speedometerOutline,
} from 'ionicons/icons';

type Props = {
	texts: any;
	fetch: TFetch<TRecipeComplete | null>;
	portions: any;
	stars: TValoration;
	setPortions: (e: any) => void;
	handlerShare: (e: any) => void;
	handlerLike: (e: any) => void;
	handlerMark: (e: any) => void;
	handlerRecipeMade: (e: any) => void;
	handlerValoration: (e: any, index: number) => void;
};

const Recipe: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Header>
			<Scaffold.Header.BackAction />
			<Scaffold.Header.Actions>
				<IonButton onClick={props.handlerShare}>
					<IonIcon slot='icon-only' icon={arrowRedoOutline} color='dark' />
				</IonButton>
				<IonButton onClick={props.handlerLike}>
					<IonIcon slot='icon-only' icon={heartOutline} color='dark' />
				</IonButton>
				<IonButton onClick={props.handlerMark}>
					<IonIcon slot='icon-only' icon={bookmarkOutline} color='dark' />
				</IonButton>
			</Scaffold.Header.Actions>
		</Scaffold.Header>
		<Scaffold.Content
			banner={
				props.fetch.data !== null && (
					<ImageCover src={props.fetch.data.pathRecipeImage} height={72}>
						<SubTitle color='light' align='center' className='font-extrabold'>
							{props.fetch.data.nameRecipe}
						</SubTitle>
					</ImageCover>
				)
			}
		>
			<Loading isOpen={props.fetch.loading} />
			{props.fetch.error !== '' && <ErrorBox>{props.fetch.error}</ErrorBox>}
			{props.fetch.data !== null && (
				<Fragment>
					{/* Encabezado recipe*/}
					<ContainerSection>
						<Center direction='row' justify='center'>
							<Avatar src={props.fetch.data.pathAvatarImage} size={8} />
						</Center>
						<Text color='dark' align='center' className='font-bold mt-2'>
							{props.fetch.data.nameUser}
						</Text>
						<Rating
							stars={props.fetch.data.valoration}
							size={4}
							color='primary'
							align='center'
						/>
						<Text color='primary' align='center' className='mt-2'>
							{props.fetch.data.valorationNumber +
								' ' +
								props.texts('valoraciones')}
						</Text>
					</ContainerSection>

					{/* Introduccion recipe*/}
					<ContainerSection>
						<Center direction='col'>
							<TitleRecipe>{props.texts('introduccion')}</TitleRecipe>
							<Text align='center'>{props.fetch.data.introduction}</Text>
						</Center>
					</ContainerSection>

					{/* Información recipe en iconos*/}
					<ContainerSection>
						<div className='flex flex-wrap justify-center'>
							<Center direction='row' justify='center'>
								<IonIcon
									icon={nutritionOutline}
									color='dark'
									className='text-lg mr-1'
								/>
								<Text color='medium' align='center' className='mr-2'>
									{props.fetch.data.ingredients.length}{' '}
									{props.texts('ingredientes')}
								</Text>
							</Center>
							<Center direction='row' justify='center'>
								<IonIcon
									icon={speedometerOutline}
									color='dark'
									className='text-lg mr-1'
								/>
								<Text color='medium' align='center' className='mr-2'>
									{props.texts('dificultad')}
								</Text>
							</Center>
							<Center direction='row' justify='center'>
								<IonIcon
									icon={timerOutline}
									color='dark'
									className='text-lg mr-1'
								/>
								<Text color='medium' align='center' className='mr-2'>
									25 minutos
								</Text>
							</Center>
						</div>
					</ContainerSection>

					{/* Porciones recipe*/}
					<ContainerSection>
						<TitleRecipe>
							{props.texts('recipe_porciones_preparar')}
						</TitleRecipe>
						<Counter
							portions={props.portions}
							setPortions={props.setPortions}
						/>
					</ContainerSection>

					{/* Ingredientes recipe*/}

					<ContainerSection>
						<TitleRecipe>{props.texts('ingredientes')}</TitleRecipe>
						{props.fetch.data.ingredients.map((ingredient) => (
							<ItemIngredient ingredient={ingredient} key={ingredient.id} />
						))}
					</ContainerSection>

					{/* Pasos recipe*/}
					<ContainerSection>
						<TitleRecipe>{props.texts('pasos')}</TitleRecipe>
						{props.fetch.data.steps.map((step) => (
							<ItemStep key={step.id}>{step.step}</ItemStep>
						))}
					</ContainerSection>

					{/* Trucos recipe*/}
					<ContainerSection>
						<TitleRecipe>{props.texts('recipe_trucos_consejos')}</TitleRecipe>
						{props.fetch.data.tricks.map((trick) => (
							<ItemStep key={trick.id}>{trick.trick}</ItemStep>
						))}
					</ContainerSection>

					{/* recipe Hecha*/}
					<ContainerSection>
						<TitleRecipe>{props.texts('recipe_hiciste_receta')}</TitleRecipe>
						<Button onClick={props.handlerRecipeMade} color='secondary'>
							{props.texts('recipe_receta_hecha')}
						</Button>
					</ContainerSection>

					{/* Valoración Hecha*/}
					<ContainerSection>
						<TitleRecipe>{props.texts('recipe_gusto_receta')}</TitleRecipe>
						<Rating
							stars={props.stars}
							handlerValoracion={props.handlerValoration}
							align='center'
							size={12}
						/>
					</ContainerSection>

					{/* Comentarios Receta*/}
					<ContainerSection>
						<TitleRecipe>{props.texts('comentarios')}</TitleRecipe>
						<CommentaryBox comments={props.fetch.data.comments} />
					</ContainerSection>

					{/* Tags Receta*/}
					<ContainerSection>
						<TitleRecipe>
							{props.texts('recipe_temas_relacionados')}
						</TitleRecipe>
						<div className='flex flex-wrap place-content-center'>
							<ChipGroup ingredientes={props.fetch.data.tags} />
						</div>
					</ContainerSection>

					{/* Recetas relacionadas*/}
					{props.fetch.data.relatedRecipes.map((relateRecipe, index) => (
						<ContainerSection key={index}>
							<TitleRecipe>{relateRecipe.title}</TitleRecipe>
							<SliderRecipesSimple
								listRecipes={relateRecipe}
								slidesPerView={1.5}
							/>
						</ContainerSection>
					))}

					{/* Guardar Receta*/}
					<ContainerSection>
						<Button>{props.texts('recipe_guardar_receta')}</Button>
					</ContainerSection>
				</Fragment>
			)}
		</Scaffold.Content>
	</Scaffold>
);
export default Recipe;
