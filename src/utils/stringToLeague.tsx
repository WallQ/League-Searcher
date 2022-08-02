import Iron from '../assets/images/leagues/Iron.png';
import Bronze from '../assets/images/leagues/Bronze.png';
import Silver from '../assets/images/leagues/Silver.png';
import Gold from '../assets/images/leagues/Gold.png';
import Platinum from '../assets/images/leagues/Platinum.png';
import Diamond from '../assets/images/leagues/Diamond.png';
import Master from '../assets/images/leagues/Master.png';
import GrandMaster from '../assets/images/leagues/GrandMaster.png';
import Challenger from '../assets/images/leagues/Challenger.png';

const stringToLeague = (league: string) => {
	switch (league) {
		case 'IRON':
			return Iron;
		case 'BRONZE':
			return Bronze;
		case 'SILVER':
			return Silver;
		case 'GOLD':
			return Gold;
		case 'PLATINUM':
			return Platinum;
		case 'DIAMOND':
			return Diamond;
		case 'MASTER':
			return Master;
		case 'GRANDMASTER':
			return GrandMaster;
		case 'CHALLENGER':
			return Challenger;
		default:
			return '';
	}
};

export default stringToLeague;
