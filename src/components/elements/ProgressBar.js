import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
	children: PropTypes.node,
	progress: PropTypes.number
	// status: PropTypes.string
};

const defaultProps = {
	children: null,
	progress: 0
	// status: false
};

const ProgressBar = ({ children, className, status, ...props }) => {
	// const [progress, setProgress] = useState(
	// 	JSON.parse(localStorage.getItem("progress")) || 0
	// );

	// useEffect(() => {
	// 	if (localStorage.getItem("progress") == null) {
	// 		localStorage.setItem("progress", 0); //set checkbox as unchecked by default if no prior data stored
	// 	}
	// });

	const classes = classNames(
		"progress-bar",
		// status && `text-color-${status}`,
		className
	);

	return (
		<div {...props} className={classes}>
			<progress value={props.progress} max="6">
				0%
			</progress>
			{children}
		</div>
	);
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;

export default ProgressBar;
