type Swipe = 'left' | 'right' | 'up' | 'down' | null;

const useSwipe = () => {
	const coords = reactive({
		startX: 0,
		startY: 0,
		endX: 0,
		endY: 0,
	});

	const handleTouchStart = (event: TouchEvent) => {
		coords.startX = event.touches[0].clientX;
		coords.startY = event.touches[0].clientY;
	};

	const handleTouchMove = (event: TouchEvent) => {
		coords.endX = event.touches[0].clientX;
		coords.endY = event.touches[0].clientY;
	};

	const handleTouchEnd = (): Swipe => {
		const deltaX = coords.endX - coords.startX;
		const deltaY = coords.endY - coords.startY;

		// Adjust these values based on your sensitivity requirements
		const swipeThreshold = 50;

		if (Math.abs(deltaX) > swipeThreshold) return deltaX > 0 ? 'right' : 'left';

		if (Math.abs(deltaY) > swipeThreshold) return deltaY > 0 ? 'down' : 'up';

		return null;
	};

	return {
		//* Props
		handleTouchStart,
		handleTouchMove,
		handleTouchEnd,

		//! Getters
		directionSwiped: computed(() => handleTouchEnd()),

		//? Methods
	};
};

export default useSwipe;
