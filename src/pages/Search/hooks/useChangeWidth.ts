import { useCallback, useEffect, useState } from 'react';

const useChangeWidth = (
	setslidesPerView: React.Dispatch<React.SetStateAction<number>>
) => {
	const [width, setWidth] = useState(window.innerWidth);
	const handleResize = useCallback(() => {
		if (window.innerWidth >= 568 && width < 568) setWidth(window.innerWidth);
		if (window.innerWidth <= 568 && width > 568) setWidth(window.innerWidth);
	}, [setWidth, width]);
	return useEffect(() => {
		window.addEventListener('resize', handleResize);
		if (width >= 568) setslidesPerView(2.25);
		else setslidesPerView(1.25);
		return () => window.removeEventListener('resize', handleResize);
	}, [width, setslidesPerView, handleResize]);
};

export default useChangeWidth;
