import Mastery1 from '../assets/images/masteries/mastery-1.png';
import Mastery2 from '../assets/images/masteries/mastery-2.png';
import Mastery3 from '../assets/images/masteries/mastery-3.png';
import Mastery4 from '../assets/images/masteries/mastery-4.png';
import Mastery5 from '../assets/images/masteries/mastery-5.png';
import Mastery6 from '../assets/images/masteries/mastery-6.png';
import Mastery7 from '../assets/images/masteries/mastery-7.png';

const numberToMastery = (number: number) => {
	switch (number) {
		case 1:
			return Mastery1;
		case 2:
			return Mastery2;
		case 3:
			return Mastery3;
		case 4:
			return Mastery4;
		case 5:
			return Mastery5;
		case 6:
			return Mastery6;
		case 7:
			return Mastery7;
		default:
			return '';
	}
};

export default numberToMastery;
