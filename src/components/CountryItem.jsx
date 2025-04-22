import PropTypes from 'prop-types';
import styles from './CountryItem.module.css';

function CountryItem({ country }) {
	return (
		<li className={styles.countryItem}>
			<img src={country.emoji} alt={`${country.country} flag`} />
			<span>{country.country}</span>
		</li>
	);
}

CountryItem.propTypes = {
	country: PropTypes.object.isRequired,
};

export default CountryItem;
