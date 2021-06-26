import React, { FunctionComponent } from 'react';
import { TUserSignUp } from 'models';
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
import namesRoutes from 'routes/names';

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
	defaultValues: TUserSignUp;
	signUp: (user: TUserSignUp) => void;
};

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Header title={props.texts('signup_crear_cuenta')}>
			<Scaffold.Header.BackAction />
		</Scaffold.Header>
		<Scaffold.Content margin='md'>
			<Loading isOpen={props.loading} />
			{props.error !== '' && <ErrorBox>{props.error}</ErrorBox>}
			<Input
				control={props.form.control}
				errors={props.form.errors}
				defaultValue={props.defaultValues.name}
				name='name'
				type='name'
				label={props.texts('campo_nombre')}
				rules={props.form.rules.rulesName}
			/>
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
			<Center direction='col' className='mt-8'>
				<Text>{props.texts('signup_acepta_nuestros')}</Text>
				<ButtonLink routerLink={namesRoutes.termsAndConditions}>
					{props.texts('terminos_condiciones')}
				</ButtonLink>
				<Text>{props.texts('y')}</Text>
				<ButtonLink routerLink={namesRoutes.privacyPolicy}>
					{props.texts('politica_privacidad')}
				</ButtonLink>
			</Center>
		</Scaffold.Content>
		<Scaffold.Footer>
			<Button
				onClick={props.form.handleSubmit(props.signUp)}
				disabled={!props.form.isValid || props.form.isSubmitting}
			>
				{props.texts('signup_crear_cuenta')}
			</Button>
			<Center className='py-2'>
				<Text className='mr-1'>{props.texts('signup_tiene_cuenta')}</Text>
				<ButtonLink onClick={() => props.history.replace(namesRoutes.signIn)}>
					{props.texts('signin_iniciar_sesion')}
				</ButtonLink>
			</Center>
		</Scaffold.Footer>
	</Scaffold>
);
export default View;
