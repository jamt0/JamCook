import { TOptionsAges, TOptionsGender } from 'models';
import { FunctionComponent } from 'react';
import {
	Scaffold,
	Center,
	Loading,
	Button,
	Avatar,
	ErrorBox,
	Select,
	Input,
} from 'UI';

type Props = {
	texts: any;
	loading: boolean;
	error: string;
	form: any;
	rules: any;
	defaultValues: any;
	optionsGenders: TOptionsGender;
	optionsAges: TOptionsAges;
	handlerSaveEditButton: (user: any) => void;
	fileChangedHandler: (e: any) => void;
};

const View: FunctionComponent<Props> = (props) => (
	<Scaffold>
		<Scaffold.Header title={props.texts('perfil_editar')}>
			<Scaffold.Header.BackAction />
		</Scaffold.Header>
		<Scaffold.Content>
			<Loading isOpen={props.loading} />
			{props.error !== '' && <ErrorBox>{props.error}</ErrorBox>}
			<Center direction='col' className='mt-8'>
				<Avatar src={''} size={20} sizeResponsive={60} />
				<div className='mt-4'>
					<label className='' htmlFor='inputAvatar'>
						{props.texts('perfil_edit_cambiar_avatar')}
					</label>
				</div>
			</Center>
			<input
				type='file'
				accept='.jpg, .jpeg, .png'
				id='inputAvatar'
				onChange={props.fileChangedHandler}
				className='hidden'
			/>
			<Input
				control={props.form.control}
				errors={props.form.errors}
				defaultValue={props.defaultValues.name}
				name='name'
				type='name'
				label={props.texts('campo_nombre')}
				rules={props.rules.rulesName}
			/>
			<Input
				control={props.form.control}
				errors={props.form.errors}
				defaultValue={props.defaultValues.email}
				name='email'
				type='email'
				label={props.texts('campo_correo')}
				rules={props.rules.rulesEmail}
			/>
			<Select
				control={props.form.control}
				errors={props.form.errors}
				defaultValue={props.defaultValues.ageId}
				options={props.optionsAges}
				name='ageId'
				label={props.texts('campo_edad')}
				rules={props.rules.rulesAge}
			/>
			<Select
				control={props.form.control}
				errors={props.form.errors}
				defaultValue={props.defaultValues.genderId}
				options={props.optionsGenders}
				name='genderId'
				label={props.texts('campo_genero')}
				rules={props.rules.rulesGender}
			/>
		</Scaffold.Content>
		<Scaffold.Footer>
			<Button
				onClick={props.form.handleSubmit(props.handlerSaveEditButton)}
				disabled={!props.form.isValid || props.form.isSubmitting}
			>
				{props.texts('guardar')}
			</Button>
		</Scaffold.Footer>
	</Scaffold>
);
export default View;
