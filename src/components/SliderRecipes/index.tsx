import { Fragment, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Text, Slides, Slide, SubTitle, Center, ImageCover } from 'UI';
import { useTranslation } from 'react-i18next';
import { TRecipe } from 'models';
import namesRoutes from 'routes/names';

type Props = {
	slidesPerView: number;
	listRecipes: {
		id: string;
		nameListRecipes: string;
		recipes: TRecipe[];
	};
};

const SliderRecipes: FunctionComponent<Props> = (props) => {
	const { t } = useTranslation();

	const slideOpts = {
		slidesPerView: props.slidesPerView,
		spaceBetween: 20,
	};

	return (
		<Fragment>
			<div className='grid grid-flow-col gap-8 mb-3 mt-6'>
				<Center direction='row' justify='start'>
					<SubTitle
						color='dark'
						align='left'
						className='truncate font-semibold'
					>
						{props.listRecipes.nameListRecipes}
					</SubTitle>
				</Center>
				<Center direction='row' justify='end'>
					<Text color='primary' align='right'>
						<Link to={namesRoutes.listRecipes + props.listRecipes.id}>
							{t('ver_mas')}
						</Link>
					</Text>
				</Center>
			</div>
			<Slides options={slideOpts}>
				{props.listRecipes.recipes.map((recipe, index) => {
					return (
						<Slide key={index}>
							<Link to={namesRoutes.recipe + recipe.id} className='w-full'>
								<div className='flex flex-col'>
									<ImageCover
										src={recipe.pathRecipeImage}
										height={44}
										fullCover={true}
										rounded
									/>
									<Text color='dark' align='left' className='mt-2 text-base'>
										{recipe.name}
									</Text>
								</div>
							</Link>
						</Slide>
					);
				})}
			</Slides>
		</Fragment>
	);
};

export default SliderRecipes;
