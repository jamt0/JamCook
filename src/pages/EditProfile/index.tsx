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
import { TOptionsAges, TOptionsGender, TUserEdit } from 'models';
import { useFetchMultiple, useShowTabs } from 'hooks';
import {
	useGetAges,
	useGetGenders,
	useGetUserData,
	useSetInitialData,
} from './hooks';

const EditProfile: React.FC = () => {
	const history = useHistory();
	const { t } = useTranslation();
	const [optionsAges, setOptionsAges] = useState<TOptionsAges>([]);
	const [optionsGenders, setOptionsGenders] = useState<TOptionsGender>([]);

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

	const getGenders = useGetGenders(setOptionsAges);
	const getAges = useGetAges(setOptionsGenders);
	const getUserData = useGetUserData(reset, '4');

	const { error, loading } = useSetInitialData(
		getGenders,
		getAges,
		getUserData
	);

	const defaultValues = { name: '', ageId: '', genderId: '', email: '' };

	const rules = {
		rulesEmail: rulesEmail(t),
		rulesPassword: rulesPassword(t),
		rulesAge: rulesAge(t),
		rulesGender: rulesGender(t),
	};

	return (
		<View
			rules={rules}
			handlerSaveEditButton={handlerSaveEditButton}
			fileChangedHandler={fileChangedHandler}
			texts={t}
			error={error}
			loading={loading}
			optionsAges={optionsAges}
			optionsGenders={optionsGenders}
			form={{ control, errors, isValid, isSubmitting, handleSubmit }}
			defaultValues={defaultValues}
		/>
	);
};

export default EditProfile;
