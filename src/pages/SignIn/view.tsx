import { FunctionComponent } from 'react';
import namesRoutes from 'routes/names';
import { TUserSignIn } from 'models';
import {
	Scaffold,
	Input,
	Loading,
	Button,
	ErrorBox,
	Center,
	ButtonLink,
	Text,
} from 'UI';

type Props = {
	texts: any;
	loading: boolean;
	error: string;
	form: {
		control: any;
		handleSubmit: any;
		errors: any;
		rules: any;
		isValid: boolean;
		isSubmitting: boolean;
	};
	history: any;
	defaultValues: TUserSignIn;
	signIn: (user: TUserSignIn) => void;
};

const SignIn: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Header title={props.texts('signin_iniciar_sesion')}>
			<Scaffold.Header.BackAction />
		</Scaffold.Header>
		<Scaffold.Content>
			<Loading isOpen={props.loading} />
			{props.error !== '' && <ErrorBox>{props.error}</ErrorBox>}
			<Input
				control={props.form.control}
				errors={props.form.errors}
				defaultValue={props.defaultValues.email}
				name='email'
				type='email'
				label={props.texts('campo_correo')}
				rules={props.form.rules.rulesEmail}
			/>
			<Input
				control={props.form.control}
				errors={props.form.errors}
				defaultValue={props.defaultValues.password}
				name='password'
				type='password'
				label={props.texts('campo_contrasena')}
				rules={props.form.rules.rulesPassword}
			/>
			<Center justify='end' className='mt-6'>
				<ButtonLink routerLink={namesRoutes.forgetPassword}>
					{props.texts('signin_olvido_contraseña')}
				</ButtonLink>
			</Center>
		</Scaffold.Content>
		<Scaffold.Footer>
			<Button
				onClick={props.form.handleSubmit(props.signIn)}
				disabled={!props.form.isValid || props.form.isSubmitting}
			>
				{props.texts('signin_iniciar_sesion')}
			</Button>
			<Center className='py-2'>
				<Text className='mr-1'>{props.texts('signin_no_tiene_cuenta')}</Text>
				<ButtonLink onClick={() => props.history.replace(namesRoutes.signUp)}>
					{props.texts('signup_registrate')}
				</ButtonLink>
			</Center>
		</Scaffold.Footer>
	</Scaffold>
);
export default SignIn;
