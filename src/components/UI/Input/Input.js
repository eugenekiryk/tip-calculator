import classes from './Input.module.css';

function Input(props) {
	return (
		<div className={`${classes.input} ${props.className}`}>
			{
				props.label ? 
					<label htmlFor={props.input.id}>
						{props.children}
						{props.label}
					</label> 
					: null
			}
			<input {...props.input} />
		</div>
	);
}

export default Input;