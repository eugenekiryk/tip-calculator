import classes from './Button.module.css';

function Button({ children, className, disabled, id, onClick }) {
	return (
		<button id={id} className={`${classes.button} ${className}`} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;