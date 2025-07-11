import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ children, onClick, type }) {
	return (
		<button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
			{children}
		</button>
	);
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func,
	type: PropTypes.oneOf(['primary', 'secondary', 'back']),
};

export default Button;
