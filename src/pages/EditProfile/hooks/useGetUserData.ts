import { TUserEdit } from 'models';
import { useCallback } from 'react';
import { FieldValues, UseFormReset } from 'react-hook-form';
import Server from 'server';

const useGetGenders = (reset: UseFormReset<FieldValues>, id: string) => {
	const getGenders = useCallback(async () => {
		const response: TUserEdit = await Server.getUser(id);
		const { name, email, ageId, genderId } = response;
		reset({
			name: String(name),
			email: String(email),
			ageId: String(ageId),
			genderId: String(genderId),
		});
	}, [id, reset]);

	return getGenders;
};

export default useGetGenders;
