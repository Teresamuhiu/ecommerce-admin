import { useEffect, useState } from "react"

export const useOrigin = () => {
	const [mounted, setMounted] = useState(false);
	//check if window is available
	//if it is check if window.location exists
	//if true check location
	//otherwise pass an empty string
	const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return '';
	}

	return origin;
};