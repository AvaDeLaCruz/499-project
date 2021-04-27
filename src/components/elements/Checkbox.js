import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	children: PropTypes.node,
	name: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	checked: PropTypes.bool
};

const defaultProps = {
	children: null,
	name: undefined,
	value: undefined,
	disabled: false,
	checked: undefined
};

const Checkbox = ({
	className,
	children,
	name,
	value,
	disabled,
	checked,
	...props
}) => {
	const [defaultState, setDefaultState] = useState(
		localStorage.getItem(name) || ""
	);

	useEffect(() => {
		// console.log(defaultState);
		// console.log(props.name);
		const storageName = JSON.stringify(name);

		console.log(name);
		console.log(localStorage.getItem(storageName));

		if (localStorage.getItem(storageName) == null) {
			localStorage.setItem(storageName, false); //set checkbox as unchecked by default if no prior data stored
		}
	});

	const classes = classNames("form-checkbox", className);

	const handleCheckboxChange = e => {
		// e.preventDefault();
		if (e.target.type === "checkbox") {
			const id = JSON.stringify(e.target.id);
			const checked = JSON.stringify(e.target.checked);
			localStorage.setItem(id, checked);
		}
	};

	return (
		<label className={classes}>
			<input
				{...props}
				type="checkbox"
				name={name}
				value={value}
				disabled={disabled}
				checked={checked}
				onChange={handleCheckboxChange}
			/>
			{children}
		</label>
	);
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
