import { useCallback } from 'react';

const useInfinite = (fetchDataInfinite: () => Promise<void>) => {
	const doRefresh = useCallback(
		async (event: CustomEvent<void>) => {
			await fetchDataInfinite();
			(event.target as HTMLIonInfiniteScrollElement).complete();
		},
		[fetchDataInfinite]
	);
	return doRefresh;
};
export default useInfinite;
