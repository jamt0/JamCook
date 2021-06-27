import { useCallback } from 'react';
import { RefresherEventDetail } from '@ionic/core';

const useRefresh = (fetchData: () => Promise<void>) => {
	const doRefresh = useCallback(
		async (event: CustomEvent<RefresherEventDetail>) => {
			await fetchData();
			event.detail.complete();
		},
		[fetchData]
	);
	return doRefresh;
};
export default useRefresh;
