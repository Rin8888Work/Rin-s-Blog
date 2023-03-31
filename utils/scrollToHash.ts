export function scrollToHash(hash, offset) {
	const target = document.querySelector(hash);
	const targetPosition = target.offsetTop - offset;
	window.scrollTo({
		top: targetPosition,
		behavior: 'smooth',
	});
}
