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
	const [checkedState, setCheckedState] = useState(
		JSON.parse(localStorage.getItem(JSON.stringify(name))) || false
	);

	useEffect(() => {
		// console.log(defaultState);
		// console.log(props.name);
		const storageName = JSON.stringify(name);

		console.log(name);
		console.log(localStorage.getItem(storageName));
		console.log(checkedState);
		console.log("--------");

		if (localStorage.getItem(storageName) == null) {
			localStorage.setItem(storageName, false); //set checkbox as unchecked by default if no prior data stored
		}

		// checked = localStorage.getItem(storageName);
	});

	const classes = classNames("form-checkbox", className);

	const handleCheckboxChange = e => {
		// e.preventDefault();
		if (e.target.type === "checkbox") {
			const id = e.target.id;
			const checked = e.target.checked;
			localStorage.setItem(JSON.stringify(id), JSON.stringify(checked));
			setCheckedState(!checkedState);
			const currentProgress = JSON.parse(localStorage.getItem("progress"));
			let newProgress = checked ? currentProgress + 1 : currentProgress - 1;

			localStorage.setItem("progress", newProgress);
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
				checked={checkedState}
				onChange={handleCheckboxChange}
			/>
			{children}
		</label>
	);
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
