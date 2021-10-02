import { useCallback, useEffect, useState } from 'react';

type TResponseError = {
	error: string;
};
type TFunctionFetch<T> = <B>(data?: B) => Promise<Partial<T> | TResponseError>;

const useFetchMultiple = <T>(
	fetchFunctions: TFunctionFetch<T>[],
	initialState: T
) => {
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState<Partial<T>>(initialState);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			setError('');
			let response: Partial<T> = {};
			fetchFunctions.map(async (fetchFunction, index) => {
				const res: Partial<T> | TResponseError = await fetchFunction();
				response = { ...response, ...res };
				setData(response);
				if (index === fetchFunctions.length - 1) setLoading(false);
			});
		} catch (error) {
			setError('Error de conexión');
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return { error, loading, data, fetchData };
};
export default useFetchMultiple;
