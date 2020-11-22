const initRange = () => {
	const START_ARROW = -35;
	const MAX_ARROW = 190;
	const MAX_VALUE = 100;

	const arrow = document.querySelector('.interactive__arrow');
	const jsInput = document.querySelector('.description__input');

	const getRange = () => {
		const ratio = MAX_ARROW / MAX_VALUE;

		const shift = START_ARROW + jsInput.value * ratio;
		arrow.style.transform = `rotate(${shift}deg)`;
	};

	const changeInput = () => {
		document.addEventListener('mousewheel', () => {

		});
	};

	jsInput.addEventListener('focus', changeInput);
	jsInput.addEventListener('input', getRange);
	getRange();
};

export {initRange};