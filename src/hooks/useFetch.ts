import { useCallback, useEffect, useState } from 'react';

type TResponseError = {
	error: string;
};

const useFetch = <T>(
	fetchFunction: <B>(data?: B) => Promise<T | TResponseError>,
	initialState: T
) => {
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<T>(initialState);

	const isResponseError = useCallback(
		(response: T | TResponseError): response is TResponseError =>
			'error' in response,
		[]
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetchFunction();
				if (isResponseError(response)) setError(response.error);
				else setData(response);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setError('Error de conexión');
				setLoading(false);
			}
		};
		fetchData();
	}, [fetchFunction, isResponseError]);

	return { error, loading, data };
};
export default useFetch;
