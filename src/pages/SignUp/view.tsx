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
	errores: string;
	formHook: any;
	rules: any;
	defaultValues: TUserSignUp;
	handlerSignUpButton: (user: TUserSignUp) => void;
};

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Header title={props.texts('signup_crear_cuenta')}>
			<Scaffold.Header.BackAction />
		</Scaffold.Header>
		<Scaffold.Content margin='md'>
			<Loading isOpen={props.loading} />
			{props.errores !== '' && <ErrorBox>{props.errores}</ErrorBox>}
			<Input
				control={props.formHook.control}
				errors={props.formHook.errors}
				defaultValue={props.defaultValues.name}
				name='name'
				type='name'
				label={props.texts('campo_nombre')}
				rules={props.rules.rulesName}
			/>
			<Input
				control={props.formHook.control}
				errors={props.formHook.errors}
				defaultValue={props.defaultValues.email}
				name='email'
				type='email'
				label={props.texts('campo_correo')}
				rules={props.rules.rulesEmail}
			/>
			<Input
				control={props.formHook.control}
				errors={props.formHook.errors}
				defaultValue={props.defaultValues.password}
				name='password'
				type='password'
				label={props.texts('campo_contrasena')}
				rules={props.rules.rulesPassword}
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
				onClick={props.formHook.handleSubmit(props.handlerSignUpButton)}
				disabled={!props.formHook.isValid || props.formHook.isSubmitting}
			>
				{props.texts('signup_crear_cuenta')}
			</Button>
			<Center className='py-2'>
				<Text className='mr-1'>{props.texts('signup_tiene_cuenta')}</Text>
				<ButtonLink routerLink={namesRoutes.signIn}>
					{props.texts('signin_iniciar_sesion')}
				</ButtonLink>
			</Center>
		</Scaffold.Footer>
	</Scaffold>
);
export default View;
