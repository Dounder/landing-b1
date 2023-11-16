import { useWindowSize } from '@vueuse/core';

const useWindow = () => {
	const { width, height } = useWindowSize();

	return {
		//* Props
		width,
		height,
		//! Getters
		isMobile: computed(() => width.value < 768),
		//? Methods
	};
};

export default useWindow;
