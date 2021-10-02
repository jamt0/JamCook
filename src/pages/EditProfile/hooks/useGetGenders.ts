import { useCallback, useState } from 'react';
import { TOptionsGender } from 'models';
import Server from 'server';

const useGetGenders = (
	setOptionsGenders: React.Dispatch<React.SetStateAction<TOptionsGender>>
) => {
	const getGenders = useCallback(async () => {
		const response: TOptionsGender = await Server.getGenders();
		setOptionsGenders(response);
	}, [setOptionsGenders]);

	return getGenders;
};
export default useGetGenders;
