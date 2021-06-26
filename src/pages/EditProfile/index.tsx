import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Server from 'server';
import config from 'config';
import {
	rulesEmail,
	rulesPassword,
	rulesGender,
	rulesAge,
} from 'utils/rulesValidation';
import View from './view';
import { TUserEdit } from 'models';
import useShowTabs from 'hooks/useShowTabs';

const EditProfile: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();
	const [errores, setErrores] = useState<string>('');
	const [avatarImageUrl, setAvatarImageUrl] = useState<any>(
		`${config.baseURL}/images/avatars/default.png`
	);
	const [loading, setLoading] = useState<boolean>(false);
	const [optionsAges, setOptionsAges] = useState();
	const [optionsGenders, setOptionsGenders] = useState();

	useShowTabs(false);

	const {
		control,
		handleSubmit,
		reset,
		formState: { isSubmitting, isValid, errors },
	} = useForm({
		mode: 'onChange',
	});

	const handlerSaveEditButton = async (user: TUserEdit) => {
		// if (auth.user?.id) {
		//   setLoading(true);
		//   const errorUpdate = await Server.putUser(auth.user.id, user);
		//   if (errorUpdate.data.error !== null) {
		//     setErrores(errorUpdate.data.error);
		//     setLoading(false);
		//   } else {
		//     history.goBack();
		//     setLoading(false);
		//   }
		// }
	};

	const fileChangedHandler = async (e: any) => {
		// const reader = new FileReader();
		// const imageAvatar = new FormData();
		// reader.onload = (event) => {
		//   if (reader.readyState === 2) setAvatarImageUrl(event?.target?.result);
		// };
		// reader.readAsDataURL(e.target.files[0]);
		// imageAvatar.append("avatarImage", e.target.files[0]);
		// if (auth.user?.id) {
		//   setLoading(true);
		//   const errorUpdateAvatar = await Server.putImageAvatar(
		//     auth.user.id,
		//     imageAvatar
		//   );
		//   if (errorUpdateAvatar.data.error) {
		//     setErrores(errorUpdateAvatar.data.error);
		//   }
		//   setLoading(false);
		// }
	};

	// useEffect(() => {
	//   //ACA TOCA MIRAR COMO HACER PARA SINCRONIZAR EL LOADING
	//   //ADEMAS LO IDEAL ES QUE ESTEN LAS OPCIONES PARA PODER PONER LA DEL USER
	//   Server.getGenders()
	//     .then((response) => {
	//       if (!response.data.error) setOptionsGenders(response.data.options);
	//       else setErrores(response.data.error);
	//     })
	//     .catch((error) => console.log(error));

	//   Server.getAges()
	//     .then((response) => {
	//       if (!response.data.error) setOptionsAges(response.data.options);
	//       else setErrores(response.data.error);
	//     })
	//     .catch((error) => console.log(error));

	//   if (auth.user?.id) {
	//     setLoading(true);
	//     Server.getUser(auth.user.id)
	//       .then((response) => {
	//         if (!response.data.error) {
	//           reset({
	//             name: String(response.data.user.name),
	//             email: String(response.data.user.email),
	//             ageId: String(response.data.user.ageId),
	//             genderId: String(response.data.user.genderId),
	//           });
	//           setLoading(false);
	//         } else {
	//           setErrores(response.data.error);
	//           setLoading(false);
	//         }
	//       })
	//       .catch((error) => {
	//         console.log(error);
	//         setLoading(false);
	//       });

	//     Server.getImageAvatar(auth.user.id)
	//       .then((response) => {
	//         if (!response.data.error)
	//           setAvatarImageUrl(`${config.baseURL}/${response.data.path}`);
	//         else setErrores(response.data.error);
	//       })
	//       .catch((error) => console.log(error));
	//   }
	// }, []);

	const defaultValues = { name: '', ageId: '', genderId: '', email: '' };

	const rules = {
		rulesEmail: rulesEmail(t),
		rulesPassword: rulesPassword(t),
		rulesAge: rulesAge(t),
		rulesGender: rulesGender(t),
	};

	return (
		<View
			avatarImageUrl={avatarImageUrl}
			rules={rules}
			handlerSaveEditButton={handlerSaveEditButton}
			fileChangedHandler={fileChangedHandler}
			texts={t}
			errores={errores}
			loading={loading}
			optionsAges={optionsAges}
			optionsGenders={optionsGenders}
			formHook={{ control, errors, isValid, isSubmitting, handleSubmit }}
			defaultValues={defaultValues}
		/>
	);
};

export default EditProfile;
