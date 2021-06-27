import { useIonViewWillEnter } from '@ionic/react';
import { useAppDispatch } from 'global/hooks';
import { setShowTabs } from 'global/features/UISlice';

const useShowTabs = (showTabs: boolean) => {
	const dispatch = useAppDispatch();
	return useIonViewWillEnter(() => {
		dispatch(setShowTabs(showTabs));
	}, [dispatch, showTabs]);
};

export default useShowTabs;
