import { useCallback } from 'react';
import { TResponseError } from 'models';

const useIsResponseError = () => {
	const isResponseError = useCallback(
		<T>(response: T | TResponseError): response is TResponseError =>
			'error' in response,
		[]
	);
	return isResponseError;
};

export default useIsResponseError;
