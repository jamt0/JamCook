import { useCallback, useState } from 'react';
import { TOptionsAges } from 'models';
import Server from 'server';

const useGetAges = (
	setOptionsAges: React.Dispatch<React.SetStateAction<TOptionsAges>>
) => {
	const getAges = useCallback(async () => {
		const response: TOptionsAges = await Server.getAges();
		setOptionsAges(response);
	}, [setOptionsAges]);

	return getAges;
};
export default useGetAges;
