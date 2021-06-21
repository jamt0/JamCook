import { FunctionComponent } from 'react';
import {
	Text,
	Center,
	Button,
	ButtonIcon,
	Slides,
	Slide,
	SubTitle,
	ButtonLink,
	Scaffold,
} from 'UI';
import { closeOutline } from 'ionicons/icons';
import Brand from 'components/Brand';
import {
	IonModal,
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
} from '@ionic/react';
import './styles.css';
import { Link } from 'react-router-dom';
import namesRoutes from 'routes/names';

type Props = {
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
	onClickButton: (nameRoute: string) => void;
	texts: any;
	data: {
		image: string;
		subTitle: string;
	}[];
};

const View: FunctionComponent<Props> = (props) => (
	<IonModal isOpen={props.showModal} cssClass='fullscreen'>
		<IonHeader>
			<IonToolbar>
				<IonTitle>{props.texts('welcome.welcome')}</IonTitle>
				<ButtonIcon
					onClick={() => props.setShowModal(false)}
					icon={closeOutline}
					color='primary'
					size='4xl'
					slot='end'
				/>
			</IonToolbar>
		</IonHeader>
		<IonContent className='ion-padding' scrollY={false}>
			<Brand texts={props.texts} />
			<Center className='h-full'>
				<Slides options={{ slidesPerView: 1 }} pager={true}>
					{props.data.map((element, index) => (
						<Slide key={index} className='mb-12'>
							<div className='w-full flex flex-col justify-center'>
								{/* <Image src={element.image} height={96} /> */}
								<Center className='mx-auto w-10/12 h-10/12'>
									<img
										src={element.image}
										alt=''
										className='w-full h-full mx-auto'
									/>
								</Center>
								<SubTitle color='medium'>{element.subTitle}</SubTitle>
							</div>
						</Slide>
					))}
				</Slides>
			</Center>
		</IonContent>
		<Scaffold.Footer>
			<Button onClick={() => props.onClickButton(namesRoutes.signIn)}>
				{props.texts('signin_iniciar_sesion')}
			</Button>
			<Center className='mb-2'>
				<Text className='mr-1'>{props.texts('signin_no_tiene_cuenta')}</Text>
				<ButtonLink onClick={() => props.onClickButton(namesRoutes.signUp)}>
					{props.texts('signup_registrate')}
				</ButtonLink>
			</Center>
		</Scaffold.Footer>
	</IonModal>
);

export default View;
