import { useCallback, useEffect, useState } from 'react';

type TResponseError = {
	error: string;
};

const useFetch = <T>(
	fetchFunction: <B>(data?: B) => Promise<T | TResponseError>,
	initialState: T
) => {
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<T>(initialState);

	const isResponseError = useCallback(
		(response: T | TResponseError): response is TResponseError =>
			'error' in response,
		[]
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchFunction();
				if (isResponseError(response)) setError(response.error);
				else setData(response);
			} catch (error) {
				console.log(error);
				setError('Error de conexión');
			}
		};
		setLoading(true);
		fetchData();
		setLoading(false);
	}, [fetchFunction, isResponseError]);

	return { error, loading, data };
};
export default useFetch;
