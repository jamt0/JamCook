import { useCallback, useEffect, useState } from 'react';

type TResponseError = {
	error: string;
};

const useFetch = <T>(
	fetchFunction: <B>(data?: B) => Promise<T[] | TResponseError>
) => {
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<T[]>([]);

	const isResponseError = useCallback(
		(response: T[] | TResponseError): response is TResponseError =>
			'error' in response,
		[]
	);

	const fetchDataInfinite = useCallback(async () => {
		try {
			const response = await fetchFunction();
			if (isResponseError(response)) setError(response.error);
			else setData([...data, ...response]);
		} catch (error) {}
	}, [fetchFunction, data, isResponseError]);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			setError('');
			const response = await fetchFunction();
			if (isResponseError(response)) setError(response.error);
			else setData(response);
			setLoading(false);
		} catch (error) {
			setError('Error de conexión');
			setLoading(false);
		}
	}, [fetchFunction, isResponseError]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { error, loading, data, fetchData, fetchDataInfinite };
};
export default useFetch;
