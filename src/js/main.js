import './vendor';
import './helpers';
import {initInputs} from './components/inputs';
import {initRange} from './components/range';

window.addEventListener('load', () => {
	initInputs();
	initRange();
});