import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CityItem.module.css';

const formatDate = (date) =>
	new Intl.DateTimeFormat('en', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		// weekday: 'long',
	}).format(new Date(date));

function CityItem({ city }) {
	const { cityName, emoji, flagPath, date, id } = city;

	return (
		<li>
			<Link className={styles.cityItem} to={`cities/${id}`}>
				<span className={styles.emoji}>
					<img src={flagPath} alt={`Flag of ${emoji}`} />
				</span>
				<h3 className={styles.name}>{cityName}</h3>
				<time className={date}>{formatDate(date)}</time>
				<button className={styles.deleteBtn}>&times;</button>
			</Link>
		</li>
	);
}

CityItem.propTypes = {
	city: PropTypes.object.isRequired,
};

export default CityItem;
