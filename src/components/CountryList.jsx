import Spinner from './Spinner';
import Message from './Message';
import CountryItem from './CountryItem';
import styles from './CountryList.module.css';
import PropTypes from 'prop-types';

function CountryList({ cities, isLoading }) {
	if (isLoading) {
		return <Spinner />;
	}

	if (!cities.length) {
		return (
			<Message message="Add your first city by clicking on a city on the map" />
		);
	}

	const countries = cities.reduce((arr, city) => {
		if (!arr.map((el) => el.country).includes(city.country)) {
			return [...arr, { country: city.country, emoji: city.flagPath }];
		} else {
			return arr;
		}
	}, []);

	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem key={country.id} country={country} />
			))}
		</ul>
	);
}

CountryList.propTypes = {
	cities: PropTypes.array,
	isLoading: PropTypes.bool,
};

export default CountryList;
