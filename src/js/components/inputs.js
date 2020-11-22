const Classname = {
	ACTIVE: 'personal--approved',
};
const personal = document.querySelector('.personal');
const personalForm = personal.querySelector('.personal__form');

const personalClassChange = () => {
	if (!personalForm.reportValidity() && personal.classList.contains(Classname.ACTIVE)) {
		personal.classList.remove(Classname.ACTIVE);
	} else {
		personal.classList.add(Classname.ACTIVE);
	}
};

const initInputs = () => {
	personalClassChange();
	personalForm.addEventListener('change', personalClassChange);
};

export {initInputs};